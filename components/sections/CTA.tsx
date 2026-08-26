import { AdminButton } from '@/components/AdminButton';
import { StoreButtons } from '@/components/StoreButtons';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Section';

export function CTA() {
  return (
    <section className="bg-white pb-16 pt-16 sm:pb-20 sm:pt-20 lg:pb-24 lg:pt-24">
      <Container>
        <div className="relative overflow-hidden rounded-card-lg bg-ink-950 px-6 py-14 text-center sm:px-12 sm:py-16 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-40"
            style={{ backgroundImage: 'url(/images/hero-city.jpg)' }}
          />
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-ink-950/70" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(40rem_20rem_at_50%_-20%,rgba(59,118,240,0.4),transparent_70%)]"
          />
          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-display text-display-md font-bold text-white">
              Ready for a society that fixes things faster?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-300 sm:text-lg">
              Download the app to start reporting, or log in to the dashboard to run your facility.
            </p>
            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <Button href="/#download" size="lg" variant="inverse" data-analytics="download-click">
                Download App
              </Button>
              <AdminButton size="lg" tone="dark" />
            </div>
            <StoreButtons tone="dark" className="mt-10 justify-center" />
          </div>
        </div>
      </Container>
    </section>
  );
}
