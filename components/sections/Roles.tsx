import { Icon } from '@/components/Icon';
import { Container, Section, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { roles } from '@/config/site';

/**
 * "Tailored for Everyone" — the three sides of the platform. One card per
 * role, each carrying the capabilities that role actually gets.
 */
export function Roles() {
  return (
    <Section id="for-everyone">
      <Container>
        <SectionHeading
          eyebrow="Tailored for everyone"
          title="One platform, three very different jobs"
          body="Residents, staff and admins each get a view built for what they need to do — and nothing they don’t."
        />

        <div className="mt-12 grid gap-5 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {roles.map((role, i) => (
            <Reveal key={role.id} delay={i * 80}>
              <div
                id={role.id}
                className="relative flex h-full scroll-mt-24 flex-col overflow-hidden rounded-card-lg border border-ink-200/70 bg-white p-6 transition-shadow duration-200 hover:shadow-lg sm:p-7"
              >
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-600 via-brand-500 to-accent-400"
                />
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 ring-1 ring-inset ring-brand-100">
                  <Icon name={role.icon} className="h-6 w-6" />
                </span>

                <h3 className="mt-5 font-display text-xl font-bold text-ink-950">{role.title}</h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-[0.1em] text-ink-400">
                  {role.audience}
                </p>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-ink-500">{role.body}</p>

                <ul className="mt-6 flex-1 space-y-3 border-t border-ink-100 pt-6">
                  {role.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-[0.1875rem] inline-flex h-[1.125rem] w-[1.125rem] shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-600"
                      >
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="h-2.5 w-2.5">
                          <path d="M4 12.5l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span className="text-sm leading-snug text-ink-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
