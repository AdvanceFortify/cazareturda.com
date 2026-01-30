import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { guidePosts, getGuidePostBySlug } from '@/data/guides';
import styles from './article.module.css';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return guidePosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = getGuidePostBySlug(params.slug);
  
  if (!post) {
    return {
      title: 'Articol negăsit',
    };
  }
  
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `https://cazareturda.com/ghid-turda/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://cazareturda.com/ghid-turda/${post.slug}`,
      images: [{ url: post.imageUrl }],
      type: 'article',
      publishedTime: post.publishedAt,
    },
  };
}

export default function GuidePostPage({ params }: PageProps) {
  const post = getGuidePostBySlug(params.slug);
  
  if (!post) {
    notFound();
  }
  
  const otherPosts = guidePosts.filter(p => p.slug !== post.slug).slice(0, 3);
  
  return (
    <>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className="container container-narrow">
            <div className={styles.meta}>
              <span className={styles.category}>{post.category}</span>
              <time className={styles.date}>
                {new Date(post.publishedAt).toLocaleDateString('ro-RO', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </time>
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <p className={styles.excerpt}>{post.excerpt}</p>
          </div>
        </header>
        
        <div className={styles.featuredImage}>
          <img src={post.imageUrl} alt={post.title} />
        </div>
        
        <div className="container container-narrow">
          <div className={styles.content} dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br/>') }} />
          
          <div className={styles.footer}>
            <Link href="/ghid-turda" className="btn btn-outline">
              ← Înapoi la Ghid
            </Link>
          </div>
        </div>
      </article>
      
      {otherPosts.length > 0 && (
        <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
          <div className="container container-content">
            <h2 className="text-center" style={{ marginBottom: 'var(--spacing-xl)' }}>
              Citește și
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--spacing-lg)' }}>
              {otherPosts.map((relatedPost) => (
                <Link 
                  key={relatedPost.slug} 
                  href={`/ghid-turda/${relatedPost.slug}`}
                  className={styles.relatedCard}
                >
                  <div className={styles.relatedImage}>
                    <img src={relatedPost.imageUrl} alt={relatedPost.title} />
                  </div>
                  <div className={styles.relatedContent}>
                    <h3>{relatedPost.title}</h3>
                    <p>{relatedPost.excerpt}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
      
      <section className="section">
        <div className="container container-narrow text-center">
          <h2>Planifici o vizită în Turda?</h2>
          <p style={{ fontSize: 'var(--font-size-lg)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-xl)' }}>
            Rezervă cazare în apartamentele noastre pentru o experiență completă!
          </p>
          <Link href="/#apartamente" className="btn btn-primary btn-large">
            Vezi Apartamentele Disponibile
          </Link>
        </div>
      </section>
    </>
  );
}
