import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { StoreButtons } from '@/components/StoreButtons';
import { Container } from '@/components/ui/Section';
import { footerNav } from '@/config/nav';
import { contact, site, social, type SocialKey } from '@/config/site';

const socialLabels: Record<SocialKey, string> = {
  instagram: 'Instagram',
  linkedin: 'LinkedIn',
  facebook: 'Facebook',
  x: 'X',
  youtube: 'YouTube',
};

const socialIcons: Record<SocialKey, React.ReactNode> = {
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.6" />
      <circle cx="12" cy="12" r="3.9" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M8 10.5v6M8 7.6v.1M12 16.5v-3.4a2.1 2.1 0 0 1 4.2 0v3.4" />
    </>
  ),
  facebook: <path d="M14.8 8.2h2.2V5.1h-2.4c-2.2 0-3.6 1.4-3.6 3.7v1.7H8.6v3.1H11v7.3h3.2v-7.3h2.4l.4-3.1h-2.8V9.2c0-.7.3-1 .8-1z" />,
  x: <path d="M4 4l7 9.2L4.4 20h1.9l5.6-5.8 4.3 5.8H20l-7.3-9.7L19.4 4h-1.9l-5.2 5.4L8.2 4H4z" />,
  youtube: (
    <>
      <rect x="2.8" y="5.5" width="18.4" height="13" rx="4" />
      <path d="M10.4 9.6l4.6 2.9-4.6 2.9V9.6z" />
    </>
  ),
};

export function Footer() {
  // Only render social links that have actually been configured.
  const socials = (Object.keys(social) as SocialKey[])
    .filter((key) => social[key])
    .map((key) => ({ key, label: socialLabels[key], href: social[key] }));

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200 bg-ink-50 text-ink-600">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <Logo withTagline className="h-24" />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-500">{site.shortDescription}</p>
            <StoreButtons className="mt-6" />
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {footerNav.map((group) => (
              <div key={group.heading}>
                <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-950">
                  {group.heading}
                </h2>
                <ul className="mt-4 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="rounded text-sm text-ink-500 transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <h2 className="text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-950">Contact</h2>
              <ul className="mt-4 space-y-3 text-sm text-ink-500">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="rounded break-words text-[0.8125rem] transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                  >
                    {contact.email}
                  </a>
                </li>
                {contact.phone && (
                  <li>
                    <a
                      href={`tel:${contact.phone.replace(/\s/g, '')}`}
                      className="rounded transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                    >
                      {contact.phone}
                    </a>
                  </li>
                )}
                {contact.address && <li>{contact.address}</li>}
              </ul>

              {socials.length > 0 && (
                <>
                  <h2 className="mt-8 text-[0.8125rem] font-semibold uppercase tracking-[0.1em] text-ink-950">
                    Follow
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {socials.map((s) => (
                      <li key={s.key}>
                        <a
                          href={s.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white text-ink-500 ring-1 ring-inset ring-ink-200 transition-colors hover:text-brand-600 hover:ring-brand-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-[1.05rem] w-[1.05rem]"
                            aria-hidden="true"
                          >
                            {socialIcons[s.key]}
                          </svg>
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-ink-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            © {year} {site.name}. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-500">
            <li>
              <Link href="/privacy/" className="rounded transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/delete-account/" className="rounded transition-colors hover:text-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500">
                Delete Account
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
