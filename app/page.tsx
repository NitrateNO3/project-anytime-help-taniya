import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { Hero } from '@/components/sections/Hero';
import { CoreFeatures } from '@/components/sections/CoreFeatures';
import { Stats } from '@/components/sections/Stats';
import { Problem } from '@/components/sections/Problem';
import { Evidence } from '@/components/sections/Evidence';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { Roles } from '@/components/sections/Roles';
import { AppShowcase } from '@/components/sections/AppShowcase';
import { Testimonials } from '@/components/sections/Testimonials';
import { FAQ } from '@/components/sections/FAQ';
import { CTA } from '@/components/sections/CTA';
import { faqs, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: `${site.name} - Society Maintenance Management App`,
  description:
    'The easiest way to manage, track and resolve facility complaints. Download the Anytime Help app today.',
  path: '/',
  ogTitle: `${site.name} - Society Maintenance Management App`,
});

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: { '@type': 'Answer', text: faq.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <CoreFeatures />
      <Stats />
      <Problem />
      <Evidence />
      {/* A preview on the homepage; the full set lives on /features. */}
      <FeatureShowcase limit={3} />
      <HowItWorks />
      <Roles />
      <AppShowcase />
      <Testimonials />
      <FAQ />
      <CTA />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
