import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { contact, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Cookie Policy',
  description: `How ${site.name} uses cookies and similar storage on this website.`,
  path: '/cookies/',
});

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      updated="26 August 2026"
      intro="What this website stores in your browser, and what it does not."
    >
      <h2>1. Current position</h2>
      <p>
        This marketing website does not set advertising or analytics cookies, and it does not embed
        third-party tracking scripts. Nothing on these pages profiles you or follows you to other sites.
      </p>

      <h2>2. Strictly necessary storage</h2>
      <p>
        The site is statically generated and served without a login, so it does not need session cookies to
        function. Your browser may cache page assets for performance; that cache is controlled by your
        browser, not by us.
      </p>

      <h2>3. The mobile app and dashboard</h2>
      <p>
        Signing in to the {site.name} app or admin dashboard requires authentication tokens, which are stored
        on your device so you are not asked to sign in on every screen. These are strictly necessary for the
        service to work and are described in our{' '}
        <a href="/privacy/">Privacy Policy</a>.
      </p>

      <h2>4. If this changes</h2>
      <p>
        If we later add analytics or embedded content that sets cookies, we will update this page and, where
        required, ask for your consent before those cookies are set.
      </p>

      <h2>5. Controlling cookies</h2>
      <p>
        You can clear or block cookies and site data from your browser&apos;s settings at any time. Doing so
        will not prevent you from reading this website.
      </p>

      <h2>6. Contact</h2>
      <p>
        Questions about this policy can be sent to{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
