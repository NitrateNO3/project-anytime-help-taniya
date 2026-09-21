import Image from 'next/image';
import { site } from '@/config/site';

type LogoProps = {
  /** 'light' swaps in the white-wordmark lockup, for dark backgrounds. */
  variant?: 'dark' | 'light';
  /** Show the "COMMUNITY · SUPPORT · SOLUTIONS" descriptor beneath the lockup. */
  withTagline?: boolean;
  /** Height utility for the lockup, e.g. "h-14". Width follows the aspect ratio. */
  className?: string;
};

/**
 * The official Anytime Help lockup, used whole and uncropped: the cradled-home
 * mark with the "Anytime Help" wordmark beneath it, exactly as supplied.
 *
 * The artwork lives at /public/logo.png, exported from images/anytime-help-logo.png.
 * Its flat background has been knocked out so the lockup sits correctly on the
 * footer's tinted surface as well as on white — no artwork was removed, only
 * the blank margin around it.
 *
 * /public/logo-light.png is the same file with the wordmark recoloured white
 * for dark grounds. Only the lettering below the gap is touched — the mark
 * itself is byte-for-byte the supplied artwork in both.
 */
export function Logo({ variant = 'dark', withTagline = false, className = 'h-14' }: LogoProps) {
  return (
    <span className="inline-flex flex-col items-center">
      <Image
        src={variant === 'light' ? '/logo-light.png' : '/logo.png'}
        alt={`${site.name} logo`}
        width={539}
        height={560}
        priority
        className={`w-auto ${className}`}
      />
      {withTagline && (
        <span
          className={`mt-2 text-center text-[0.5rem] font-medium uppercase tracking-[0.16em] ${
            variant === 'light' ? 'text-ink-400' : 'text-[#205C67]/60'
          }`}
        >
          {site.tagline}
        </span>
      )}
    </span>
  );
}
