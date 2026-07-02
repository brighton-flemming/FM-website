import ServiceLayout from '../../components/ServiceLayout';

export default function LocalSEO() {
  return (
    <ServiceLayout
      badge="Local SEO"
      headline="Your neighbours are searching. Are they finding you or your competitor?"
      subheadline="Most independent businesses are invisible in local search. Not because their service isn't good, but because their online presence hasn't been built to compete."
      problem="Google's local pack shows three results for almost every 'near me' search. If you're not in those three, you're not in the race. Flemming's Local SEO service fixes the foundational signals Google uses to decide who shows up."
      includes={[
        {
          title: 'Google Business Profile Optimisation',
          description: 'Full audit and rebuild of your GBP: categories, services, attributes, business description, photos, and Q&A; all optimised for your target searches.',
        },
        {
          title: 'Local Citation Building',
          description: 'Consistent NAP (name, address, phone) data across the directories that matter: Google, Apple Maps, Bing Places, Yelp, and industry-specific listings.',
        },
        {
          title: 'On-Page Local SEO',
          description: 'Geo-targeted page titles, meta descriptions, heading structure, and internal linking tuned for local intent keywords.',
        },
        {
          title: 'Review Generation System',
          description: 'A repeatable process to ethically generate authentic customer reviews; the single biggest driver of local map pack ranking.',
        },
        {
          title: 'Map Pack Visibility Strategy',
          description: 'Proximity, prominence, and relevance signals aligned to push your listing into the top 3 results for your highest-value searches.',
        },
        {
          title: 'Monthly Performance Reports',
          description: 'Clear reporting on ranking positions, GBP views, direction requests, calls, and website clicks from local search.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Brick-and-mortar businesses',
          description: 'Restaurants, salons, clinics, gyms; any business that serves customers at a physical location.',
        },
        {
          type: 'Service-area businesses',
          description: 'Tradespeople, cleaners, landscapers, and other businesses that travel to customers within a defined area.',
        },
        {
          type: 'New or relaunched businesses',
          description: 'Getting the local foundations right from day one is far cheaper than fixing years of bad signals.',
        },
        {
          type: 'Businesses losing ground to chains',
          description: 'Big brands invest heavily in local SEO. Independent businesses can compete with the right setup.',
        },
        {
          type: 'Businesses with low review counts',
          description: 'If your competitor has 80 reviews and you have 12, that gap costs you customers every single day.',
        },
        {
          type: 'Businesses not appearing in the map pack',
          description: 'If you\'re ranking on page 2 or not showing in the 3-pack at all, foundational local SEO is your first priority.',
        },
      ]}
      outcomes={[
        'Appear in the Google Map Pack for your most valuable local searches within 90 days.',
        'Increase calls, direction requests, and website visits directly from Google Business Profile.',
        'Build a review system that generates a steady stream of authentic reviews.',
        'Establish consistent citations that reinforce your authority in local search.',
        'Create a local SEO foundation that compounds over time; the longer it runs, the stronger it gets.',
      ]}
      relatedServices={[
        { label: 'Technical SEO', href: '/services/technical-seo' },
        { label: 'Google Ads', href: '/services/google-ads' },
        { label: 'Multi-Channel Lead Generation', href: '/services/multi-channel' },
      ]}
    />
  );
}
