import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/PageHeader';
import { FeatureShowcase } from '@/components/sections/FeatureShowcase';
import { CTA } from '@/components/sections/CTA';
import { Icon } from '@/components/Icon';
import { Container } from '@/components/ui/Section';
import { features } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Features',
  description:
    'Photo evidence, live status tracking, departmental routing and society announcements — every Anytime Help feature in detail.',
  path: '/features/',
});

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Features"
        title="Everything Anytime Help does"
        body="Four capabilities that cover the full life of a maintenance complaint — from the photograph that reports it to the photograph that closes it."
      />

      {/* Jump list — keeps a long page navigable */}
      <div className="border-b border-ink-100 bg-ink-50">
        <Container className="py-5">
          <nav aria-label="Features on this page">
            <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              {features.map((feature) => (
                <li key={feature.id}>
                  <a
                    href={`#${feature.id}`}
                    className="flex h-full items-center justify-center gap-2 rounded-lg bg-white px-3 py-2.5 text-center text-sm font-medium text-ink-600 ring-1 ring-inset ring-ink-200 transition-colors hover:text-ink-950 hover:ring-ink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    <Icon name={feature.icon} className="h-4 w-4 shrink-0 text-brand-600" />
                    {feature.title}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>

      <h2 className="sr-only">All Anytime Help features</h2>
      <FeatureShowcase showHeading={false} compactTop />
      <CTA />
    </>
  );
}
