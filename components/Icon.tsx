import type { IconName } from '@/config/site';

/**
 * Small hand-picked icon set (1.6px stroke, 24px grid) so the site ships no
 * icon-library dependency at all.
 */
const paths: Record<IconName, React.ReactNode> = {
  camera: (
    <>
      <path d="M3 8.5A2.5 2.5 0 0 1 5.5 6h1.7a1 1 0 0 0 .83-.45l.94-1.4A1 1 0 0 1 9.8 3.7h4.4a1 1 0 0 1 .83.45l.94 1.4A1 1 0 0 0 16.8 6h1.7A2.5 2.5 0 0 1 21 8.5v8A2.5 2.5 0 0 1 18.5 19h-13A2.5 2.5 0 0 1 3 16.5v-8z" />
      <circle cx="12" cy="12.4" r="3.4" />
    </>
  ),
  pulse: (
    <>
      <path d="M2.5 12.5h4L9 6.5l3.6 11L15 12.5h6.5" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="5.5" r="2.5" />
      <circle cx="18" cy="18.5" r="2.5" />
      <path d="M6 8v4.5a3.5 3.5 0 0 0 3.5 3.5H15" />
      <path d="M13 13.5l2.5 2.5-2.5 2.5" />
    </>
  ),
  megaphone: (
    <>
      <path d="M3.5 10v3.4a1.6 1.6 0 0 0 1.6 1.6H7l9.5 4.2V5.8L7 10H5.1A1.6 1.6 0 0 0 3.5 10z" />
      <path d="M19.8 9.2a3.6 3.6 0 0 1 0 5.6M7 15v4.5" />
    </>
  ),
  home: (
    <>
      <path d="M4 10.6L12 4l8 6.6V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8.4z" />
      <path d="M9.6 20.5v-6h4.8v6" />
    </>
  ),
  tools: (
    <>
      <path d="M14.2 6.6a3.8 3.8 0 0 0 5 5l-8.4 8.4a2 2 0 0 1-2.8-2.8l8.4-8.4a3.8 3.8 0 0 0-2.2-2.2z" />
      <path d="M9.6 4.3L4.3 9.6l2.6 2.6 3.3-3.3 2 2 1.6-1.6-2-2 1.4-1.4-3.6-1.6z" />
    </>
  ),
  dashboard: (
    <>
      <rect x="3.2" y="3.5" width="7.6" height="7.6" rx="1.8" />
      <rect x="13.2" y="3.5" width="7.6" height="4.6" rx="1.8" />
      <rect x="3.2" y="14.1" width="7.6" height="6.4" rx="1.8" />
      <rect x="13.2" y="11.1" width="7.6" height="9.4" rx="1.8" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
    </>
  ),
  check: <path d="M4.5 12.5l5 5 10-11" />,
  shield: (
    <>
      <path d="M12 3l7.5 3v5.6c0 4.4-3 8.2-7.5 9.4-4.5-1.2-7.5-5-7.5-9.4V6L12 3z" />
      <path d="M9.2 12l2 2 3.6-3.8" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8.5a6 6 0 1 0-12 0c0 5-2.5 6.5-2.5 6.5h17S18 13.5 18 8.5z" />
      <path d="M13.7 19a2 2 0 0 1-3.4 0" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7v5.3l3.4 2" />
    </>
  ),
  users: (
    <>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
      <circle cx="9.5" cy="7.5" r="3.5" />
      <path d="M21 20v-1.5a4 4 0 0 0-3-3.87M15.5 4.13a3.5 3.5 0 0 1 0 6.74" />
    </>
  ),
  sparkle: <path d="M12 3l1.9 5.6L19.5 10l-5.6 1.9L12 17.5l-1.9-5.6L4.5 10l5.6-1.4L12 3z" />,
};

export function Icon({
  name,
  className = 'h-5 w-5',
  strokeWidth = 1.6,
}: {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}
