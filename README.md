# Cazare Turda - Production Website

Modern, SEO-optimized Next.js 14+ website for apartment rentals in Turda, Romania.

## 🚀 Features

- **Next.js 14+ App Router** with TypeScript
- **CSS Modules** for component styling (no Tailwind)
- **Server Components** by default for optimal performance
- **SEO Optimized**:
  - Dynamic metadata per page
  - JSON-LD structured data (LodgingBusiness, ItemList, FAQ schemas)
  - Sitemap.xml & robots.txt
  - Canonical URLs
  - Open Graph & Twitter Cards
- **Remote Images** from WordPress domain configured
- **Mobile-First** responsive design
- **Performance**: Minimal client-side JS, optimized images with next/image
- **Accessibility**: Semantic HTML, proper heading hierarchy, aria labels

## 📁 Project Structure

```
src/
├── app/
│   ├── (site)/                    # Main site route group
│   │   ├── layout.tsx             # Site layout with Header/Footer
│   │   ├── page.tsx               # Home page
│   │   ├── ap-maysa/              # Apartment pages
│   │   ├── ap-lapale/
│   │   ├── ap-salingold/
│   │   ├── salina-turda/          # Tourism pages
│   │   ├── atractii-turda/
│   │   ├── ce-sa-faci-in-turda/
│   │   ├── cazare-langa-salina-turda/  # Long-tail SEO pages
│   │   ├── apartamente-turda/
│   │   ├── regim-hotelier-turda/
│   │   ├── weekend-in-turda/
│   │   ├── turda-cu-copiii/
│   │   └── ghid-turda/            # Guide/blog system
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── layout.tsx                 # Root layout
│   ├── sitemap.ts                 # Dynamic sitemap
│   └── robots.ts                  # Robots.txt
├── components/
│   ├── Header.tsx                 # Global header
│   ├── Footer.tsx                 # Global footer
│   ├── StickyCTA.tsx              # Mobile sticky CTA bar
│   ├── Hero.tsx                   # Hero section
│   ├── ApartmentCard.tsx          # Apartment card component
│   ├── FAQ.tsx                    # FAQ section
│   └── SEOJsonLd.tsx              # JSON-LD script component
├── data/
│   ├── apartments.ts              # Apartment data & types
│   └── guides.ts                  # Guide posts data
└── styles/
    └── globals.css                # Global styles, CSS tokens, utilities
```

## 🏃 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel Dashboard
3. Configure environment variables (if any)
4. Deploy

```bash
# Or use Vercel CLI
npx vercel
```

### Environment Variables

No environment variables required for basic functionality. All configuration is in:
- `next.config.ts` - Image domains, etc.
- `src/data/apartments.ts` - Apartment data
- `src/data/guides.ts` - Blog posts

## 📊 SEO Setup

After deploying:

1. **Google Search Console**:
   - Add property: `https://cazareturda.com`
   - Submit sitemap: `https://cazareturda.com/sitemap.xml`
   - Verify ownership (add meta tag in `src/app/layout.tsx` if needed)

2. **Google Analytics** (Optional):
   - Add GA4 tracking code to `src/app/layout.tsx`

3. **Update Metadata**:
   - Replace Google verification code in `src/app/layout.tsx`
   - Update `metadataBase` URL if using different domain

## 🎨 Customization

### Adding New Apartments

Edit `src/data/apartments.ts`:

```typescript
{
  id: 'new-apt',
  name: 'Apartment Name',
  slug: 'ap-name',
  // ... other fields
}
```

Then create page: `src/app/(site)/ap-name/page.tsx`

### Adding Blog Posts

Edit `src/data/guides.ts`:

```typescript
{
  slug: 'new-post',
  title: 'Post Title',
  excerpt: 'Short description',
  content: 'Full content...',
  // ... other fields
}
```

Posts are automatically added to `/ghid-turda` and sitemap.

### Styling

- Global styles & CSS tokens: `src/styles/globals.css`
- Component styles: `ComponentName.module.css` next to component
- Modify CSS variables in `:root` for theme changes

## 📱 Contact Integration

WhatsApp links are generated using `getWhatsAppLink()` from `src/data/apartments.ts`.

To update WhatsApp numbers:
- Main: Edit in `src/components/Footer.tsx` and `src/components/StickyCTA.tsx`
- Per apartment: Edit in `src/data/apartments.ts`

## 🖼️ Images

All images are served from WordPress domain configured in `next.config.ts`:

```typescript
images: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'cazareturda.com',
      pathname: '/wp-content/uploads/**',
    },
  ],
}
```

## 📈 Performance

- Server Components by default (zero client JS unless needed)
- `next/image` for optimized images
- CSS Modules for scoped styles
- No heavy dependencies

## 🔍 Internal Linking Strategy

All pages link to:
- Apartment pages from tourism/long-tail pages
- Related content through internal links
- Home page from footer
- Cross-linking between tourism pages

## 🛠️ Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: CSS Modules + globals.css
- **Images**: next/image with remote patterns
- **SEO**: Built-in Next.js metadata API + JSON-LD

## 📝 Content Guidelines

- **Romanian language** for all content
- **Natural, helpful copy** (not spammy)
- **Keywords integrated naturally** in H1, H2, intro paragraphs
- **Internal links** to related pages
- **FAQs** on all main pages

## 🐛 Troubleshooting

**Images not loading?**
- Check `next.config.ts` remotePatterns
- Verify image URLs are correct in data files

**Build errors?**
- Run `npm run build` to check for TypeScript errors
- Check all imports are correct

**SEO issues?**
- Verify sitemap at `/sitemap.xml`
- Check metadata in page files
- Validate JSON-LD at Google's Structured Data Testing Tool

## 📞 Support

For issues or questions:
- Check this README
- Review Next.js 14 documentation: https://nextjs.org/docs
- Check component examples in the codebase

## 📄 License

Private project for Cazare Turda.

---

Built with ❤️ using Next.js
