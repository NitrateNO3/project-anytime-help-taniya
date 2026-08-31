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
      {/* ponytail: content is a build-time constant generated from the source document — no user input reaches it. */}
      <div dangerouslySetInnerHTML={{ __html: privacyHtml }} />
    </LegalPage>
  );
}
