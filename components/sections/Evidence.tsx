import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/**
 * The photo-evidence band. Uses the supplied 3D key visual — a device with
 * "before" images floating beside it — to make the Before/After idea concrete
 * before the reader reaches the detailed feature rows.
 */
export function Evidence() {
  return (
    <Section tone="ink" className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(44rem_24rem_at_20%_0%,rgba(59,118,240,0.25),transparent_70%)]"
      />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-accent-300">
              Proof, not promises
            </p>
            <h2 className="font-display text-display-sm font-bold text-white">
              A photo when it breaks. A photo when it&apos;s fixed.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              Every complaint carries a &quot;Before&quot; image from the resident who reported it and an
              &quot;After&quot; image from the staff member who closed it. Nobody has to take anybody&apos;s
              word for it, and the record stays attached to the ticket.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              {[
                ['Before', 'Attached at report time by the resident.'],
                ['During', 'Status and chat updates as work happens.'],
                ['After', 'Resolution photo uploaded before closing.'],
              ].map(([term, body]) => (
                <div key={term} className="rounded-card border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <dt className="text-sm font-semibold text-white">{term}</dt>
                  <dd className="mt-1.5 text-xs leading-relaxed text-ink-400">{body}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="relative mx-auto max-w-[26rem] lg:ml-auto lg:mr-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/phone-evidence.jpg"
                  alt="A phone showing the Anytime Help ticket view with photographs of a security camera and a corridor floating beside it as attached evidence."
                  width={1050}
                  height={1400}
                  loading="lazy"
                  className="block w-full rounded-card-lg shadow-xl ring-1 ring-white/10 motion-safe:animate-float-slow"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
