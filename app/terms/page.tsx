import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { contact, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'Terms of Service',
  description: `The terms that govern use of the ${site.name} website, mobile application and admin dashboard.`,
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      updated="26 August 2026"
      intro={`The terms you agree to when you use ${site.name}.`}
    >
      <h2>1. Agreement</h2>
      <p>
        By creating an account or using the {site.name} website, mobile application or admin dashboard, you
        agree to these terms. If you are accepting them on behalf of a society, campus or organisation, you
        confirm you are authorised to do so.
      </p>

      <h2>2. Your account</h2>
      <ul>
        <li>You are responsible for the accuracy of the details on your account, including your unit or address.</li>
        <li>You are responsible for keeping your login credentials confidential.</li>
        <li>Staff and admin accounts are created and managed by your facility administrator.</li>
        <li>Tell us promptly if you believe an account has been accessed without authorisation.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>You agree not to:</p>
      <ul>
        <li>Raise complaints that are false, abusive, or intended to harass a resident or staff member.</li>
        <li>Upload photographs of people without their consent, or any unlawful or offensive content.</li>
        <li>Use another person&apos;s account, or create accounts for people who have not asked for one.</li>
        <li>Attempt to access complaints, departments or facilities your role does not give you access to.</li>
        <li>Interfere with, overload or attempt to reverse engineer the service.</li>
      </ul>

      <h2>4. Complaints and resolution</h2>
      <p>
        {site.name} is a system for recording, routing and tracking maintenance complaints. It does not
        itself perform maintenance work. The work, its timing and its quality are the responsibility of your
        facility and the staff it employs or contracts. Status values such as &quot;Done&quot; reflect what a
        staff member has recorded in the system, not an independent verification by us.
      </p>

      <h2>5. Your content</h2>
      <p>
        You keep ownership of the complaint text and photographs you submit. You grant us the licence needed
        to store, display and transmit that content to the other users in your facility who are entitled to
        see it, for the purpose of operating the service.
      </p>

      <h2>6. Availability</h2>
      <p>
        We work to keep the service available and reliable, but we do not guarantee uninterrupted access.
        Maintenance, updates and factors outside our control may cause downtime. In an emergency, contact
        your facility directly rather than relying on the app.
      </p>

      <h2>7. Suspension and termination</h2>
      <p>
        We may suspend or terminate access where these terms are breached, where an account is being used
        abusively, or where required by law. You can stop using the service and request deletion of your
        account at any time.
      </p>

      <h2>8. Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for indirect or consequential loss, for damage
        arising from maintenance work carried out or not carried out by your facility, or for loss arising
        from your use of, or inability to use, the service.
      </p>

      <h2>9. Changes to these terms</h2>
      <p>
        We may update these terms as the product changes. The revised terms take effect when published on
        this page, and we will revise the &quot;last updated&quot; date accordingly.
      </p>

      <h2>10. Contact</h2>
      <p>
        Questions about these terms can be sent to{' '}
        <a href={`mailto:${contact.email}`}>{contact.email}</a>.
      </p>
    </LegalPage>
  );
}
