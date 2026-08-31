import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { LegalPage } from '@/components/LegalPage';
import { site } from '@/config/site';
import { termsHtml } from './content';

export const metadata: Metadata = pageMetadata({
  title: 'Terms & Conditions',
  description: `The resident Terms & Conditions and Privacy & Data Declaration for the ${site.name} platform.`,
  path: '/terms/',
});

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms & Conditions"
      updated="30 August 2026"
      intro={`The resident Terms of Use, Privacy & Data Declaration and legal terms for ${site.name}.`}
    >
      <div className="mb-10 rounded-xl border border-amber-300 bg-amber-50 p-5 text-sm text-amber-900">
        <p className="mb-2 font-semibold">Draft — not yet in force.</p>
        <p className="mb-0">
          This document is awaiting review by Indian legal counsel. Everything this website already
          establishes has been filled in. Every remaining highlighted{' '}
          <mark className="legal-todo">[PLACEHOLDER]</mark> is a company or counsel decision — the
          registered entity, the grievance officer, retention periods, the liability floor and the
          jurisdiction — and must be settled before this is published as the operative agreement.
        </p>
      </div>
      {/* ponytail: content is a build-time constant generated from the source document — no user input reaches it. */}
      <div dangerouslySetInnerHTML={{ __html: termsHtml }} />
    </LegalPage>
  );
}
