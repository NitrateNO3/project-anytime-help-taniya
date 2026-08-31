import type { ScreenVisual } from '@/config/site';
import { PhoneFrame, PhoneShot } from '@/components/mockups/PhoneFrame';

/**
 * Illustrative renderings of the Anytime Help app UI for the screens we do not
 * have an exported screenshot of yet. Everything here is layout, not live
 * data — replace a variant with a <PhoneShot> as real screenshots land.
 */

/** Screens we have a real exported screenshot for. */
const screenshots: Partial<
  Record<ScreenVisual, { src: string; label: string; width?: number; height?: number }>
> = {
  raise: {
    src: '/images/screen-raise.jpg',
    label: 'Anytime Help app — the Raise a Complaint form with category, location, description and photo upload',
  },
  announcements: {
    src: '/images/screen-announcements.jpg',
    label: 'Anytime Help app — the Announcements feed, with society notices from the RWA and residents',
    height: 1949,
  },
  settings: {
    src: '/images/screen-settings.jpg',
    label: 'Anytime Help app — the Settings screen with the resident profile, language preference and logout',
  },
};

const statusStyles: Record<string, string> = {
  Pending: 'bg-warning/10 text-warning',
  'In Progress': 'bg-brand-100 text-brand-700',
  Done: 'bg-success/10 text-success',
  High: 'bg-error/10 text-error',
  Medium: 'bg-warning/10 text-warning',
  Low: 'bg-ink-100 text-ink-500',
  New: 'bg-accent-100 text-accent-700',
};

function Chip({ label }: { label: string }) {
  return (
    <span
      className={`shrink-0 whitespace-nowrap rounded-md px-1.5 py-0.5 text-[0.5rem] font-semibold ${
        statusStyles[label] ?? 'bg-ink-100 text-ink-600'
      }`}
    >
      {label}
    </span>
  );
}

function TopBar({ title, sub, back = false }: { title: string; sub?: string; back?: boolean }) {
  return (
    <div className="flex items-center gap-2.5 border-b border-ink-100 bg-white px-4 pb-2.5 pt-1">
      {back ? (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="h-3.5 w-3.5 text-ink-800" aria-hidden="true">
          <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <span className="h-5 w-5 shrink-0 rounded-md bg-brand-600" aria-hidden="true" />
      )}
      <div className="min-w-0 flex-1">
        <p className="truncate text-[0.6875rem] font-bold leading-tight text-ink-950">{title}</p>
        {sub && <p className="truncate text-[0.5rem] leading-tight text-ink-400">{sub}</p>}
      </div>
      <span className="h-5 w-5 rounded-full bg-brand-100" aria-hidden="true" />
    </div>
  );
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`rounded-xl bg-white p-2.5 shadow-xs ring-1 ring-ink-100 ${className}`}>{children}</div>;
}

