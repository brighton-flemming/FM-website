import ServiceLayout from '../../components/ServiceLayout';

export default function GoogleAds() {
  return (
    <ServiceLayout
      badge="Google Ads"
      headline="Stop paying for clicks that never convert."
      subheadline="Google Ads can be your fastest source of qualified leads or your most expensive disappointment. The difference is in the setup, targeting, and ongoing management."
      problem="Most small business Google Ads accounts are set up wrong and never fixed. Broad match keywords bleed budget on irrelevant searches. Campaigns run with no negative keyword lists. Conversion tracking is broken so nobody knows what's actually working. We fix the fundamentals and build campaigns that generate real leads."
      includes={[
        {
          title: 'Campaign Strategy & Setup',
          description: 'Search campaign architecture built around your highest-intent keywords, with ad groups structured for quality score and relevance.',
        },
        {
          title: 'Keyword Research & Match Types',
          description: 'Thorough keyword research using phrase and exact match to maximise relevance. Comprehensive negative keyword lists to eliminate wasted spend.',
        },
        {
          title: 'Ad Copy & Extensions',
          description: 'Compelling, benefit-led ad copy with structured snippets, callouts, sitelinks, and call extensions configured to improve CTR and ad rank.',
        },
        {
          title: 'Conversion Tracking',
          description: 'Accurate tracking of calls, form submissions, and key page visits because you can\'t optimise what you can\'t measure.',
        },
        {
          title: 'Landing Page Alignment',
          description: 'Review and recommendations on landing pages to ensure message match, fast load times, and clear calls to action that convert clicks into enquiries.',
        },
        {
          title: 'Weekly Performance Optimisation',
          description: 'Regular bid adjustments, search term analysis, A/B testing of ad copy, and performance reporting with clear ROI metrics.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Businesses that need leads now',
          description: 'SEO takes months. Google Ads can deliver qualified enquiries within days of launch when set up correctly.',
        },
        {
          type: 'Businesses with proven offer',
          description: 'Ads amplify what\'s already working. If your offer converts, paid search scales it quickly.',
        },
        {
          type: 'Businesses wasting ad spend',
          description: 'If your campaigns are running but the cost-per-lead feels too high, the issue is almost always structural.',
        },
        {
          type: 'Seasonal or campaign-driven businesses',
          description: 'Google Ads can be turned on and off; perfect for promotions, seasonal pushes, or filling gaps in the diary.',
        },
        {
          type: 'Competitive local markets',
          description: 'In markets where organic rankings take time to build, paid search puts you at the top of the page immediately.',
        },
        {
          type: 'Businesses with existing accounts that underperform',
          description: 'No need to start from scratch. We inherit, audit, and rebuild underperforming accounts.',
        },
      ]}
      outcomes={[
        'A well-structured campaign delivering qualified leads at a predictable, trackable cost-per-acquisition.',
        'Significant reduction in wasted ad spend through negative keyword management and match type discipline.',
        'Clear visibility into which keywords, ads, and landing pages are generating revenue.',
        'Continuously improving performance through ongoing testing and optimisation.',
        'A paid channel that works in tandem with your organic SEO to dominate the search results page.',
      ]}
      relatedServices={[
        { label: 'Meta Ads', href: '/services/meta-ads' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Multi-Channel Lead Generation', href: '/services/multi-channel' },
      ]}
    />
  );
}
