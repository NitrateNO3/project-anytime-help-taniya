/**
 * Navigation. "How It Works", "For Everyone", "Download" and "FAQ" are
 * sections of the landing page rather than standalone pages, so they resolve
 * to anchors — every link here points at something that actually exists.
 */
export const mainNav = [
  { label: 'Home', href: '/' },
  { label: 'Features', href: '/features/' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'For Everyone', href: '/#for-everyone' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/contact/' },
] as const;

export const footerNav = [
  {
    heading: 'Product',
    links: [
      { label: 'Features', href: '/features/' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'For Everyone', href: '/#for-everyone' },
      { label: 'Download App', href: '/#download' },
    ],
  },
  {
    heading: 'Company',
    links: [
      { label: 'About', href: '/about/' },
      { label: 'Contact', href: '/contact/' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    heading: 'Legal',
    links: [
      { label: 'Privacy Policy', href: '/privacy/' },
      { label: 'Terms of Service', href: '/terms/' },
      { label: 'Cookie Policy', href: '/cookies/' },
    ],
  },
] as const;
