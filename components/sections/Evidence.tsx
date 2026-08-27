import { AppScreenFrame } from '@/components/mockups/AppScreen';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The photo-evidence band. Uses the supplied 3D key visual — a device with
 * "before" images floating beside it — to make the Before/After idea concrete
 * before the reader reaches the detailed feature rows.
 */
export function Evidence() {
  return (
    <Section tone="brand" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_24rem_at_20%_0%,rgba(34,211,216,0.16),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-700">
              Proof, not promises
            </p>
            <h2 className="font-display text-display-sm font-bold text-ink-950">
              A photo when it breaks. A photo when it&apos;s fixed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-600 sm:text-lg">
              Every complaint carries a &quot;Before&quot; image from the resident who reported it and an
              &quot;After&quot; image from the staff member who closed it. Nobody has to take anybody&apos;s
              word for it, and the record stays attached to the ticket.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                ['Before', 'Attached at report time by the resident.'],
                ['During', 'Status updates as the work happens.'],
                ['After', 'Resolution photo uploaded before closing.'],
              ].map(([term, body]) => (
                <div key={term} className="rounded-card border border-brand-100 bg-white p-4 shadow-xs">
                  <dt className="text-sm font-semibold text-ink-950">{term}</dt>
                  <dd className="mt-1.5 text-xs leading-relaxed text-ink-500">{body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative mx-auto flex max-w-[26rem] justify-center overflow-hidden rounded-card-lg bg-white/70 px-6 py-10 ring-1 ring-inset ring-brand-100 sm:px-10 sm:py-12 lg:ml-auto lg:mr-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 bg-[radial-gradient(26rem_15rem_at_50%_0%,theme(colors.accent.100),transparent_70%)] opacity-70"
                />
                <AppScreenFrame
                  variant="evidence"
                  className="relative motion-safe:animate-float-slow"
                  label="Anytime Help app — a resolved complaint showing the Before photo from the resident and the After photo from the staff member who closed it"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
