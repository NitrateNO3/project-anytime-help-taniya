import { Button } from '@/components/ui/Button';
import { adminUrl } from '@/config/site';

/**
 * "Admin Login" — the second primary call to action on this site.
 *
 * It points at the Anytime Help Admin Web Dashboard. That deployment URL is
 * not known yet, so `adminUrl` in config/site.ts is empty and the button
 * renders in a clearly-labelled disabled state rather than linking nowhere.
 * Fill `adminUrl` in and every instance across the site becomes live.
 */
export function AdminButton({
  size = 'lg',
  variant = 'secondary',
  className = '',
  tone = 'light',
}: {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'ghost' | 'inverse';
  className?: string;
  /** 'dark' restyles the disabled state for a dark background. */
  tone?: 'light' | 'dark';
}) {
  const icon = (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="h-[1.05rem] w-[1.05rem]" aria-hidden="true">
      <rect x="3.5" y="4.5" width="17" height="12.5" rx="2" strokeLinejoin="round" />
      <path d="M8 20.5h8M12 17v3.5" strokeLinecap="round" />
      <path d="M9.5 10.7l2 2 3.2-3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  if (!adminUrl) {
    const disabledTone =
      tone === 'dark'
        ? 'bg-white/5 text-ink-300 ring-1 ring-inset ring-white/15'
        : 'bg-white text-ink-400 ring-1 ring-inset ring-ink-200';
    const height = size === 'sm' ? 'h-9 px-3.5 text-sm' : size === 'md' ? 'h-11 px-5 text-[0.9375rem]' : 'h-[3.25rem] px-7 text-base';
    return (
      <span
        role="img"
        aria-label="Admin Login — coming soon"
        title="The admin dashboard link is not published yet"
        className={`inline-flex cursor-default items-center justify-center gap-2 rounded-xl font-semibold ${height} ${disabledTone} ${className}`}
      >
        {icon}
        Admin Login
        {size === 'lg' && (
          <span
            className={`rounded px-1.5 py-0.5 text-[0.625rem] font-semibold uppercase tracking-wide ${
              tone === 'dark' ? 'bg-white/10 text-ink-300' : 'bg-ink-100 text-ink-500'
            }`}
          >
            Soon
          </span>
        )}
      </span>
    );
  }

  return (
    <Button href={adminUrl} size={size} variant={variant} className={className} data-analytics="admin-login-click">
      {icon}
      Admin Login
    </Button>
  );
}
