import { Icon } from '@/components/Icon';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { coreFeatures } from '@/config/site';

/** The four headline capabilities — the first thing a visitor reads after the hero. */
export function CoreFeatures() {
  return (
    <Section id="features-overview" tone="muted">
      <Container>
        <SectionHeading
          eyebrow="Core features"
          title="Everything a maintenance request needs — in one ticket"
          body="Photo proof, a live status, automatic routing to the right department, and society-wide announcements — all in one place."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {coreFeatures.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="group relative h-full overflow-hidden rounded-card border border-ink-200/70 bg-white p-6 transition-shadow duration-200 hover:shadow-md">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-6 -top-6 h-20 w-20 rounded-full bg-brand-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                <span className="relative inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-brand-600 to-brand-500 text-white shadow-sm">
                  <Icon name={item.icon} className="h-[1.375rem] w-[1.375rem]" />
                </span>
                <h3 className="relative mt-5 font-display text-base font-semibold text-ink-950">{item.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-ink-500">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
