import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { contact, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses and protects personal information across this website, the mobile app and the admin dashboard.`,
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="26 August 2026"
      intro={`How ${site.name} handles the information residents, staff and facility admins trust us with.`}
    >
      <h2>1. Who we are</h2>
      <p>
        {site.name} (&quot;we&quot;, &quot;us&quot;) provides a complaint and issue management platform for
        residential societies, campuses and organisational facilities, available through this website, our
        mobile application and an admin web dashboard. This policy explains what personal information we
        collect, why we collect it, and what control you have over it.
      </p>

      <h2>2. Information we collect</h2>
      <ul>
        <li>
          <strong>Account information</strong> — your name, email address, phone number and the residential
          address or unit you register, provided when you create an account.
        </li>
        <li>
          <strong>Authentication data</strong> — accounts are authenticated through Firebase Authentication,
          which issues a unique user identifier we store against your profile.
        </li>
        <li>
          <strong>Complaint content</strong> — the title, description, category, location, priority and
          photographs you attach when raising or resolving a complaint, together with your upvotes and any
          replies you post in a complaint thread.
        </li>
        <li>
          <strong>Role and department</strong> — whether your account is a resident, staff or admin account,
          and for staff which department you belong to.
        </li>
        <li>
          <strong>Enquiry information</strong> — the details you submit through the contact form on this
          website, used solely to respond to your enquiry.
        </li>
      </ul>

      <h2>3. How we use information</h2>
      <ul>
        <li>To create and secure your account and confirm which facility you belong to.</li>
        <li>To route each complaint to the department responsible for that category of work.</li>
        <li>To show the status of a complaint to the resident who raised it and the staff assigned to it.</li>
        <li>To deliver announcements published by your facility administrator.</li>
        <li>To respond to support requests and enquiries you send us.</li>
        <li>To diagnose faults and improve the reliability of the service.</li>
      </ul>

      <h2>4. Photographs you upload</h2>
      <p>
        Photographs attached to a complaint — both the &quot;Before&quot; image supplied by the resident and
        the &quot;After&quot; image supplied by staff — are stored against that complaint and are visible to
        the resident who raised it, the staff assigned to it and your facility&apos;s administrators. Please
        do not photograph people, documents or anything else you would not want those parties to see.
      </p>

      <h2>5. Who can see your complaints</h2>
      <p>
        Your data is scoped to your facility. Residents see their own complaints and the complaints they can
        upvote. Staff see only the complaints routed to their department. Administrators of your facility can
        see all complaints, accounts and departments within it. No other facility can see your data.
      </p>

      <h2>6. Sharing and service providers</h2>
      <p>
        We do not sell personal information. We share it only with the service providers needed to run the
        platform — authentication, hosting and database infrastructure — and only to the extent they need it
        to provide that service. We may also disclose information where we are legally required to.
      </p>

      <h2>7. Retention</h2>
      <p>
        Complaint records and their photographs are retained for as long as your facility keeps its account
        with us, because the history of a repair is part of the facility&apos;s maintenance record. Account
        information is deleted on request, subject to any records we are legally required to keep.
      </p>

      <h2>8. Security</h2>
      <p>
        Access is controlled by role: residents, staff and admins each see only what their role permits.
        Accounts are authenticated through Firebase Authentication. We do not publish security or compliance
        certifications we have not been independently audited for — if you have specific security
        requirements, contact us and we will answer them directly.
      </p>

      <h2>9. Your rights</h2>
      <p>
        You can ask us to access, correct or delete the personal information we hold about you, and to
        provide a copy of it. Write to <a href={`mailto:${contact.email}`}>{contact.email}</a> and we will
        respond. Where your facility administrator controls the account, we may need to route the request
        through them.
      </p>

      <h2>10. Children</h2>
      <p>
        The service is intended for adults responsible for a residence or a facility. We do not knowingly
        collect personal information from children.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>
        We will update this page when our practices change and revise the &quot;last updated&quot; date at
        the top. Material changes will be communicated in the app.
      </p>

      <h2>12. Contact</h2>
      <p>
        Questions about this policy can be sent to{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
