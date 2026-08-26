import { AppScreenFrame } from '@/components/mockups/AppScreen';
import { AdminButton } from '@/components/AdminButton';
import { StoreButtons } from '@/components/StoreButtons';
import { Container, Section } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { adminUrl, site, stores } from '@/config/site';

export function AppShowcase() {
  const storesLive = Boolean(stores.appStore || stores.googlePlay);

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
              your day, and reply to the plumber without ever sharing a phone number.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink-900">Download {site.name}</p>
              <StoreButtons className="mt-3" />
              {!storesLive && (
                <p className="mt-4 max-w-sm text-xs leading-relaxed text-ink-500">
                  Store listings are being prepared. These buttons will link to the live App Store and Google
                  Play pages as soon as the app is published.
                </p>
              )}
            </div>

            <div className="mt-8 border-t border-brand-200/60 pt-7">
              <p className="text-sm font-semibold text-ink-900">Managing a facility?</p>
              <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-ink-500">
                Admins and staff work from the web dashboard — full oversight of every complaint, department
                and announcement.
              </p>
              <AdminButton size="md" variant="secondary" className="mt-4" />
              {!adminUrl && (
                <p className="mt-3 max-w-sm text-xs leading-relaxed text-ink-500">
                  The admin dashboard link goes live once your facility is set up.
                </p>
              )}
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal>
              {/* Fixed widths, not percentages, so the row can never outgrow
                  its column. One device on mobile, two from tablet up. */}
              <div className="flex items-end justify-center gap-4">
                <div className="w-full max-w-[16rem] shrink-0 sm:w-64 sm:max-w-none sm:-translate-y-8">
                  <AppScreenFrame
                    variant="raise"
                    className="w-full"
                    label="Anytime Help app — raising a complaint with category, location, description and photos"
                  />
                </div>
                <div className="hidden w-64 shrink-0 sm:block">
                  <AppScreenFrame
                    variant="tracking"
                    className="w-full"
                    label="Anytime Help app — tracking a complaint through Pending, In Progress and Done"
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
