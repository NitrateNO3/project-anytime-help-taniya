import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { Container, Section } from '@/components/ui/Section';
import { site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Book Your Free Trial',
  description: `Book a free trial of ${site.name} — the complaint and maintenance management platform for residential societies, campuses and facilities.`,
  path: '/free-trial/',
});

const points = [
  'A walkthrough of the resident app and the staff queue with your own facility in mind',
  'Help setting up your blocks, departments and staff accounts',
  'Answers on pricing and what your society or campus would need',
];

export default function FreeTrialPage() {
  return (
    <>
      <PageHeader
        eyebrow="Free trial"
        title="Book your free trial"
        body={`Tell us a little about your facility and we will set ${site.name} up for you.`}
      />

      <Section compactTop>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <h2 className="sr-only">Free trial request form</h2>
              <ContactForm submitLabel="Book my free trial" />
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-card-lg border border-ink-200/70 bg-ink-50 p-6 sm:p-8">
                <h2 className="text-base font-semibold text-ink-950">What happens next</h2>
                <ul className="mt-5 space-y-3.5">
                  {points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.1875rem] inline-flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2.5 w-2.5">
                          <path d="M4 12.5l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-[0.9375rem] leading-snug text-ink-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>
    </>
  );
}
