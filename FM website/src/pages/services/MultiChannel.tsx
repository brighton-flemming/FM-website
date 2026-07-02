import ServiceLayout from '../../components/ServiceLayout';

export default function MultiChannel() {
  return (
    <ServiceLayout
      badge="Multi-Channel Lead Generation"
      headline="One channel is a dependency. A system is a business asset."
      subheadline="Most businesses rely on a single source of leads, and when that source dries up, so does revenue. Multi-channel lead generation builds the infrastructure to attract, capture, and convert prospects from multiple directions simultaneously."
      problem="SEO takes time. Ads cost money. Social builds slowly. Each channel alone is fragile. Combined into a unified system, with each channel filling the gaps of the others, they compound. We audit where your leads are coming from, identify where the biggest gaps are, and build a coordinated strategy that turns multiple channels into a reliable, predictable pipeline."
      includes={[
        {
          title: 'Lead Generation Audit',
          description: 'A full review of your current lead sources, channel performance, cost-per-lead, and conversion rates; identifying exactly where the biggest growth opportunities lie.',
        },
        {
          title: 'Channel Strategy Design',
          description: 'A tailored, prioritised plan combining the right mix of Local SEO, Technical SEO, Google Ads, Meta Ads, and AI SEO based on your market, budget, and goals.',
        },
        {
          title: 'SEO Foundation',
          description: 'Local and technical SEO creating a compounding organic lead stream; the channel that keeps delivering long after the initial investment.',
        },
        {
          title: 'Paid Search & Social',
          description: 'Google Ads and Meta Ads campaigns running in parallel to deliver immediate leads while organic channels build authority.',
        },
        {
          title: 'Funnel & Conversion Optimisation',
          description: 'Landing pages, forms, and CTAs aligned across every channel; ensuring that traffic from each source converts at the highest possible rate.',
        },
        {
          title: 'Unified Reporting Dashboard',
          description: 'One clear view of all channels: where leads come from, what they cost, which convert best, and where to reinvest for maximum return.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Businesses with inconsistent lead flow',
          description: 'If some months are great and others are slow, you\'re likely relying on one channel that cycles. A multi-channel system stabilises that.',
        },
        {
          type: 'Businesses ready to scale',
          description: 'Once your offer is proven and your operations can handle growth, a coordinated multi-channel strategy is the most effective way to scale leads.',
        },
        {
          type: 'Businesses coming off a heavy ad dependency',
          description: 'If rising ad costs are squeezing margins, adding organic channels reduces CPL and builds resilience into your pipeline.',
        },
        {
          type: 'Businesses in competitive local markets',
          description: 'When competitors are visible across multiple touchpoints, being present in only one channel is a structural disadvantage.',
        },
        {
          type: 'Businesses that have tried individual channels without success',
          description: 'Channels in isolation often underperform. The same budget applied within a coordinated system typically delivers dramatically better results.',
        },
        {
          type: 'Ambitious independents who want to dominate their area',
          description: 'Total local market visibility; Google Maps, paid search, social, AI answers, is what makes a brand feel unavoidable.',
        },
      ]}
      outcomes={[
        'A diversified, resilient lead pipeline that doesn\'t depend on any single channel.',
        'Predictable monthly lead volume with clear visibility into cost-per-lead across each channel.',
        'Organic SEO providing a compounding, lower-cost lead source alongside paid channels.',
        'A unified reporting system that removes guesswork and allows confident reinvestment decisions.',
        'Long-term competitive dominance built on multiple overlapping signals; nearly impossible for competitors to match quickly.',
      ]}
      relatedServices={[
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Google Ads', href: '/services/google-ads' },
        { label: 'Meta Ads', href: '/services/meta-ads' },
        { label: 'Technical SEO', href: '/services/technical-seo' },
        { label: 'AI SEO', href: '/services/ai-seo' },
      ]}
    />
  );
}
