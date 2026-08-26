import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { site } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const outfit = Outfit({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
});

const TITLE = `${site.name} - Society Maintenance Management App`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: TITLE,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    'society maintenance app',
    'complaint management system',
    'facility management software',
    'society management app',
    'campus maintenance',
    'residential complaint tracking',
    'apartment maintenance app',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    url: site.url,
    title: TITLE,
    description: site.description,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: `${site.name} — Society Maintenance App` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: site.description,
    images: ['/og.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
};

export const viewport: Viewport = {
  themeColor: '#1D4ED8',
  width: 'device-width',
  initialScale: 1,
};

const applicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: site.name,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Android, iOS, Web',
  description: site.description,
  url: site.url,
  featureList: [
    'Photo evidence on every complaint',
    'Live status tracking from Pending to Done',
    'Threaded chat with maintenance staff',
    'Upvoting to prevent duplicate tickets',
    'Departmental routing',
    'Society-wide announcements',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only z-[60] focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-lg focus:bg-brand-600 focus:px-4 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(applicationSchema) }}
        />
      </body>
    </html>
  );
}
