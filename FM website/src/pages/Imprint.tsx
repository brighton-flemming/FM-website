import { Mail } from 'lucide-react';
import LegalLayout from '../components/LegalLayout';

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="p-5 rounded-xl border border-gray-100 bg-gray-50">
      <p className="text-xs font-semibold text-olive/80 uppercase tracking-wider mb-2">{label}</p>
      <div className="text-gray-700">{children}</div>
    </div>
  );
}

export default function Imprint() {
  return (
    <LegalLayout
      title="Imprint"
      subtitle="Legal disclosure pursuant to applicable information and transparency obligations."
    >
      <div className="space-y-10">

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Service Provider</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <InfoBlock label="Trading Name">
              <p className="font-semibold text-olive-dark text-lg">Flemming Marketing</p>
            </InfoBlock>
            <InfoBlock label="Contact">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-olive" />
                <a
                  href="mailto:flemmingmarketing@gmail.com"
                  className="text-olive-dark hover:underline"
                >
                  flemmingmarketing@gmail.com
                </a>
              </div>
            </InfoBlock>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Responsible for Content</h2>
          <p className="text-gray-600 leading-relaxed">
            Responsible for the content of this website in accordance with applicable law:
          </p>
          <div className="mt-4 p-5 rounded-xl border border-gray-100 bg-gray-50">
            <p className="font-semibold text-olive-dark">Flemming Marketing</p>
            <p className="text-sm text-gray-500 mt-1">
              <a href="mailto:flemmingmarketing@gmail.com" className="text-olive-dark hover:underline">
                flemmingmarketing@gmail.com
              </a>
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Disclaimer</h2>
          <div className="space-y-5">

            <div className="border-l-4 border-olive/30 pl-5">
              <h3 className="font-semibold text-olive-dark mb-2">Liability for Content</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                The contents of this website have been prepared with the utmost care. However, we cannot guarantee
                the accuracy, completeness, or timeliness of the information provided. As a service provider, we
                are responsible for our own content in accordance with applicable law. We are not, however,
                obligated to monitor third-party information transmitted through our platform or to investigate
                circumstances that may indicate illegal activity. Obligations to remove or block the use of
                information under general law remain unaffected.
              </p>
            </div>

            <div className="border-l-4 border-olive/30 pl-5">
              <h3 className="font-semibold text-olive-dark mb-2">Liability for Links</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our website contains links to external third-party websites. We have no influence over the content
                of those sites and therefore accept no liability for them. Each linked site is the responsibility
                of its respective provider or operator. All external links were checked for legal violations at
                the time of linking; no violations were found. Continuous monitoring of linked external content
                without specific evidence of a legal infringement is not feasible or required.
              </p>
            </div>

            <div className="border-l-4 border-olive/30 pl-5">
              <h3 className="font-semibold text-olive-dark mb-2">Copyright</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Content and works on this website created by Flemming Marketing are subject to copyright law.
                Reproduction, processing, distribution, or any form of commercialisation of such material beyond
                the scope of copyright law requires prior written consent from its respective author or creator.
                Downloads and copies of this site are permitted only for private, non-commercial use.
              </p>
            </div>

          </div>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Online Dispute Resolution (ODR)</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            The European Commission provides a platform for online dispute resolution (ODR). The platform can
            be found at:{' '}
            <a
              href="https://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-olive-dark underline hover:no-underline break-all"
            >
              https://ec.europa.eu/consumers/odr
            </a>
          </p>
          <p className="text-sm text-gray-600 leading-relaxed mt-3">
            We are not obliged or willing to participate in dispute resolution proceedings before a consumer
            arbitration board.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-olive-dark mb-4">Contact</h2>
          <p className="text-gray-600 mb-4">
            For any legal enquiries related to this imprint:
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
