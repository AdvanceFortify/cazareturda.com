'use client';

import { useState } from 'react';
import styles from './AvailabilityCalendar.module.css';

interface AvailabilityCalendarProps {
  blockedDates: string[];
  title?: string;
}

const WEEKDAYS = ['L', 'Ma', 'Mi', 'J', 'V', 'S', 'D'];
const MONTH_NAMES = [
  'Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie',
  'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'
];

interface DayInfo {
  date: Date;
  dateString: string;
  isBlocked: boolean;
  isCurrentMonth: boolean;
  dayNumber: number;
  isToday: boolean;
}

function getDaysInMonth(year: number, month: number, blockedSet: Set<string>, today: Date): DayInfo[] {
  const days: DayInfo[] = [];
  
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const startingDayOfWeek = firstDay.getDay();
  const daysInMonth = lastDay.getDate();
  
  // Adjust for Monday start (0 = Monday, 6 = Sunday)
  const adjustedStartDay = startingDayOfWeek === 0 ? 6 : startingDayOfWeek - 1;
  
  // Add days from previous month to fill the first week
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = adjustedStartDay - 1; i >= 0; i--) {
    const day = prevMonthLastDay - i;
    const date = new Date(year, month - 1, day);
    const dateString = formatDate(date);
    days.push({
      date,
      dateString,
      isBlocked: blockedSet.has(dateString),
      isCurrentMonth: false,
      dayNumber: day,
      isToday: isSameDay(date, today),
    });
  }
  
  // Add days of current month
  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(year, month, day);
    const dateString = formatDate(date);
    days.push({
      date,
      dateString,
      isBlocked: blockedSet.has(dateString),
      isCurrentMonth: true,
      dayNumber: day,
      isToday: isSameDay(date, today),
    });
  }
  
  // Add days from next month to complete the grid
  const remainingDays = 7 - (days.length % 7);
  if (remainingDays < 7) {
    for (let day = 1; day <= remainingDays; day++) {
      const date = new Date(year, month + 1, day);
      const dateString = formatDate(date);
      days.push({
        date,
        dateString,
        isBlocked: blockedSet.has(dateString),
        isCurrentMonth: false,
        dayNumber: day,
        isToday: isSameDay(date, today),
      });
    }
  }
  
  return days;
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function isSameDay(date1: Date, date2: Date): boolean {
  return formatDate(date1) === formatDate(date2);
}

export default function AvailabilityCalendar({
  blockedDates,
  title = 'Disponibilitate (sincronizat automat cu Booking)',
}: AvailabilityCalendarProps) {
  const blockedSet = new Set(blockedDates);
  const today = new Date();
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  
  // Get 3 months: current, next, next+1
  const months = [
    { month: currentMonth, year: currentYear },
    { 
      month: currentMonth === 11 ? 0 : currentMonth + 1, 
      year: currentMonth === 11 ? currentYear + 1 : currentYear 
    },
    { 
      month: currentMonth >= 10 ? (currentMonth + 2) % 12 : currentMonth + 2, 
      year: currentMonth >= 10 ? currentYear + 1 : currentYear 
    },
  ];
  
  const renderMonth = (monthInfo: { month: number; year: number }, index: number) => {
    const monthDays = getDaysInMonth(monthInfo.month, monthInfo.year, blockedSet, today);
    
    return (
      <div key={index} className={styles.monthContainer}>
        <h3 className={styles.monthTitle}>
          {MONTH_NAMES[monthInfo.month]} {monthInfo.year}
        </h3>
        <div className={styles.weekdays}>
          {WEEKDAYS.map((day, idx) => (
            <div key={idx} className={styles.weekday}>
              {day}
            </div>
          ))}
        </div>
        <div className={styles.daysGrid}>
          {monthDays.map((dayInfo, idx) => {
            const isPast = dayInfo.date < today && !dayInfo.isToday;
            
            return (
              <div
                key={idx}
                className={`${styles.dayCell} ${
                  !dayInfo.isCurrentMonth ? styles.otherMonth : ''
                } ${dayInfo.isBlocked ? styles.blocked : styles.available} ${
                  isPast ? styles.past : ''
                } ${dayInfo.isToday ? styles.today : ''}`}
              >
                <div className={styles.dayNumber}>{dayInfo.dayNumber}</div>
                {dayInfo.isCurrentMonth && !isPast && (
                  <div className={styles.dayLabel}>
                    {dayInfo.isBlocked ? 'Indisponibil' : 'Disponibil'}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  
  return (
    <div className={styles.calendar}>
      {title && <h2 className={styles.title}>{title}</h2>}
      
      <div className={styles.monthsContainer}>
        {months.map((monthInfo, index) => renderMonth(monthInfo, index))}
      </div>
      
      <div className={styles.legend}>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.legendAvailable}`}></span>
          <span>Disponibil</span>
        </div>
        <div className={styles.legendItem}>
          <span className={`${styles.legendColor} ${styles.legendBlocked}`}></span>
          <span>Indisponibil</span>
        </div>
      </div>
    </div>
  );
}
