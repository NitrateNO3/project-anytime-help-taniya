import { site } from '@/config/site';

type LogoProps = {
  /** 'dark' = for light backgrounds, 'light' = for dark backgrounds. */
  variant?: 'dark' | 'light';
  /** Show the "COMMUNITY · SUPPORT · SOLUTIONS" descriptor beneath the wordmark. */
  withTagline?: boolean;
  className?: string;
};

/**
 * The Anytime Help lockup: the app-icon tile plus the two-tone wordmark.
 * Only the wordmark's first half swaps colour between the light and dark
 * lockups — the mark itself is identical in both.
 */
export function Logo({ variant = 'dark', withTagline = false, className = '' }: LogoProps) {
  const wordColor = variant === 'light' ? 'text-white' : 'text-ink-950';
  const accentColor = variant === 'light' ? 'text-accent-300' : 'text-brand-600';
  const taglineColor = variant === 'light' ? 'text-ink-400' : 'text-ink-500';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="flex flex-col justify-center leading-none">
        <span className={`font-display text-[1.0625rem] font-bold tracking-[-0.02em] ${wordColor}`}>
          Anytime<span className={accentColor}> Help</span>
        </span>
        {withTagline && (
          <span className={`mt-1 text-[0.5rem] font-medium uppercase tracking-[0.16em] ${taglineColor}`}>
            {site.tagline}
          </span>
        )}
      </span>
    </span>
  );
}

/**
 * The app-icon tile on its own — the blue squircle, the cupped hands, the
 * teal-outlined heart and the question badge. Drawn as vector so it stays
 * crisp from a 16px favicon up to a 512px app icon.
 * Kept byte-identical in shape to /public/icon.svg.
 */
export function LogoMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 512 512" className={className} role="img" aria-label={`${site.name} logo`}>
      <defs>
        <linearGradient id="ah-tile" x1="0" y1="0" x2="0.75" y2="1">
          <stop offset="0" stopColor="#5A8BF7" />
          <stop offset="0.45" stopColor="#2E63E8" />
          <stop offset="1" stopColor="#1039BE" />
        </linearGradient>
        <linearGradient id="ah-skin" x1="0" y1="0" x2="0.4" y2="1">
          <stop offset="0" stopColor="#FFD9C2" />
          <stop offset="1" stopColor="#FFA582" />
        </linearGradient>
        <clipPath id="ah-clip">
          <rect width="512" height="512" rx="118" ry="118" />
        </clipPath>
      </defs>

      <rect width="512" height="512" rx="118" ry="118" fill="url(#ah-tile)" />

      <g clipPath="url(#ah-clip)">
        <g fill="url(#ah-skin)">
          <g transform="translate(-16,26)">
            <rect x="52" y="196" width="56" height="250" rx="28" transform="rotate(-7 80 321)" />
            <rect x="96" y="286" width="86" height="266" rx="43" transform="rotate(9 139 419)" />
            <rect x="134" y="300" width="40" height="86" rx="20" transform="rotate(26 154 343)" />
          </g>
          <g transform="translate(528,26) scale(-1,1)">
            <rect x="52" y="196" width="56" height="250" rx="28" transform="rotate(-7 80 321)" />
            <rect x="96" y="286" width="86" height="266" rx="43" transform="rotate(9 139 419)" />
            <rect x="134" y="300" width="40" height="86" rx="20" transform="rotate(26 154 343)" />
          </g>
        </g>

        <path
          d="M256 372C154 302 114 250 114 198c0-43 33-73 74-73 28 0 52 15 68 40 16-25 40-40 68-40 41 0 74 30 74 73 0 52-40 104-142 174z"
          fill="#FFFFFF"
          stroke="#22D3D8"
          strokeWidth="22"
          strokeLinejoin="round"
        />

        <path d="M356 172l-4 34 30-22z" fill="#F9C3C1" />
        <rect x="336" y="72" width="126" height="98" rx="42" fill="#F9C3C1" />
        <text
          x="399"
          y="140"
          textAnchor="middle"
          fontFamily="Outfit, Inter, ui-sans-serif, system-ui, sans-serif"
          fontSize="72"
          fontWeight="700"
          fill="#2A4FBF"
        >
          ?
        </text>
      </g>
    </svg>
  );
}
