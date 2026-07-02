import ServiceLayout from '../../components/ServiceLayout';

export default function MetaAds() {
  return (
    <ServiceLayout
      badge="Meta Ads"
      headline="Your ideal customers are on Facebook and Instagram. Most ads miss them entirely."
      subheadline="Meta's advertising platform is one of the most powerful audience-targeting tools in existence, when it's used properly. Most small business campaigns aren't."
      problem="Running a boosted post is not a Meta Ads strategy. Without proper campaign structure, pixel setup, and audience segmentation, you're paying for brand awareness that doesn't convert. We build Meta campaigns engineered for lead generation; from cold audiences through to retargeting sequences that close."
      includes={[
        {
          title: 'Meta Pixel & Conversion API Setup',
          description: 'Accurate event tracking configured for your most important actions, form fills, calls, purchases, so every campaign can be properly measured and optimised.',
        },
        {
          title: 'Audience Research & Segmentation',
          description: 'Custom audiences, lookalike audiences, and interest-based targeting built around your actual customer profiles.',
        },
        {
          title: 'Campaign & Ad Set Architecture',
          description: 'Full-funnel campaign structure: awareness, consideration, and conversion campaigns working in sequence to move prospects toward enquiry.',
        },
        {
          title: 'Creative Strategy & Ad Production',
          description: 'Ad copy and creative briefs for scroll-stopping image and video formats. Guidance on what works for your audience based on real-time data.',
        },
        {
          title: 'Retargeting Sequences',
          description: 'Website visitors, video viewers, and engagement audiences retargeted with tailored messages designed to convert warm prospects into leads.',
        },
        {
          title: 'Performance Reporting & Optimisation',
          description: 'Weekly reporting on cost-per-lead, ROAS, frequency, and audience saturation with ongoing adjustments to maintain efficiency as campaigns mature.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Businesses with visual products or services',
          description: 'Beauty, fitness, food, home improvement; industries where compelling visuals drive desire and action.',
        },
        {
          type: 'Businesses targeting a specific demographic',
          description: 'Meta\'s audience targeting is unmatched for reaching people by age, location, interests, and behaviour patterns.',
        },
        {
          type: 'Businesses with a longer sales cycle',
          description: 'Retargeting keeps your brand front-of-mind through the decision process so when they\'re ready, you\'re the one they remember.',
        },
        {
          type: 'E-commerce and local service businesses',
          description: 'Both benefit from Meta\'s local awareness and product catalogue ad formats that drive foot traffic and online conversions.',
        },
        {
          type: 'Businesses relying only on word of mouth',
          description: 'Meta Ads let you scale referral-level trust by targeting audiences that look exactly like your best existing customers.',
        },
        {
          type: 'Businesses with a budget but no Meta strategy',
          description: 'If you\'ve been spending on Meta without a clear structure or results, we rebuild from the ground up.',
        },
      ]}
      outcomes={[
        'A full-funnel Meta campaign structure generating consistent, trackable leads.',
        'Accurate conversion data that shows exactly which ads and audiences are driving revenue.',
        'A retargeting system that nurtures warm prospects back to your offer without wasted spend.',
        'Progressive improvement in cost-per-lead as audiences are refined and creative is tested.',
        'A paid social channel that complements your search campaigns and builds brand recognition over time.',
      ]}
      relatedServices={[
        { label: 'Google Ads', href: '/services/google-ads' },
        { label: 'Multi-Channel Lead Generation', href: '/services/multi-channel' },
        { label: 'Local SEO', href: '/services/local-seo' },
      ]}
    />
  );
}
