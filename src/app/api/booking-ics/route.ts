import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const revalidate = 0;

interface ICSEvent {
  dtstart: string;
  dtend: string;
}

function unfoldLines(icsContent: string): string[] {
  const lines = icsContent.split(/\r?\n/);
  const unfolded: string[] = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // If line starts with space or tab, it's a continuation of previous line
    if (line.length > 0 && (line[0] === ' ' || line[0] === '\t')) {
      if (unfolded.length > 0) {
        unfolded[unfolded.length - 1] += line.substring(1);
      }
    } else {
      unfolded.push(line);
    }
  }
  
  return unfolded;
}

function parseICS(icsContent: string): ICSEvent[] {
  const events: ICSEvent[] = [];
  const lines = unfoldLines(icsContent);
  
  let currentEvent: Partial<ICSEvent> | null = null;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    if (line === 'BEGIN:VEVENT') {
      currentEvent = {};
    } else if (line === 'END:VEVENT' && currentEvent) {
      if (currentEvent.dtstart && currentEvent.dtend) {
        events.push(currentEvent as ICSEvent);
      }
      currentEvent = null;
    } else if (currentEvent) {
      if (line.startsWith('DTSTART')) {
        const match = line.match(/DTSTART[^:]*:(\d{8})/);
        if (match) {
          currentEvent.dtstart = match[1];
        }
      } else if (line.startsWith('DTEND')) {
        const match = line.match(/DTEND[^:]*:(\d{8})/);
        if (match) {
          currentEvent.dtend = match[1];
        }
      }
    }
  }
  
  return events;
}

function getBlockedDates(events: ICSEvent[]): string[] {
  const blockedDates = new Set<string>();
  
  for (const event of events) {
    // Parse DTSTART (format: YYYYMMDD) - inclusive
    const startYear = parseInt(event.dtstart.substring(0, 4));
    const startMonth = parseInt(event.dtstart.substring(4, 6)) - 1;
    const startDay = parseInt(event.dtstart.substring(6, 8));
    
    // Parse DTEND (format: YYYYMMDD) - exclusive (checkout day)
    const endYear = parseInt(event.dtend.substring(0, 4));
    const endMonth = parseInt(event.dtend.substring(4, 6)) - 1;
    const endDay = parseInt(event.dtend.substring(6, 8));
    
    const startDate = new Date(startYear, startMonth, startDay);
    const endDate = new Date(endYear, endMonth, endDay);
    
    // Add all dates from DTSTART (inclusive) to DTEND (exclusive)
    const currentDate = new Date(startDate);
    while (currentDate < endDate) {
      const year = currentDate.getFullYear();
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const day = String(currentDate.getDate()).padStart(2, '0');
      blockedDates.add(`${year}-${month}-${day}`);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
  
  return Array.from(blockedDates).sort();
}

export async function GET(request: NextRequest) {
  try {
    const url = request.nextUrl.searchParams.get('url');
    
    if (!url) {
      console.error('API Error: URL parameter is missing');
      return NextResponse.json(
        { error: 'URL parameter is required' },
        { status: 400 }
      );
    }
    
    const decodedUrl = decodeURIComponent(url);
    console.log('Fetching ICS from:', decodedUrl);
    
    // Fetch the ICS file with proper headers and redirect follow
    const response = await fetch(decodedUrl, {
      redirect: 'follow',
      cache: 'no-store',
      headers: {
        'User-Agent': 'Mozilla/5.0',
        'Accept': 'text/calendar, text/plain, */*',
      },
    });
    
    if (!response.ok) {
      console.error(`Failed to fetch ICS: ${response.status} ${response.statusText}`);
      return NextResponse.json(
        { 
          error: `Failed to fetch ICS: ${response.statusText}`,
          status: response.status,
        },
        { status: 500 }
      );
    }
    
    const icsContent = await response.text();
    console.log('Fetched ICS OK', { len: icsContent.length, sample: icsContent.slice(0, 60) });
    
    // Validate it's a valid iCalendar file
    if (!icsContent.includes('BEGIN:VCALENDAR')) {
      console.error('Invalid ICS: Does not contain BEGIN:VCALENDAR');
      console.error('First 200 chars:', icsContent.slice(0, 200));
      return NextResponse.json(
        { 
          error: 'Invalid ICS format: Missing BEGIN:VCALENDAR',
          preview: icsContent.slice(0, 200),
        },
        { status: 500 }
      );
    }
    
    // Parse ICS and extract blocked dates
    const events = parseICS(icsContent);
    console.log('Parsed events:', events.length);
    
    const blockedDates = getBlockedDates(events);
    console.log('Blocked dates count:', blockedDates.length);
    
    // IMPORTANT: Empty array means NO bookings, which is VALID (all days available)
    return NextResponse.json({
      blockedDates,
      success: true,
    });
    
  } catch (error) {
    console.error('Error fetching/parsing ICS:', error);
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Failed to fetch calendar data',
      },
      { status: 500 }
    );
  }
}
