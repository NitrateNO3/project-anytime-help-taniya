import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { contact, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Delete Your Account',
  description: `How to delete your ${site.name} account and the personal data associated with it, either from inside the app or by email request.`,
  path: '/delete-account/',
});

export default function DeleteAccountPage() {
  return (
    <LegalPage
      title="Delete Your Account"
      updated="31 August 2026"
      intro={`How to permanently delete your ${site.name} account and the personal data associated with it.`}
    >
      <p>
        You can delete your {site.name} account and its associated data at any time, using either of the
        methods below.
      </p>

      <h2>Method 1 — In-app deletion (immediate)</h2>
      <ol>
        <li>Open the {site.name} app.</li>
        <li>Log in to your account.</li>
        <li>Go to the <strong>Profile</strong> tab in the bottom navigation.</li>
        <li>Select <strong>Delete My Account</strong>.</li>
        <li>
          Review the consequences, tick the confirmation box, type <strong>DELETE</strong>, and tap{' '}
          <strong>Permanently Delete My Account</strong>.
        </li>
      </ol>
      <p>
        Your account credentials, active sessions and personal data are deleted immediately and
        permanently. The action cannot be undone.
      </p>

      <h2>Method 2 — Email request</h2>
      <p>
        If you cannot access the app, or would rather request deletion externally:
      </p>
      <ol>
        <li>
          Email <a href={`mailto:${contact.email}?subject=Account%20Deletion%20Request`}>{contact.email}</a>{' '}
          with the subject line <strong>&quot;Account Deletion Request&quot;</strong>.
        </li>
        <li>Include the email address or phone number your account is registered with.</li>
        <li>
          We verify the request and permanently purge your account, profile credentials and associated data
          from our servers within <strong>48 to 72 hours</strong>, then send you a confirmation email.
        </li>
      </ol>

      <h2>What is deleted</h2>
      <ul>
        <li>
          Your account profile — name, email address, phone number, registered unit or address, and password
          credentials.
        </li>
        <li>Your authentication identifier, access tokens and session records.</li>
        <li>
          The complaints you raised, together with their descriptions and the photographs attached to them.
        </li>
        <li>Your role, department assignment and announcement read history.</li>
      </ul>

      <h2>Data retention</h2>
      <p>
        No personal data is retained after deletion. Where a complaint forms part of your facility&apos;s
        maintenance record, the repair record itself is kept by the facility with your personal details
        removed, so it can no longer be linked back to you. Transactional or audit logs are retained only
        for as long as statutory regulations require.
      </p>

      <h2>Questions</h2>
      <p>
        Anything unclear about this process can be sent to{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>. See also our{' '}
        <a href="/privacy/">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
