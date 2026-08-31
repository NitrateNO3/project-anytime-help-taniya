import type { ReactNode } from 'react';

/**
 * Device shell for app screens. Pure CSS — no image payload — so it stays
 * sharp at any size and costs nothing to load.
 *
 * `statusBar="none"` is for real screenshots, which already carry their own
 * top area; the CSS mockups use the drawn status bar instead.
 */
export function PhoneFrame({
  children,
  className = '',
  label,
  glow = false,
  statusBar = 'light',
}: {
  children: ReactNode;
  className?: string;
  label: string;
  glow?: boolean;
  statusBar?: 'light' | 'none';
}) {
  return (
    <div
      className={`relative w-full max-w-[280px] rounded-[2.5rem] bg-ink-900 p-[0.4rem] ring-1 ring-white/10 ${
        glow ? 'shadow-glow' : 'shadow-xl'
      } ${className}`}
      role="img"
      aria-label={label}
    >
      {/* Side buttons */}
      <span aria-hidden="true" className="absolute -left-[2px] top-[6.5rem] h-10 w-[2px] rounded-l bg-ink-700" />
      <span aria-hidden="true" className="absolute -left-[2px] top-[9.5rem] h-10 w-[2px] rounded-l bg-ink-700" />
      <span aria-hidden="true" className="absolute -right-[2px] top-[7.5rem] h-14 w-[2px] rounded-r bg-ink-700" />

      <div className="relative overflow-hidden rounded-[2.15rem] bg-white">
        {/* Dynamic island */}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-20 h-[1.15rem] w-[4.5rem] -translate-x-1/2 rounded-full bg-ink-950"
        />

        {statusBar === 'light' && (
          <div className="relative z-10 flex items-center justify-between bg-white px-5 pb-1.5 pt-3">
            <span className="text-[0.625rem] font-semibold text-ink-900">9:41</span>
            <div className="flex items-center gap-1" aria-hidden="true">
              <svg viewBox="0 0 18 12" className="h-2.5 w-3.5 text-ink-800" fill="currentColor">
                <rect x="0" y="7" width="3" height="5" rx="1" />
                <rect x="4.5" y="5" width="3" height="7" rx="1" />
                <rect x="9" y="2.5" width="3" height="9.5" rx="1" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" opacity="0.35" />
              </svg>
              <span className="h-2.5 w-4 rounded-[2px] border border-ink-400 p-[1.5px]">
                <span className="block h-full w-2/3 rounded-[1px] bg-ink-800" />
              </span>
            </div>
          </div>
        )}

        {children}
      </div>

      {/* Home indicator */}
      <div
        className="absolute bottom-[0.55rem] left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-white/30"
        aria-hidden="true"
      />
    </div>
  );
}

/**
 * A real app screenshot inside the device shell. Screenshots are exported from
 * the Anytime Help app and cropped to remove the phone's own status bar.
 */
export function PhoneShot({
  src,
  label,
  className = '',
  glow = false,
  priority = false,
  width = 900,
  height = 1821,
}: {
  src: string;
  label: string;
  className?: string;
  glow?: boolean;
  priority?: boolean;
  /** The file's real pixel size — reserves the right box so nothing shifts on load. */
  width?: number;
  height?: number;
}) {
  return (
    <PhoneFrame label={label} className={className} glow={glow} statusBar="none">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        // eslint-disable-next-line @next/next/no-img-element
        fetchPriority={priority ? 'high' : undefined}
        className="block w-full"
      />
    </PhoneFrame>
  );
}
