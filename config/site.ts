/**
 * Single source of truth for everything that changes without a redesign —
 * store links, the admin dashboard URL, contact details, features, roles,
 * steps and FAQ copy all live here rather than inside components.
 *
 * Anything we cannot honestly publish yet (a live store listing, a real admin
 * URL) is left empty and the UI renders a "coming soon" state instead of a
 * dead or invented link.
 */

export const site = {
  name: 'Anytime Help',
  tagline: 'Community · Support · Solutions',
  description:
    'The easiest way to manage, track and resolve facility complaints. Report an issue with a photo, follow it live from Pending to Done, and download the Anytime Help app today.',
  shortDescription: 'Smart society, smart maintenance — for residents, staff and admins.',
  // Update to the production domain before deploying — used for canonical
  // URLs, Open Graph tags and sitemap.xml.
  url: 'https://anytimehelp.com',
  locale: 'en_IN',
} as const;

export const contact: { email: string; phone: string; address: string } = {
  email: 'support@anytimehelp.com',
  phone: '',           // e.g. '+91 98765 43210' — hidden while empty
  address: '',         // e.g. 'Sector 62, Noida, India' — hidden while empty
};

export type SocialKey = 'instagram' | 'linkedin' | 'facebook' | 'x' | 'youtube';

/** Only the handles with a URL are rendered — empty entries never ship. */
export const social: Record<SocialKey, string> = {
  instagram: '',
  linkedin: '',
  facebook: '',
  x: '',
  youtube: '',
};

/**
 * App store listings. Buttons render as a non-interactive "Coming soon" chip
 * until a real URL is set — never a fake or dead store link.
 */
export const stores: { appStore: string | null; googlePlay: string | null } = {
  appStore: null,
  googlePlay: null,
};

/**
 * The Admin Web Dashboard. Set this to the deployed dashboard URL and every
 * "Admin Login" button across the site becomes live. While it is empty the
 * buttons stay visible but disabled, labelled "Admin Login — coming soon".
 */
export const adminUrl = '';

/**
 * Contact form endpoint. Accepts any service that takes a JSON POST
 * (Formspree, Resend, your own API route, etc.). While unset the form tells
 * the visitor it is not connected and offers the email fallback instead of
 * faking a success state.
 */
export const contactEndpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT ?? '';

/* ------------------------------------------------------------------ */
/* Core features — website PRD §Section 2                              */
/* ------------------------------------------------------------------ */

export type CoreFeature = { icon: IconName; title: string; body: string };

export const coreFeatures: CoreFeature[] = [
  {
    icon: 'camera',
    title: 'Photo Evidence',
    body: 'Complete transparency with "Before" and "After" picture uploads on every ticket.',
  },
  {
    icon: 'pulse',
    title: 'Live Tracking',
    body: 'Real-time status updates as your complaint moves from Pending to In Progress to Done.',
  },
  {
    icon: 'chat',
    title: 'Threaded Chat',
    body: 'Talk directly to the maintenance staff inside the ticket — no phone tag, no lost context.',
  },
  {
    icon: 'upvote',
    title: 'Smart Upvoting',
    body: 'Already reported? Upvote the existing ticket instead of duplicating it and push its priority up.',
  },
];

/* ------------------------------------------------------------------ */
/* What it replaces                                                    */
/* ------------------------------------------------------------------ */

export const problems: string[] = [
  'Complaints lost in WhatsApp groups and phone calls',
  'No proof that a job was actually finished',
  'The same broken light reported fifteen separate times',
  'Residents chasing the office for a status update',
  'Staff sifting through issues that are not theirs',
  'No record of how long anything actually took',
];

/* ------------------------------------------------------------------ */
/* Feature showcase — the detailed, alternating rows                   */
/* ------------------------------------------------------------------ */

export type Feature = {
  id: string;
  eyebrow: string;
  title: string;
  summary: string;
  points: string[];
  icon: IconName;
  visual: ScreenVisual;
};

export type ScreenVisual =
  | 'complaint'
  | 'raise'
  | 'tracking'
  | 'chat'
  | 'upvote'
  | 'announcements'
  | 'staff'
  | 'admin';

