import { AppScreenFrame } from '@/components/mockups/AppScreen';
import { StoreButtons } from '@/components/StoreButtons';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';

/**
 * The hero runs on a soft brand-tinted plate. The "connected city" photograph
 * from the brand assets sits far back at low opacity, under a white wash on
 * the left, so the copy keeps its contrast no matter how the photograph crops
 * on a narrow screen.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-brand-50 via-brand-50/50 to-white">
      {/* Brand photograph, softened until it reads as texture rather than image */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-[position:75%_center] opacity-[0.14]"
        style={{ backgroundImage: 'url(/images/hero-city.jpg)' }}
      />
      {/* Legibility wash — near-solid white on the left where the copy sits */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(50rem_30rem_at_78%_18%,rgba(59,118,240,0.14),transparent_68%)]"
      />

      <Container className="relative py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-xs ring-1 ring-inset ring-brand-200 motion-safe:animate-fade-up">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full rounded-full bg-accent-500 motion-safe:animate-pulse-ring" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-500" />
              </span>
              Complaint management for societies &amp; campuses
            </p>

            <h1
              className="mt-5 font-display text-display-lg font-bold text-ink-950 motion-safe:animate-fade-up"
              style={{ animationDelay: '60ms' }}
            >
              Smart Society,{' '}
              <span className="bg-gradient-to-r from-brand-600 to-accent-600 bg-clip-text text-transparent lg:block">
                Smart Maintenance.
              </span>
            </h1>

            <p
              className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 sm:text-lg motion-safe:animate-fade-up"
              style={{ animationDelay: '120ms' }}
            >
              Report, track and resolve maintenance issues in your facility with just a photo. Fast,
              transparent and reliable.
            </p>

            <div
              className="mt-8 flex flex-col gap-3 sm:flex-row motion-safe:animate-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              <Button href="/free-trial/" size="lg" className="sm:w-auto" data-analytics="free-trial-click">
                Book Your Free Trial
              </Button>
              <Button href="#download" variant="secondary" size="lg" className="sm:w-auto" data-analytics="download-click">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="h-[1.05rem] w-[1.05rem]" aria-hidden="true">
                  <path d="M12 3.5v11M7.5 10.5l4.5 4.5 4.5-4.5M4.5 19h15" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download App
              </Button>
            </div>

            <div className="mt-10 motion-safe:animate-fade-up" style={{ animationDelay: '240ms' }}>
              <p className="text-xs font-medium uppercase tracking-[0.12em] text-ink-500">Available on mobile</p>
              <StoreButtons className="mt-3" />
            </div>
          </div>

          {/* Hero visual — the real app screen in a 3D-lit device, flanked by
              two live-looking summary cards. Cards sit beside the phone rather
              than over it, so nothing on screen is ever obscured. */}
          <div className="lg:col-span-6">
            <div className="flex items-center justify-center gap-5 sm:gap-6 lg:justify-end">
              <div className="hidden w-[13.5rem] shrink-0 flex-col gap-4 sm:flex" aria-hidden="true">
                <div
                  className="rounded-card border border-ink-200/70 bg-white/90 p-4 shadow-md backdrop-blur-md motion-safe:animate-fade-up"
                  style={{ animationDelay: '320ms' }}
                >
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-brand-600">
                    Resolved this week
                  </p>
                  <p className="mt-1.5 font-display text-3xl font-bold leading-none text-ink-950">28</p>
                  <div className="mt-3.5 space-y-2">
                    {['Leaking tap — Block A', 'Corridor light — Gate 2'].map((t) => (
                      <div key={t} className="flex items-center gap-2">
                        <span className="flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-success/15">
                          <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3.5" className="h-1.5 w-1.5">
                            <path d="M4 12.5l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="truncate text-xs text-ink-600">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className="rounded-card border border-ink-200/70 bg-white/90 p-4 shadow-md backdrop-blur-md motion-safe:animate-fade-up"
                  style={{ animationDelay: '380ms' }}
                >
                  <p className="text-[0.6875rem] font-semibold uppercase tracking-wide text-brand-600">
                    Open by department
                  </p>
                  <div className="mt-3 space-y-2">
                    {[
                      ['Plumbing', 72],
                      ['Electrical', 54],
                      ['Cleaning', 33],
                    ].map(([name, pct]) => (
                      <div key={name as string}>
                        <div className="flex items-baseline justify-between">
                          <span className="text-[0.625rem] text-ink-500">{name}</span>
                        </div>
                        <span className="mt-1 block h-1.5 overflow-hidden rounded-full bg-ink-100">
                          <span
                            className="block h-full rounded-full bg-gradient-to-r from-accent-500 to-brand-500"
                            style={{ width: `${pct}%` }}
                          />
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="shrink-0 motion-safe:animate-fade-up" style={{ animationDelay: '200ms' }}>
                <AppScreenFrame
                  variant="complaint"
                  glow
                  priority
                  label="Anytime Help app — the resident home screen listing their complaints"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
