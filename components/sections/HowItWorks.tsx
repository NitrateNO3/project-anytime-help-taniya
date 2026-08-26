import { Icon } from '@/components/Icon';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { steps } from '@/config/site';

export function HowItWorks() {
  return (
    <Section id="how-it-works" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="From spotting a problem to proof it was fixed"
          body="Four steps, and the only one that needs the resident is the second."
        />

        <div className="mt-12 grid items-center gap-12 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <figure className="overflow-hidden rounded-card-lg bg-white p-3 shadow-lg ring-1 ring-ink-200/70">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/resolution-flow.jpg"
                  alt="Four connected cards rising in sequence — pending, assigned, in progress and resolved — illustrating a complaint moving through its lifecycle."
                  width={1600}
                  height={1200}
                  loading="lazy"
                  className="block w-full rounded-xl"
                />
              </figure>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ol className="relative space-y-7 sm:space-y-8">
              {/* Vertical rail joining the four steps */}
              <span
                aria-hidden="true"
                className="absolute bottom-8 left-[1.4375rem] top-8 w-px bg-gradient-to-b from-brand-300 via-brand-300 to-accent-300"
              />
              {steps.map((step, i) => (
                <li key={step.title} className="relative flex gap-5">
                  <Reveal delay={i * 90} className="shrink-0">
                    <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-md ring-4 ring-ink-50">
                      <Icon name={step.icon} className="h-[1.375rem] w-[1.375rem]" />
                    </span>
                  </Reveal>
                  <Reveal delay={i * 90} className="min-w-0 flex-1 pt-0.5">
                    <p className="text-[0.6875rem] font-semibold uppercase tracking-[0.14em] text-brand-600">
                      Step {i + 1}
                    </p>
                    <h3 className="mt-1.5 font-display text-lg font-semibold text-ink-950">{step.title}</h3>
                    <p className="mt-1.5 max-w-xl text-[0.9375rem] leading-relaxed text-ink-500">{step.body}</p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  );
}
