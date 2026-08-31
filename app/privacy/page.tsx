import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/config/site';
import { privacyHtml } from './content';

export const metadata: Metadata = pageMetadata({
  title: 'Privacy Policy',
  description: `How ${site.name} collects, uses, stores, shares and protects personal information across the mobile app, this website and related services.`,
  path: '/privacy/',
});

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      updated="31 August 2026"
      intro={`How ${site.name} collects, uses, shares and protects the information residents trust us with.`}
    >
      <div className="mb-10 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
        <p className="mb-0">
          The highlighted <mark className="legal-todo">[PLACEHOLDERS]</mark> below — the registered
          entity and its address, the RWA details and the in-app deletion path — still have to be
          filled in before this policy is complete.
        </p>
      </div>
      {/* ponytail: content is a build-time constant generated from the source document — no user input reaches it. */}
      <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
    </LegalPage>
  );
}
