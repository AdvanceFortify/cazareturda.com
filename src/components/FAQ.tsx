import styles from './FAQ.module.css';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  items: FAQItem[];
}

export default function FAQ({ title = 'Întrebări Frecvente', items }: FAQProps) {
  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <h3 className={styles.question}>{item.question}</h3>
            <p className={styles.answer}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
