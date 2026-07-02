import ServiceLayout from '../../components/ServiceLayout';

export default function TechnicalSEO() {
  return (
    <ServiceLayout
      badge="Technical SEO"
      headline="Google can't rank what it can't read."
      subheadline="Brilliant content and perfect local signals mean nothing if your site has crawl errors, slow load times, or broken indexation. Technical SEO is the infrastructure everything else runs on."
      problem="Most small business websites have never had a proper technical audit. Issues accumulate silently; duplicate pages, missing schema, poor Core Web Vitals, crawl traps, and each one chips away at your ability to rank. We find them. We fix them."
      includes={[
        {
          title: 'Full Technical Site Audit',
          description: 'Comprehensive crawl of your entire website to surface crawl errors, broken links, redirect chains, duplicate content, and indexation issues.',
        },
        {
          title: 'Core Web Vitals Optimisation',
          description: 'LCP, CLS, and INP improvements targeting Google\'s page experience signals; faster load times, stable layouts, and responsive interactions.',
        },
        {
          title: 'Crawlability & Indexation',
          description: 'robots.txt, XML sitemaps, canonical tags, and noindex directives configured so Google crawls and indexes exactly what it should.',
        },
        {
          title: 'Structured Data / Schema Markup',
          description: 'Implementation of LocalBusiness, Service, FAQ, and Review schema; giving Google rich context and increasing eligibility for rich results.',
        },
        {
          title: 'Mobile-First Optimisation',
          description: 'Google indexes the mobile version of your site first. We ensure your mobile experience is fast, usable, and complete.',
        },
        {
          title: 'Site Architecture Review',
          description: 'Internal linking structure, URL hierarchy, and page depth analysis to ensure link equity flows where it matters most.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Businesses that rank on page 2 or 3',
          description: 'Often the gap between page 2 and page 1 is unresolved technical issues that suppress rankings rather than just content.',
        },
        {
          type: 'Recently redesigned websites',
          description: 'Website redesigns frequently destroy technical SEO. A post-launch audit is essential to catch what was broken in the transition.',
        },
        {
          type: 'Sites with slow load times',
          description: 'Page speed is a direct ranking factor and a conversion killer. Every second of delay costs you visitors and revenue.',
        },
        {
          type: 'Businesses with multiple locations',
          description: 'Multi-location sites are especially prone to duplicate content and canonicalisation issues that dilute ranking power.',
        },
        {
          type: 'E-commerce or service-heavy sites',
          description: 'Complex site structures accumulate technical debt quickly. Regular audits keep performance sharp.',
        },
        {
          type: 'Anyone planning a site migration',
          description: 'Migrating without a technical SEO plan can wipe out years of ranking gains overnight.',
        },
      ]}
      outcomes={[
        'A clean, fully crawlable site that Google can confidently index and rank.',
        'Measurable improvements in Core Web Vitals scores across key pages.',
        'Structured data that unlocks rich results (star ratings, FAQs, local info) in the SERPs.',
        'Resolved crawl errors and duplicate content issues that were suppressing rankings.',
        'A technical baseline that accelerates the impact of all other SEO activity.',
      ]}
      relatedServices={[
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'AI SEO', href: '/services/ai-seo' },
        { label: 'Multi-Channel Lead Generation', href: '/services/multi-channel' },
      ]}
    />
  );
}
