import { AppScreenFrame } from '@/components/mockups/AppScreen';
import { StoreButtons } from '@/components/StoreButtons';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { site } from '@/config/site';

export function AppShowcase() {
  return (
    <Section id="download" tone="brand" className="overflow-hidden">
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">Get the app</p>
            <h2 className="font-display text-display-sm font-bold text-ink-950">
              Your society&apos;s maintenance desk, in your pocket.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 sm:text-lg">
              Raise a complaint from the corridor where you found the problem, follow it while you get on with
              your day, and see the resolution photo the moment the job is closed.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-900">Download {site.name}</p>
              <StoreButtons className="mt-3" />
            </div>

            <div className="mt-8 border-t border-brand-200/60 pt-7">
              <p className="text-sm font-semibold text-ink-900">Managing a facility?</p>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-500">
                Admins and staff work from the web dashboard — full oversight of every complaint, department
                and announcement.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              {/* Fixed widths, not percentages, so the row can never outgrow
                  its column. One device on mobile, two from tablet, three from
                  xl — where they narrow to 12rem, because the seven-column
                  track is only ~646px wide even at the container's full size. */}
              <div className="flex items-end justify-center gap-4 xl:gap-3">
                <div className="w-full max-w-[16rem] shrink-0 sm:w-64 sm:max-w-none sm:-translate-y-8 xl:w-48">
                  <AppScreenFrame
                    variant="raise"
                    className="w-full"
                    label="Anytime Help app — raising a complaint with category, location, description and photos"
                  />
                </div>
                <div className="hidden w-64 shrink-0 sm:block xl:w-48">
                  <AppScreenFrame
                    variant="tracking"
                    className="w-full"
                    label="Anytime Help app — tracking a complaint through Pending, In Progress and Done"
                  />
                </div>
                <div className="hidden w-48 shrink-0 xl:block xl:-translate-y-8">
                  <AppScreenFrame
                    variant="settings"
                    className="w-full"
                    label="Anytime Help app — the Settings screen with profile, language and logout"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </Section>
  );
}
