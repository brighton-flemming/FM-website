import ServiceLayout from '../../components/ServiceLayout';

export default function AiSEO() {
  return (
    <ServiceLayout
      badge="AI SEO"
      headline="Google isn't the only search engine that matters anymore."
      subheadline="ChatGPT, Perplexity, Google's AI Overviews, and Bing Copilot are increasingly the first place people get answers. If your business isn't visible in those answers, you're missing an entirely new channel of discovery."
      problem="Traditional SEO optimises for blue-link rankings. AI SEO optimises for something different: being the source that AI models cite, summarise, and recommend. That requires entity-based content architecture, structured data, topical authority, and content that's built to be understood by language models."
      includes={[
        {
          title: 'AI Visibility Audit',
          description: 'We test how your business and key topics appear across ChatGPT, Perplexity, Google AI Overviews, and Bing Copilot; identifying gaps and citation opportunities.',
        },
        {
          title: 'Entity-Based SEO',
          description: 'Establishing your business as a recognised entity in Google\'s Knowledge Graph: consistent brand signals, Wikipedia-style entity associations, and structured data that disambiguates who you are.',
        },
        {
          title: 'LLM-Optimised Content',
          description: 'Content written in formats that language models prefer: clear definitions, factual statements, structured Q&A, and direct answers to high-intent queries in your category.',
        },
        {
          title: 'Topical Authority Building',
          description: 'A content cluster strategy that establishes your site as the authoritative source on your core service topics, signalling depth and expertise to both traditional and AI search.',
        },
        {
          title: 'Schema for AI Comprehension',
          description: 'Advanced structured data markup (FAQ, HowTo, Speakable, Article, LocalBusiness) that makes your content machine-readable and citation-eligible.',
        },
        {
          title: 'AI Overview & Featured Snippet Targeting',
          description: 'Identification and optimisation of content with the highest potential to be surfaced in Google\'s AI Overviews, People Also Ask, and position zero features.',
        },
      ]}
      whoItsFor={[
        {
          type: 'Forward-thinking business owners',
          description: 'If you want to be ahead of the next major shift in search behaviour rather than catching up to it, AI SEO is where to invest now.',
        },
        {
          type: 'Businesses in information-heavy categories',
          description: 'Legal, medical, financial, and professional services; categories where people ask AI tools for recommendations and explanations.',
        },
        {
          type: 'Businesses already doing traditional SEO',
          description: 'AI SEO doesn\'t replace traditional SEO. It extends it. If your technical and on-page foundations are solid, this is the next layer.',
        },
        {
          type: 'Businesses with expertise worth showcasing',
          description: 'AI models cite authoritative, well-structured content. If you have genuine expertise, AI SEO helps you get recognised for it.',
        },
        {
          type: 'Service businesses fighting for awareness',
          description: 'Being mentioned in an AI answer for "best [service] in [city]" is the new equivalent of a front-page ranking.',
        },
        {
          type: 'Businesses building long-term digital authority',
          description: 'Entity recognition and topical authority take time to build, but once established, they\'re extremely difficult for competitors to replicate.',
        },
      ]}
      outcomes={[
        'Your business cited or mentioned in AI-generated answers for relevant search queries.',
        'Improved visibility in Google AI Overviews, featured snippets, and People Also Ask results.',
        'A content architecture that signals topical authority to both search engines and large language models.',
        'Entity establishment in Google\'s Knowledge Graph; a foundational signal for long-term organic authority.',
        'A future-proofed SEO strategy that performs across traditional search, AI search, and voice search channels.',
      ]}
      relatedServices={[
        { label: 'Technical SEO', href: '/services/technical-seo' },
        { label: 'Local SEO', href: '/services/local-seo' },
        { label: 'Multi-Channel Lead Generation', href: '/services/multi-channel' },
      ]}
    />
  );
}
