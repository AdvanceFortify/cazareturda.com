'use client';

import { useState } from 'react';
import styles from './Accordion.module.css';

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
}

export default function Accordion({ items, className = '' }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className={`${styles.accordion} ${className}`}>
      {items.map((item, index) => (
        <div
          key={index}
          className={styles.item}
          data-open={openIndex === index}
        >
          <button
            type="button"
            className={styles.trigger}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            aria-expanded={openIndex === index}
            aria-controls={`accordion-panel-${index}`}
            id={`accordion-trigger-${index}`}
          >
            {item.question}
          </button>
          <div
            id={`accordion-panel-${index}`}
            role="region"
            aria-labelledby={`accordion-trigger-${index}`}
            className={styles.panel}
          >
            <div className={styles.panelInner}>
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
