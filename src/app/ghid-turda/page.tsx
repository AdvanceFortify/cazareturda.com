import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/Hero';
import { guidePosts } from '@/data/guides';
import styles from './guides.module.css';

export const metadata: Metadata = {
  title: 'Ghid Turda - Articole & Sfaturi pentru Vizitarea Turdei',
  description: 'Ghid complet Turda: articole despre atracții, transport, cazare, restaurante. Tot ce trebuie să știi pentru o vizită perfectă în Turda.',
  alternates: {
    canonical: 'https://cazareturda.com/ghid-turda',
  },
};

export default function GhidTurdaPage() {
  return (
    <>
      <Hero
        title="Ghid Complet Turda"
        subtitle="Articole, sfaturi și recomandări pentru o vizită perfectă în Turda"
        imageUrl="https://cazareturda.com/images/cazare-turda-aproape-de-salina.webp"
        imageAlt="Ghid turistic Turda"
        compact
      />
      
      <section className="section">
        <div className="container container-content">
          <div style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }}>
            <h2>Bine ai venit la Ghidul Turda!</h2>
            <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', maxWidth: '800px', margin: '0 auto' }}>
              Aici găsești articole detaliate, sfaturi practice și recomandări pentru a explora 
              Turda ca un local. De la cum să ajungi la Salină până la cele mai bune restaurante, 
              avem toate informațiile de care ai nevoie.
            </p>
          </div>
          
          <div className={styles.postsGrid}>
            {guidePosts.map((post) => (
              <Link key={post.slug} href={`/ghid-turda/${post.slug}`} className={styles.postCard}>
                <div className={styles.postImageWrapper}>
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className={styles.postImage}
                  />
                  <span className={styles.postCategory}>{post.category}</span>
                </div>
                <div className={styles.postContent}>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postMeta}>
                    <span className={styles.postDate}>
                      {new Date(post.publishedAt).toLocaleDateString('ro-RO', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      
      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="container container-content">
          <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
            Ghiduri Esențiale
          </h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
            <Link href="/salina-turda" className={styles.essentialCard}>
              <h3>🏛️ Salina Turda</h3>
              <p>Program, prețuri, ce să vezi, sfaturi practice</p>
            </Link>
            
            <Link href="/atractii-turda" className={styles.essentialCard}>
              <h3>🎯 Atracții Turistice</h3>
              <p>Top 10+ obiective turistice în Turda și împrejurimi</p>
            </Link>
            
            <Link href="/ce-sa-faci-in-turda" className={styles.essentialCard}>
              <h3>🗺️ Ce să faci în Turda</h3>
              <p>Activități, restaurante, shopping, itinerarii</p>
            </Link>
            
            <Link href="/weekend-in-turda" className={styles.essentialCard}>
              <h3>📅 Weekend Perfect</h3>
              <p>Itinerariu detaliat pentru 2-3 zile în Turda</p>
            </Link>
            
            <Link href="/turda-cu-copiii" className={styles.essentialCard}>
              <h3>👶 Turda cu Copiii</h3>
              <p>Ghid complet pentru familii cu copii</p>
            </Link>
            
            <Link href="/cazare-langa-salina-turda" className={styles.essentialCard}>
              <h3>🏠 Cazare lângă Salină</h3>
              <p>Apartamente la 5-10 minute de Salina Turda</p>
            </Link>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container container-narrow text-center">
          <h2>Planifici o vizită în Turda?</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
            Rezervă cazare în apartamentele noastre situate strategic pentru acces rapid la toate atracțiile!
          </p>
          <Link href="/#apartamente" className="btn btn-primary btn-large">
            Vezi Apartamentele Disponibile
          </Link>
        </div>
      </section>
    </>
  );
}