/** The app's bottom tab bar with its centre "raise a complaint" button. */
function TabBar() {
  return (
    <div className="absolute inset-x-3 bottom-3" aria-hidden="true">
      <div className="relative flex h-11 items-center justify-around rounded-full bg-white px-3 shadow-lg ring-1 ring-ink-100">
        {[
          <path key="h" d="M4 10.6L12 4l8 6.6V19a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 19v-8.4z" />,
          <path key="s" d="M11 4.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM20 20l-4.3-4.3" />,
          null,
          <path key="c" d="M20.5 11.6c0 3.9-3.8 7.1-8.5 7.1-.93 0-1.83-.12-2.66-.35L4 20.5l1.2-3.3C3.55 15.85 2.5 13.85 2.5 11.6 2.5 7.7 6.3 4.5 11 4.5s9.5 3.2 9.5 7.1z" />,
          <path key="g" d="M12 15.2a3.2 3.2 0 1 0 0-6.4 3.2 3.2 0 0 0 0 6.4zM19.4 12a7.4 7.4 0 0 0-.1-1.1l2-1.6-2-3.4-2.4 1a7.4 7.4 0 0 0-1.9-1.1L14.6 3H9.4l-.4 2.8c-.7.3-1.3.6-1.9 1.1l-2.4-1-2 3.4 2 1.6a7.4 7.4 0 0 0 0 2.2l-2 1.6 2 3.4 2.4-1c.6.5 1.2.8 1.9 1.1l.4 2.8h5.2l.4-2.8c.7-.3 1.3-.6 1.9-1.1l2.4 1 2-3.4-2-1.6c.06-.36.1-.73.1-1.1z" />,
        ].map((d, i) =>
          d === null ? (
            <span key={i} className="w-7" />
          ) : (
            <svg
              key={i}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`h-3.5 w-3.5 ${i === 0 ? 'text-ink-900' : 'text-ink-300'}`}
            >
              {d}
            </svg>
          ),
        )}
        <span className="absolute left-1/2 top-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-brand-600 shadow-md ring-4 ring-white">
          <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" className="h-4 w-4">
            <path d="M12 5.5v13M5.5 12h13" />
          </svg>
        </span>
      </div>
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="relative h-[430px] overflow-hidden bg-[#F7F9FD]">{children}</div>;
}

/**
 * The "before" and "after" images attached to a ticket. Drawn rather than
 * photographed so the pair reads as the same corridor tap in both states —
 * leaking on the left, dry and signed off on the right.
 */
function EvidencePhoto({ resolved }: { resolved: boolean }) {
  return (
    <svg viewBox="0 0 100 70" className="block h-full w-full" aria-hidden="true">
      <rect width="100" height="70" fill={resolved ? '#E5E8E3' : '#DCD8CF'} />
      <g stroke={resolved ? '#D4D9D3' : '#CCC7BC'} strokeWidth="1">
        <path d="M0 24h100M0 48h100M26 0v70M62 0v70" />
      </g>
      <rect y="56" width="100" height="14" fill={resolved ? '#D0D6CF' : '#C5C0B5'} />
      <g fill="#9AA0A6">
        <rect x="38" y="18" width="16" height="6" rx="3" />
        <rect x="42" y="22" width="8" height="12" rx="2" />
        <rect x="46" y="32" width="4" height="9" rx="2" />
      </g>
      {resolved ? (
        <>
          <circle cx="77" cy="17" r="9" fill="#16A34A" />
          <path d="M72.5 17l3 3 6-6" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </>
      ) : (
        <>
          <circle cx="48" cy="46" r="2.4" fill="#5FA8DC" />
          <circle cx="48" cy="53" r="1.7" fill="#5FA8DC" opacity="0.75" />
          <ellipse cx="50" cy="62" rx="17" ry="4" fill="#7FBEE6" />
          <ellipse cx="50" cy="62" rx="9" ry="2" fill="#9BD0EF" />
        </>
      )}
    </svg>
  );
}

