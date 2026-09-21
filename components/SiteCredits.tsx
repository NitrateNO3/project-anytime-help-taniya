import Image from 'next/image';

type Credit = {
  label: string;
  name: string;
  href: string;
  src: string;
  /** Tile colour behind the mark — each logo needs the opposite of its own ink. */
  tone: 'dark' | 'light';
};

const credits: Credit[] = [
  {
    label: 'Secured by',
    name: 'ParameterX',
    href: 'https://www.parameterx.org',
    src: '/parameterx.png',
    tone: 'dark',
  },
  {
    label: 'Product of',
    name: 'QuenchMark',
    href: 'https://quenchmark.org/',
    src: '/quenchmark.png',
    tone: 'light',
  },
];

function CreditBadge({ label, name, href, src, tone }: Credit) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-3 rounded-2xl bg-white px-3 py-2.5 ring-1 ring-inset ring-ink-200 transition-colors hover:ring-ink-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
    >
      <span
        className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl shadow-xs ${
          tone === 'dark' ? 'bg-[#0B0B0F]' : 'bg-white ring-1 ring-inset ring-ink-200'
        }`}
      >
        <Image src={src} alt="" aria-hidden="true" width={192} height={192} className="h-7 w-7 object-contain" />
      </span>
      <span className="flex flex-col leading-none">
        <span className="text-[0.625rem] font-semibold uppercase tracking-[0.18em] text-ink-500">
          {label}
        </span>
        <span className="mt-1.5 text-[0.9375rem] font-bold text-ink-950">{name}</span>
      </span>
    </a>
  );
}

/** Security and build credits, shown together in the footer. */
export function SiteCredits({ className = '' }: { className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {credits.map((credit) => (
        <CreditBadge key={credit.name} {...credit} />
      ))}
    </div>
  );
}
