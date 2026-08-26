import { Button } from '@/components/ui/Button';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { problems } from '@/config/site';

export function Problem() {
  return (
    <Section id="problem">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
              The problem
            </p>
            <h2 className="font-display text-display-sm font-bold text-ink-950">
              Facility maintenance shouldn&apos;t run on WhatsApp.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Most societies aren&apos;t short of people willing to fix things — they&apos;re short of a
              single place to record what broke, who is on it, and whether it was actually finished.
              Anytime Help gives every complaint a ticket, an owner and a photograph of the result.
            </p>
            <Button href="/features/" className="mt-8 h-auto min-h-[3rem] py-3 text-left sm:whitespace-nowrap">
              See how a complaint moves through the system
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-4 w-4" aria-hidden="true">
                <path d="M5 12h13M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              <ul className="divide-y divide-ink-200/70 overflow-hidden rounded-card border border-ink-200/70 bg-ink-50">
                {problems.map((problem) => (
                  <li key={problem} className="flex items-start gap-3.5 px-5 py-4 sm:px-6 sm:py-[1.125rem]">
                    <span
                      aria-hidden="true"
                      className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-error/10 text-error"
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-3 w-3">
                        <path d="M7 7l10 10M17 7L7 17" strokeLinecap="round" />
                      </svg>
                    </span>
                    <span className="text-[0.9375rem] leading-relaxed text-ink-700">{problem}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
