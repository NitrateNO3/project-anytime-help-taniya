import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import { Logo } from '@/components/Logo';
import { PageHeader } from '@/components/PageHeader';
import { CTA } from '@/components/sections/CTA';
import { Container, Section } from '@/components/ui/Section';
import { contact, roles, site } from '@/config/site';

export const metadata: Metadata = pageMetadata({
  title: 'About',
  description: `${site.name} is a real-time complaint and issue management platform for residential societies, campuses and organisational facilities.`,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Maintenance that leaves a record"
        body="Most societies run their maintenance on phone calls, a notebook at the gate and a WhatsApp group nobody can search. Anytime Help replaces that with one system every side of the building can see."
      />

      <Section compactTop>
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <div className="legal-prose">
                <h2>What Anytime Help is</h2>
                <p>
                  Anytime Help is a real-time complaint and issue management platform for residential
                  societies, campus facilities and organisational infrastructure. It connects the three
                  people involved in any repair — the resident who found the problem, the staff member who
                  fixes it, and the manager accountable for both.
                </p>

                <h2>How it fits together</h2>
                <ul>
                  <li>
                    <strong>A mobile app for residents</strong> — raise a complaint with a photo, track it
                    live, see the resolution photo when it is closed, and read society announcements.
                  </li>
                  <li>
                    <strong>A workspace for staff</strong> — every worker sees only the complaints routed to
                    their department, updates the status as work progresses, and uploads the resolution
                    photo.
                  </li>
                  <li>
                    <strong>A web dashboard for admins</strong> — oversight of every complaint, control of
                    departments and accounts, and announcements that reach every resident at once.
                  </li>
                </ul>

                <h2>Why we built it</h2>
                <p>
                  Generic ticketing tools are built for IT helpdesks, not for a leaking tap on the second
                  floor of Block A. They have no concept of a location within a building, of a department
                  that owns a category of work, or of the fifteen residents who all want to report the same
                  broken street light. And none of them ask for a photograph of the finished job.
                </p>
                <p>
                  Anytime Help sits in that gap: the operational software a facility actually runs its day
                  on, with proof attached to every resolution.
                </p>

                <h2>Who it&apos;s for</h2>
                <ul>
                  {roles.map((role) => (
                    <li key={role.id}>
                      <strong>{role.title.replace('For ', '')}</strong> — {role.body}
                    </li>
                  ))}
                </ul>

                <h2>Talk to us</h2>
                <p>
                  We work directly with the societies and campuses using Anytime Help, and the product
                  changes because of what they tell us. If there is something your facility needs, email us
                  at <a href={`mailto:${contact.email}`}>{contact.email}</a>.
                </p>
              </div>
            </div>

            <aside className="lg:col-span-5">
              <div className="rounded-card-lg border border-ink-200/70 bg-ink-50 p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <Logo className="h-28" />
                  <p className="mt-3 text-xs uppercase tracking-[0.12em] text-ink-400">{site.tagline}</p>
                </div>

                <h2 className="mt-7 text-base font-semibold text-ink-950">At a glance</h2>
                <dl className="mt-5 divide-y divide-ink-200 text-sm">
                  {[
                    ['Product', 'Complaint & issue management for facilities'],
                    ['Platforms', 'Android, iOS and an admin web dashboard'],
                    ['Built for', 'Residents, maintenance staff and facility admins'],
                    ['Core flow', 'Report → Route → Resolve → Prove'],
                    ['Departments', 'Plumbing, Electrical, Cleaning, Security, HVAC and any you add'],
                  ].map(([term, value]) => (
                    <div key={term} className="flex flex-col gap-1 py-3.5 first:pt-0 last:pb-0 sm:flex-row sm:gap-4">
                      <dt className="shrink-0 text-ink-500 sm:w-28">{term}</dt>
                      <dd className="font-medium text-ink-800">{value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CTA />
    </>
  );
}
