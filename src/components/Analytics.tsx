'use client';

import { useSyncExternalStore } from 'react';
import Script from 'next/script';
import styles from './Analytics.module.css';

const GA_ID = 'G-TYDE3E38KZ';
const STORAGE_KEY = 'cookie-consent';

// 'pending' = rendered on the server, before localStorage can be read
type Consent = 'granted' | 'denied' | 'unset' | 'pending';

const listeners = new Set<() => void>();
let memoryConsent: Consent = 'unset';

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

function getSnapshot(): Consent {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === 'granted' || value === 'denied' ? value : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

function choose(value: 'granted' | 'denied') {
  memoryConsent = value;
  try {
    window.localStorage.setItem(STORAGE_KEY, value);
  } catch {}
  listeners.forEach((listener) => listener());
}

export default function Analytics() {
  const consent = useSyncExternalStore(subscribe, getSnapshot, () => 'pending' as Consent);
  const ready = consent !== 'pending';

  return (
    <>
      {consent === 'granted' && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
          <Script id="ga-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}', { anonymize_ip: true });`}
          </Script>
        </>
      )}

      {ready && consent === 'unset' && (
        <div className={styles.banner} role="dialog" aria-label="Acord cookie-uri">
          <p className={styles.text}>
            Folosim cookie-uri Google Analytics ca să vedem cum este folosit site-ul. Le activăm doar cu acordul tău.
          </p>
          <div className={styles.actions}>
            <button type="button" className={`btn btn-outline ${styles.btn}`} onClick={() => choose('denied')}>
              Refuz
            </button>
            <button type="button" className={`btn btn-secondary ${styles.btn}`} onClick={() => choose('granted')}>
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