export const features: Feature[] = [
  {
    id: 'photo-evidence',
    eyebrow: 'Feature 01',
    title: 'Photo Evidence',
    summary: 'Every ticket carries proof — a "Before" photo when it is raised, an "After" photo when it is closed.',
    points: [
      'Attach a Before image while reporting',
      'Staff upload an After image on resolution',
      'Side-by-side proof of the fix',
      'No more "it was already like that"',
      'Photos stay attached to the ticket history',
      'Works from any phone camera',
    ],
    icon: 'camera',
    visual: 'raise',
  },
  {
    id: 'live-tracking',
    eyebrow: 'Feature 02',
    title: 'Live Status Tracking',
    summary: 'Watch a complaint move through its full lifecycle without ringing the facility office once.',
    points: [
      'Pending → In Progress → Done',
      'Live updates as staff act',
      'Priority tags: Low, Medium, High',
      'Category and location on every ticket',
      'Full timeline of who did what',
      'Nothing quietly disappears',
    ],
    icon: 'pulse',
    visual: 'tracking',
  },
  {
    id: 'threaded-chat',
    eyebrow: 'Feature 03',
    title: 'Threaded Chat',
    summary: 'One conversation, inside the ticket it belongs to — so context is never lost between shifts.',
    points: [
      'Residents and staff reply in-thread',
      'Ask for access times or extra detail',
      'Every message tied to the complaint',
      'No shared numbers, no group chats',
      'Readable history for the admin',
      'Notifications when someone responds',
    ],
    icon: 'chat',
    visual: 'chat',
  },
  {
    id: 'smart-upvoting',
    eyebrow: 'Feature 04',
    title: 'Smart Upvoting',
    summary: 'Shared problems get one ticket and a real priority signal, instead of fifteen duplicates.',
    points: [
      'Search before you report',
      'Upvote an existing complaint',
      'Higher votes surface to the top',
      'Admins see genuine urgency',
      'Staff work one job, not fifteen',
      'Cleaner, faster queues',
    ],
    icon: 'upvote',
    visual: 'upvote',
  },
  {
    id: 'departmental-routing',
    eyebrow: 'Feature 05',
    title: 'Departmental Routing',
    summary: 'Complaints land with the right department automatically — Plumbing, Electrical, Cleaning, Security, HVAC.',
    points: [
      'Category chosen at report time',
      'Routed to the matching department',
      'Staff see only their own queue',
      'No manual triage in the middle',
      'Admins can add departments',
      'Faster first response',
    ],
    icon: 'route',
    visual: 'staff',
  },
  {
    id: 'announcements',
    eyebrow: 'Feature 06',
    title: 'Announcements & Broadcasts',
    summary: 'Water shutdown at 10am? Publish it once and it reaches every resident inside the app.',
    points: [
      'Admin-published notices',
      'Appear as banners in the app',
      'Reaches every resident instantly',
      'No notice-board photographs',
      'Fewer "is anyone else affected?" calls',
      'Kept alongside the complaint feed',
    ],
    icon: 'megaphone',
    visual: 'announcements',
  },
];

/* ------------------------------------------------------------------ */
/* Tailored for everyone — website PRD §Section 4                      */
/* ------------------------------------------------------------------ */

export type Role = {
  id: string;
  title: string;
  audience: string;
  body: string;
  points: string[];
  icon: IconName;
};

export const roles: Role[] = [
  {
    id: 'residents',
    title: 'For Residents',
    audience: 'Tenants, owners and family members',
    body: 'A frictionless way to get things fixed in your home or society — report it, then get on with your day.',
    points: [
      'Raise a complaint with a photo in under a minute',
      'Track it live from Pending to Done',
      'Upvote an issue someone already reported',
      'Chat with the assigned staff in the ticket',
      'See society announcements in one feed',
    ],
    icon: 'home',
  },
  {
    id: 'staff',
    title: 'For Staff',
    audience: 'Plumbing, Electrical, Cleaning, Security, HVAC',
    body: 'A clutter-free workspace that shows only the tasks belonging to your department — nothing else.',
    points: [
      'Only complaints for your category',
      'Update status as the work progresses',
      'Upload the After photo to close it out',
      'Reply to residents without sharing your number',
      'Clear priority order for the day',
    ],
    icon: 'tools',
  },
  {
    id: 'admins',
    title: 'For Admins',
    audience: 'Facility and society managers',
    body: 'A bird’s-eye view of every operation, department and staff member, from one dashboard.',
    points: [
      'Oversight of all complaints across the facility',
      'Manage departments and route categories',
      'Broadcast announcements to every resident',
      'Manage resident and staff accounts',
      'See what is ageing and what is done',
    ],
    icon: 'dashboard',
  },
];

