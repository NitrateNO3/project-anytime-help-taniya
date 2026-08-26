import { Container, Section } from '@/components/ui/Section';
import { stats } from '@/config/site';

/**
 * Statistics must be verified before they are published. Renders nothing
 * until `stats.enabled` is true and every value is filled in.
 */
export function Stats() {
  const items = stats.items.filter((item) => item.value && item.label);
  if (!stats.enabled || items.length === 0) return null;

  return (
    <Section tone="muted" className="!py-14">
      <Container>
        <dl className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div key={item.label} className="text-center">
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block font-display text-display-sm font-bold text-ink-950">{item.value}</span>
                <span className="mt-1 block text-sm text-ink-500">{item.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </Section>
  );
}
