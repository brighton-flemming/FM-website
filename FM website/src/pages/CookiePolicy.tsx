import LegalLayout from '../components/LegalLayout';

interface CookieTypeProps {
  label: string;
  badge: string;
  badgeColor: string;
  description: string;
  examples?: string[];
  canDisable: boolean;
}

function CookieType({ label, badge, badgeColor, description, examples, canDisable }: CookieTypeProps) {
  return (
    <div className="p-5 rounded-xl border border-gray-100 bg-gray-50 space-y-3">
      <div className="flex items-center justify-between flex-wrap gap-2">
        <h3 className="font-bold text-olive-dark text-base">{label}</h3>
        <div className="flex items-center gap-2">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${badgeColor}`}>
            {badge}
          </span>
          <span className={`text-xs px-2.5 py-0.5 rounded-full ${canDisable ? 'bg-gray-200 text-gray-600' : 'bg-red-50 text-red-600'}`}>
            {canDisable ? 'Can be disabled' : 'Required'}
          </span>
        </div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      {examples && (
        <div className="flex flex-wrap gap-1.5 pt-1">
          {examples.map((ex) => (
            <span key={ex} className="text-xs bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded">
              {ex}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

export default function CookiePolicy() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Last updated: April 2026 — This policy explains what cookies we use and why."
    >
      <div className="space-y-10">

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">What Are Cookies?</h2>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device when you visit a website. They allow the site to
            remember information about your visit such as your language preference or whether you've already
            seen a notice, making your next visit easier and the site more useful to you.
          </p>
          <p className="text-gray-600 leading-relaxed mt-3">
            Cookies are not programs and cannot carry viruses or access information on your device beyond what
            the website itself has stored.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Cookies We Use</h2>
          <div className="space-y-4">
            <CookieType
              label="Essential / Strictly Necessary"
              badge="Always Active"
              badgeColor="bg-olive/10 text-olive-dark"
              description="These cookies are required for the website to function and cannot be switched off. They are set in response to actions you take — such as submitting a form or navigating between pages."
              examples={['Session cookies', 'Security tokens', 'Load balancing']}
              canDisable={false}
            />
            <CookieType
              label="Analytics & Performance"
              badge="Optional"
              badgeColor="bg-blue-50 text-blue-700"
              description="These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data allows us to improve the site and fix issues."
              examples={['Google Analytics', 'Page view tracking', 'Error logging']}
              canDisable={true}
            />
            <CookieType
              label="Preference / Functional"
              badge="Optional"
              badgeColor="bg-blue-50 text-blue-700"
              description="These cookies allow the website to remember choices you make and provide enhanced, more personalised features. They may be set by us or by third-party providers whose services we use."
              examples={['Language preference', 'Region settings']}
              canDisable={true}
            />
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Third-Party Cookies</h2>
          <p className="text-gray-600 leading-relaxed">
            Some functionality on our site such as embedded videos or social sharing buttons is provided by
            third parties. These services may set their own cookies subject to their own privacy policies.
            We have no control over third-party cookies and encourage you to review the relevant policies:
          </p>
          <div className="mt-4 grid sm:grid-cols-2 gap-3">
            {[
              { name: 'Google Analytics', url: 'https://policies.google.com/privacy' },
              { name: 'Wistia Video', url: 'https://wistia.com/privacy' },
            ].map(({ name, url }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-lg border border-gray-100 bg-gray-50 hover:border-olive/30 hover:bg-olive/5 transition-colors group"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-olive-dark">{name}</span>
                <span className="text-xs text-gray-400 group-hover:text-olive-dark">Privacy Policy →</span>
              </a>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Managing Your Cookies</h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            You have the right to accept or refuse non-essential cookies at any time. Be aware that disabling
            some cookies may affect the functionality of our website.
          </p>
          <div className="space-y-4">
            <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center text-olive-dark font-bold text-sm">1</div>
              <div>
                <p className="font-semibold text-olive-dark mb-1">Browser settings</p>
                <p className="text-sm text-gray-600">
                  All major browsers allow you to refuse or delete cookies through their settings. Check your
                  browser's help section for specific instructions (Chrome, Firefox, Safari, Edge).
                </p>
              </div>
            </div>
            <div className="flex gap-4 p-4 rounded-xl border border-gray-100 bg-gray-50">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-olive/10 flex items-center justify-center text-olive-dark font-bold text-sm">2</div>
              <div>
                <p className="font-semibold text-olive-dark mb-1">Google Analytics opt-out</p>
                <p className="text-sm text-gray-600">
                  Install the{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-olive-dark underline hover:no-underline"
                  >
                    Google Analytics Opt-out Add-on
                  </a>{' '}
                  for your browser to prevent your data from being collected by Google Analytics.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Changes to This Policy</h2>
          <p className="text-gray-600 leading-relaxed">
            We may update this Cookie Policy to reflect changes in technology, legislation, or our services.
            Any changes will be posted here with a revised date. We encourage you to review this page
            periodically to stay informed.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Questions?</h2>
          <p className="text-gray-600 mb-4">
            If you have any questions about how we use cookies, please contact us:
          </p>
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="font-semibold text-olive-dark">Flemming Marketing</p>
            <a href="mailto:flemmingmarketing@gmail.com" className="text-olive-dark hover:underline">
              flemmingmarketing@gmail.com
            </a>
          </div>
        </section>

      </div>
    </LegalLayout>
  );
}
