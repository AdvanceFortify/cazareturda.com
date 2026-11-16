import type { Metadata } from 'next';
import Link from 'next/link';
import { CookieSettingsButton } from '@/components/Analytics';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Politica de confidențialitate',
  description: 'Cum colectează și folosește Cazare Turda datele vizitatorilor site-ului: Google Analytics, cookie-uri, contact prin WhatsApp și drepturile tale.',
  alternates: {
    canonical: 'https://www.cazareturda.com/politica-de-confidentialitate',
  },
};

const UPDATED = '16 noiembrie 2026';

export default function PrivacyPage() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <div className="container container-narrow">
          <span className={styles.eyebrow}>Informații legale</span>
          <h1 className={styles.title}>Politica de confidențialitate</h1>
          <p className={styles.updated}>Ultima actualizare: {UPDATED}</p>
        </div>
      </header>

      <div className="container container-narrow">
        <div className={styles.content}>
          <section>
            <h2>1. Cine suntem</h2>
            <p>
              Site-ul cazareturda.com este administrat de <strong>Lung Lucreția</strong>, persoană fizică, care
              operează apartamentele în regim hotelier din Turda prezentate pe site (operatorul datelor).
            </p>
            <ul>
              <li>Adresă: Str. Salinelor nr. 52, parter, ap. 12, Turda, jud. Cluj</li>
              <li>
                Telefon / WhatsApp: <a href="tel:+40748979607">0748 979 607</a>
              </li>
            </ul>
          </section>

          <section>
            <h2>2. Ce date colectăm</h2>
            <h3>Statistici de vizitare (Google Analytics)</h3>
            <p>
              Doar dacă apeși „Accept” în bannerul de cookie-uri, folosim Google Analytics 4 ca să înțelegem cum
              este folosit site-ul. Se colectează: paginile vizitate, durata vizitei, sursa vizitei (de exemplu
              Google sau Facebook), tipul de dispozitiv și browser, localizarea aproximativă (oraș / țară) și un
              identificator aleatoriu salvat într-un cookie. Adresa IP nu este stocată de Google Analytics 4.
            </p>
            <p>Dacă apeși „Refuz”, Google Analytics nu este încărcat și nu se colectează aceste date.</p>

            <h3>Contactul prin WhatsApp sau telefon</h3>
            <p>
              Când ne scrii pe WhatsApp sau ne suni pentru o rezervare, primim numele, numărul de telefon și ce ne
              comunici tu (de exemplu perioada sejurului și numărul de persoane). Folosim aceste date doar ca să-ți
              răspundem și să gestionăm rezervarea. Mesajele WhatsApp sunt procesate și de Meta, conform propriei
              politici de confidențialitate.
            </p>

            <h3>Rezervări prin Booking.com</h3>
            <p>
              Dacă rezervi prin Booking.com, datele tale sunt colectate de Booking.com conform politicii lor, iar
              noi primim de la ei doar ce este necesar pentru cazare.
            </p>

            <h3>Date tehnice de găzduire</h3>
            <p>
              Site-ul este găzduit de Vercel Inc. Ca orice server, acesta înregistrează automat, pentru scurt
              timp, date tehnice despre cereri (adresa IP, browser, ora accesării), pentru securitate și
              funcționarea site-ului.
            </p>
          </section>

          <section>
            <h2>3. De ce folosim datele și pe ce bază legală</h2>
            <ul>
              <li>
                <strong>Statistici Google Analytics</strong> – pentru a îmbunătăți site-ul; baza legală este
                consimțământul tău (art. 6 alin. (1) lit. a din Regulamentul (UE) 2016/679 – GDPR).
              </li>
              <li>
                <strong>Răspuns la mesaje și rezervări</strong> – baza legală este încheierea și executarea
                contractului de cazare (art. 6 alin. (1) lit. b GDPR).
              </li>
              <li>
                <strong>Date tehnice de găzduire</strong> – interesul legitim de a menține site-ul sigur și
                funcțional (art. 6 alin. (1) lit. f GDPR).
              </li>
            </ul>
          </section>

          <section>
            <h2>4. Cookie-uri</h2>
            <p>Site-ul folosește următoarele cookie-uri și date salvate în browser:</p>
            <div className={styles.tableWrap}>
              <table className={styles.table}>
                <thead>
                  <tr>
                    <th>Nume</th>
                    <th>Furnizor</th>
                    <th>Scop</th>
                    <th>Durată</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>cookie-consent</td>
                    <td>cazareturda.com</td>
                    <td>Ține minte dacă ai acceptat sau refuzat cookie-urile de statistică (stocare locală în browser).</td>
                    <td>Până o ștergi</td>
                  </tr>
                  <tr>
                    <td>_ga</td>
                    <td>Google Analytics</td>
                    <td>Deosebește vizitatorii între ei, pentru statistici. Doar după „Accept”.</td>
                    <td>2 ani</td>
                  </tr>
                  <tr>
                    <td>_ga_TYDE3E38KZ</td>
                    <td>Google Analytics</td>
                    <td>Păstrează starea sesiunii de vizitare. Doar după „Accept”.</td>
                    <td>2 ani</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>Poți schimba oricând alegerea făcută:</p>
            <div className={styles.action}>
              <CookieSettingsButton />
            </div>
          </section>

          <section>
            <h2>5. Cui transmitem datele</h2>
            <p>Nu vindem și nu închiriem datele tale. Ele ajung doar la furnizorii de servicii de mai jos:</p>
            <ul>
              <li>Google Ireland Ltd. – Google Analytics (doar cu acordul tău);</li>
              <li>Vercel Inc. – găzduirea site-ului;</li>
              <li>Meta Platforms Ireland Ltd. – WhatsApp, dacă ne contactezi pe această cale.</li>
            </ul>
            <p>
              Unii dintre acești furnizori pot transfera date în Statele Unite. Transferurile se fac în baza
              cadrului UE–SUA privind confidențialitatea datelor (Data Privacy Framework) sau a clauzelor
              contractuale standard aprobate de Comisia Europeană.
            </p>
          </section>

          <section>
            <h2>6. Cât timp păstrăm datele</h2>
            <ul>
              <li>Statisticile Google Analytics se păstrează cel mult 14 luni, apoi sunt șterse automat.</li>
              <li>
                Conversațiile pentru rezervări se păstrează cât este necesar pentru sejur și pentru obligațiile
                legale (de exemplu cele fiscale).
              </li>
            </ul>
          </section>

          <section>
            <h2>7. Drepturile tale</h2>
            <p>Conform GDPR, ai dreptul:</p>
            <ul>
              <li>să afli ce date avem despre tine și să primești o copie a lor;</li>
              <li>să ceri corectarea sau ștergerea lor;</li>
              <li>să restricționezi sau să te opui prelucrării;</li>
              <li>să primești datele într-un format portabil;</li>
              <li>să îți retragi oricând consimțământul, fără să afecteze prelucrarea făcută înainte.</li>
            </ul>
            <p>
              Pentru oricare dintre aceste cereri ne poți contacta la <a href="tel:+40748979607">0748 979 607</a>{' '}
              (telefon sau WhatsApp). Dacă ești nemulțumit, poți depune o plângere la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP),{' '}
              <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">
                www.dataprotection.ro
              </a>
              .
            </p>
          </section>

          <section>
            <h2>8. Modificări</h2>
            <p>
              Putem actualiza această politică atunci când se schimbă modul în care folosim datele. Data ultimei
              actualizări este afișată la începutul paginii.
            </p>
            <p>
              <Link href="/">Înapoi la pagina principală</Link>
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