export function AppScreen({ variant }: { variant: ScreenVisual }) {
  if (variant === 'evidence') {
    return (
      <Body>
        <TopBar title="Complaint #1042" sub="Plumbing · Block A, 2F" back />
        <div className="space-y-2 px-3 py-2.5">
          <Card>
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.625rem] font-semibold leading-tight text-ink-900">Leaking tap in corridor</p>
              <Chip label="Done" />
            </div>
            <p className="mt-1 text-[0.5rem] leading-tight text-ink-400">Raised 2 Aug · Resolved 4 Aug</p>
          </Card>

          <div className="grid grid-cols-2 gap-2">
            {[
              { label: 'Before', by: 'Aman S. · resident', when: '2 Aug, 09:12', resolved: false },
              { label: 'After', by: 'R. Kumar · plumbing', when: '4 Aug, 16:38', resolved: true },
            ].map((shot) => (
              <Card key={shot.label} className="!p-1.5">
                <span className="block overflow-hidden rounded-lg">
                  <EvidencePhoto resolved={shot.resolved} />
                </span>
                <p className="mt-1.5 px-0.5 text-[0.5rem] font-bold uppercase tracking-wide text-ink-500">
                  {shot.label}
                </p>
                <p className="px-0.5 text-[0.4375rem] leading-tight text-ink-400">{shot.by}</p>
                <p className="px-0.5 text-[0.4375rem] leading-tight text-ink-300">{shot.when}</p>
              </Card>
            ))}
          </div>

          <Card>
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-success/10" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="#16A34A" strokeWidth="3" className="h-2.5 w-2.5">
                  <path d="M4 12.5l5 5 11-11" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="min-w-0">
                <span className="block text-[0.5rem] font-semibold leading-tight text-ink-900">
                  Resolution photo attached
                </span>
                <span className="block text-[0.4375rem] leading-tight text-ink-400">
                  Kept with the ticket history
                </span>
              </span>
            </div>
          </Card>
        </div>
        <TabBar />
      </Body>
    );
  }

  if (variant === 'complaint') {
    return (
      <div className="relative h-[430px] overflow-hidden bg-gradient-to-b from-[#E9F0FB] via-[#F8F9F4] to-[#FBFBF6]">
        <div className="px-4 pb-1 pt-3">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-[0.5625rem] font-medium text-ink-400">Hello Aman 👋</p>
              <p className="mt-0.5 font-display text-[0.9375rem] font-bold leading-tight text-ink-950">
                Explore Society
              </p>
            </div>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-xs ring-1 ring-ink-100" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="#1D4ED8" className="h-3 w-3">
                <circle cx="12" cy="8" r="3.6" />
                <path d="M4.8 20a7.2 7.2 0 0 1 14.4 0z" />
              </svg>
            </span>
          </div>

          <div className="mt-2.5 flex gap-1.5" aria-hidden="true">
            <span className="rounded-full bg-brand-600 px-2.5 py-1 text-[0.5rem] font-semibold text-white">
              My Complaints
            </span>
            <span className="rounded-full bg-white px-2.5 py-1 text-[0.5rem] font-semibold text-ink-500 ring-1 ring-ink-100">
              Announcements
            </span>
          </div>

          <div className="mt-2 flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1.5 ring-1 ring-ink-100" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-2.5 w-2.5 text-ink-300">
              <circle cx="11" cy="11" r="6.5" />
              <path d="M20 20l-4.3-4.3" strokeLinecap="round" />
            </svg>
            <span className="text-[0.5rem] text-ink-300">Search complaints…</span>
          </div>

          <div className="mt-2 flex gap-1.5" aria-hidden="true">
            {['All', 'Plumbing', 'Electrical', 'Cleaning'].map((c, i) => (
              <span
                key={c}
                className={`rounded-full px-2 py-[0.1875rem] text-[0.4375rem] font-semibold ${
                  i === 0 ? 'bg-ink-900 text-white' : 'bg-ink-100/80 text-ink-500'
                }`}
              >
                {c}
              </span>
            ))}
          </div>

          <p className="mt-2.5 text-[0.625rem] font-bold text-ink-950">My Complaints</p>
        </div>

        <div className="space-y-2 px-4">
          {[
            { title: 'Leaking tap in corridor', meta: 'Plumbing · Block A, 2F', status: 'In Progress', age: '2d' },
            { title: 'Street light out near Gate 2', meta: 'Electrical · Main gate', status: 'Pending', age: '4h' },
            { title: 'Lift lobby not cleaned', meta: 'Cleaning · Block C', status: 'Done', age: '1w' },
          ].map((c) => (
            <div key={c.title} className="rounded-xl bg-white p-2.5 shadow-xs ring-1 ring-ink-100">
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 h-8 w-8 shrink-0 rounded-lg bg-brand-50" aria-hidden="true" />
                <span className="min-w-0 flex-1">
                  <span className="flex items-start justify-between gap-2">
                    <span className="truncate text-[0.5625rem] font-semibold leading-tight text-ink-900">
                      {c.title}
                    </span>
                    <Chip label={c.status} />
                  </span>
                  <span className="mt-1 flex items-center justify-between gap-2">
                    <span className="truncate text-[0.5rem] leading-tight text-ink-400">{c.meta}</span>
                    <span className="shrink-0 text-[0.5rem] font-semibold text-ink-400">{c.age}</span>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <TabBar />
      </div>
    );
  }

  if (variant === 'tracking') {
    return (
      <Body>
        <TopBar title="Complaint #1042" sub="Plumbing · Block A" back />
        <div className="space-y-2 px-3 py-2.5">
          <Card>
            <div className="flex items-start justify-between gap-2">
              <p className="text-[0.625rem] font-semibold leading-tight text-ink-900">Leaking tap in corridor</p>
              <Chip label="High" />
            </div>
            <p className="mt-1 text-[0.5rem] leading-tight text-ink-400">Block A · 2nd Floor · Raised 2 days ago</p>
          </Card>

          <Card>
            <p className="text-[0.5rem] font-semibold uppercase tracking-wide text-ink-400">Status</p>
            <ol className="mt-2.5 space-y-2.5">
              {[
                ['Pending', 'Ticket created', true],
                ['In Progress', 'Assigned to R. Kumar', true],
                ['Done', 'Awaiting resolution photo', false],
              ].map(([label, meta, complete], i, arr) => (
                <li key={label as string} className="relative flex gap-2.5">
                  {i < arr.length - 1 && (
                    <span
                      aria-hidden="true"
                      className={`absolute left-[0.3125rem] top-3.5 h-[1.4rem] w-[1.5px] ${complete ? 'bg-brand-500' : 'bg-ink-200'}`}
                    />
                  )}
                  <span
                    className={`mt-0.5 flex h-2.5 w-2.5 shrink-0 items-center justify-center rounded-full ${
                      complete ? 'bg-brand-600' : 'bg-white ring-[1.5px] ring-ink-200'
                    }`}
                    aria-hidden="true"
                  />
                  <span className="min-w-0 flex-1">
                    <span className={`block text-[0.5625rem] font-semibold leading-tight ${complete ? 'text-ink-900' : 'text-ink-400'}`}>
                      {label}
                    </span>
                    <span className="block text-[0.5rem] leading-tight text-ink-400">{meta}</span>
                  </span>
                </li>
              ))}
            </ol>
          </Card>

          <div className="grid grid-cols-2 gap-2">
            {[
              ['Before', 'bg-ink-200'],
              ['After', 'bg-ink-100'],
            ].map(([label, tone]) => (
              <Card key={label as string}>
                <p className="text-[0.5rem] font-semibold uppercase tracking-wide text-ink-400">{label}</p>
                <span className={`mt-1.5 block h-12 rounded-lg ${tone}`} aria-hidden="true" />
              </Card>
            ))}
          </div>
        </div>
        <TabBar />
      </Body>
    );
  }

  if (variant === 'staff') {
    return (
      <Body>
        <TopBar title="Plumbing queue" sub="R. Kumar · Staff" />
        <div className="space-y-2 px-3 py-2.5">
          <div className="grid grid-cols-3 gap-2">
            {[
              ['4', 'Pending'],
              ['2', 'Active'],
              ['9', 'Done'],
            ].map(([v, l]) => (
              <div key={l} className="rounded-xl bg-white p-2 text-center shadow-xs ring-1 ring-ink-100">
                <p className="text-sm font-bold leading-none text-ink-950">{v}</p>
                <p className="mt-1 text-[0.4375rem] font-medium uppercase tracking-wide text-ink-400">{l}</p>
              </div>
            ))}
          </div>

          <p className="px-0.5 pt-0.5 text-[0.5rem] font-semibold uppercase tracking-wide text-ink-400">
            Assigned to you
          </p>
          {[
            ['Leaking tap — Block A, 2F', 'High · 2 days', 'In Progress'],
            ['Blocked drain — Block D lobby', 'Medium · 1 day', 'Pending'],
            ['Low water pressure — Flat 512', 'Low · 4 hours', 'Pending'],
            ['Overflow tank — Terrace B', 'Medium · 6 hours', 'Pending'],
          ].map(([title, meta, status]) => (
            <Card key={title}>
              <div className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-3 w-3">
                    <path d="M14.2 6.6a3.8 3.8 0 0 0 5 5l-8.4 8.4a2 2 0 0 1-2.8-2.8l8.4-8.4a3.8 3.8 0 0 0-2.2-2.2z" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[0.5625rem] font-semibold leading-tight text-ink-900">{title}</span>
                  <span className="mt-1 flex items-center justify-between gap-2">
                    <span className="truncate text-[0.5rem] leading-tight text-ink-400">{meta}</span>
                    <Chip label={status} />
                  </span>
                </span>
              </div>
            </Card>
          ))}
        </div>
        <TabBar />
      </Body>
    );
  }

  // 'admin' — the web dashboard, shown inside the phone for consistency.
  return (
    <Body>
      <TopBar title="Admin Dashboard" sub="Green Valley Society" />
      <div className="space-y-2 px-3 py-2.5">
        <div className="grid grid-cols-2 gap-2">
          {[
            ['38', 'Open', 'text-ink-950'],
            ['12', 'In Progress', 'text-ink-950'],
            ['214', 'Resolved', 'text-ink-950'],
            ['6', 'Departments', 'text-ink-950'],
          ].map(([v, l, c]) => (
            <div key={l} className="rounded-xl bg-white p-2.5 shadow-xs ring-1 ring-ink-100">
              <p className="text-[0.4375rem] font-medium uppercase tracking-wide text-ink-400">{l}</p>
              <p className={`mt-1 text-base font-bold leading-none ${c}`}>{v}</p>
            </div>
          ))}
        </div>

        <Card>
          <p className="text-[0.5rem] font-semibold uppercase tracking-wide text-ink-400">Complaints by department</p>
          <div className="mt-2 space-y-1.5">
            {[
              ['Plumbing', 78],
              ['Electrical', 62],
              ['Cleaning', 44],
              ['Security', 26],
            ].map(([name, pct]) => (
              <div key={name as string} className="flex items-center gap-2">
                <span className="w-12 shrink-0 text-[0.5rem] text-ink-500">{name}</span>
                <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-ink-100">
                  <span className="block h-full rounded-full bg-brand-600" style={{ width: `${pct}%` }} />
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <p className="text-[0.5rem] font-semibold uppercase tracking-wide text-ink-400">Resolution trend</p>
          <div className="mt-2 flex h-12 items-end gap-1" aria-hidden="true">
            {[42, 58, 47, 71, 55, 84, 66].map((h, i) => (
              <span
                key={i}
                className={`flex-1 rounded-sm ${i === 5 ? 'bg-brand-600' : 'bg-brand-200'}`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
        </Card>
      </div>
    </Body>
  );
}

/**
 * Renders the right thing for a screen: a real screenshot when we have one,
 * the CSS mockup otherwise. Callers never have to know which is which.
 */
export function AppScreenFrame({
  variant,
  label,
  className = '',
  glow = false,
  priority = false,
}: {
  variant: ScreenVisual;
  label: string;
  className?: string;
  glow?: boolean;
  priority?: boolean;
}) {
  const shot = screenshots[variant];
  if (shot) {
    return (
      <PhoneShot
        src={shot.src}
        label={shot.label}
        width={shot.width}
        height={shot.height}
        className={className}
        glow={glow}
        priority={priority}
      />
    );
  }
  return (
    <PhoneFrame label={label} className={className} glow={glow}>
      <AppScreen variant={variant} />
    </PhoneFrame>
  );
}