/* ------------------------------------------------------------------ */
/* How it works — website PRD §Section 3                               */
/* ------------------------------------------------------------------ */

export const steps = [
  {
    title: 'Spot the Issue',
    body: 'A leaking tap, a dead corridor light, a lift that keeps stopping — anything that needs fixing.',
    icon: 'search' as IconName,
  },
  {
    title: 'Snap & Submit',
    body: 'Open the app, pick a category and location, add a photo, and submit. It takes under a minute.',
    icon: 'camera' as IconName,
  },
  {
    title: 'Staff Assigned',
    body: 'The relevant department — Plumbing, Electrical, Cleaning — is notified instantly and picks it up.',
    icon: 'route' as IconName,
  },
  {
    title: 'Resolved',
    body: 'Staff fix the issue, upload an "After" photo as proof, and close the ticket. You see it happen live.',
    icon: 'check' as IconName,
  },
];

/* ------------------------------------------------------------------ */
/* Statistics — disabled until the figures are real and verifiable.    */
/* ------------------------------------------------------------------ */

export const stats = {
  enabled: false,
  items: [
    { value: '', label: 'Complaints Resolved' },
    { value: '', label: 'Societies Onboarded' },
    { value: '', label: 'Average First Response' },
    { value: '', label: 'Residents Served' },
  ],
};

/* ------------------------------------------------------------------ */
/* Testimonials — disabled: no invented reviews ship.                  */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
  image: string | null;
  rating: number | null;
};

export const testimonials = {
  enabled: false,
  items: [] as Testimonial[],
};

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    q: 'What is Anytime Help?',
    a: 'Anytime Help is a complaint and issue management platform for residential societies, campuses and organisational facilities. Residents report maintenance issues from a mobile app, staff resolve them from their own queue, and admins oversee everything from a web dashboard.',
  },
  {
    q: 'Who is it for?',
    a: 'Three groups. Residents raise and track complaints. Staff receive the complaints for their department and resolve them. Admins manage departments, accounts, announcements and the full complaint picture.',
  },
  {
    q: 'How do I report a maintenance issue?',
    a: 'Open the app, tap the add button, choose a category such as Plumbing or Electrical, enter the location and a short description, attach a photo, and submit. The ticket reaches the right department immediately.',
  },
  {
    q: 'What does upvoting do?',
    a: 'If a problem has already been reported — a broken street light, a lift out of service — you can upvote the existing complaint instead of creating a duplicate. Upvotes raise its priority and show the admin how many people are affected.',
  },
  {
    q: 'Can I see proof that the work was done?',
    a: 'Yes. Residents attach a "Before" photo when reporting and staff upload an "After" photo when closing the ticket, so every resolution carries visual evidence.',
  },
  {
    q: 'How do staff know which complaints are theirs?',
    a: 'Every complaint is filed under a category that maps to a department. Staff only ever see the complaints routed to their own department, so their queue stays clean.',
  },
  {
    q: 'Is there a web dashboard for admins?',
    a: 'Yes. Admins work from a web dashboard with oversight of all complaints, departments, staff and resident accounts, plus the ability to broadcast announcements to every resident in the app.',
  },
  {
    q: 'Is my data secure?',
    a: 'Accounts are authenticated through Firebase Authentication and your society’s data is only accessible to its own residents, staff and admins. We do not publish security or compliance certifications we have not been independently audited for — if you have specific requirements, contact us and we will answer them directly.',
  },
  {
    q: 'How much does it cost?',
    a: 'Pricing depends on the size of your facility and the number of departments you run. Get in touch and we will put together the right plan for your society or campus.',
  },
  {
    q: 'How do we get started?',
    a: 'Contact us to set up your facility, departments and admin account. Once that is done, residents download the app and can start reporting straight away.',
  },
];

/* ------------------------------------------------------------------ */

export type IconName =
  | 'camera'
  | 'pulse'
  | 'chat'
  | 'upvote'
  | 'route'
  | 'megaphone'
  | 'home'
  | 'tools'
  | 'dashboard'
  | 'search'
  | 'check'
  | 'shield'
  | 'bell'
  | 'clock'
  | 'users'
  | 'sparkle';
