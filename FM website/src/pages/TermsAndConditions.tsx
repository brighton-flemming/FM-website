import LegalLayout from '../components/LegalLayout';

function Section({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return (
    <div className="pb-8 mb-8 border-b border-gray-100 last:border-0 last:pb-0 last:mb-0">
      <div className="flex items-start gap-4 mb-3">
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-olive/10 text-olive-dark text-sm font-bold flex items-center justify-center mt-0.5">
          {number}
        </span>
        <h2 className="text-xl font-bold text-olive-dark">{title}</h2>
      </div>
      <div className="pl-12 text-gray-600 leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function TermsAndConditions() {
  return (
    <LegalLayout
      title="Terms & Conditions"
      subtitle="Last updated: April 2026 — Please read these terms carefully before engaging our services."
    >
      <p className="text-gray-500 text-sm mb-10 p-4 bg-amber-50 border border-amber-100 rounded-lg">
        By accessing or using services provided by Flemming Marketing, you agree to be bound by these Terms &amp; Conditions.
        If you do not agree, you may not use our services.
      </p>

      <div className="space-y-0">
        <Section number="1" title="Acceptance of Terms">
          <p>
            These Terms &amp; Conditions apply to all visitors, clients, and anyone who accesses or uses our services.
            By engaging Flemming Marketing, you confirm that you have read, understood, and agreed to these terms.
          </p>
        </Section>

        <Section number="2" title="Services">
          <p>
            Flemming Marketing provides local SEO, Google Business Profile (GBP) management, review generation, and
            related digital marketing services for independent businesses.
          </p>
          <p>
            The scope, deliverables, and pricing for each engagement are defined in the individual service agreement
            or proposal accepted by the client. Any changes to scope must be agreed in writing.
          </p>
        </Section>

        <Section number="3" title="Payment & Billing">
          <p>
            Service fees are billed quarterly (or as otherwise agreed in writing). Payment is due within 14 days of
            invoice. We reserve the right to suspend services in the event of non-payment.
          </p>
          <p>
            All fees are non-refundable unless expressly stated otherwise in the service agreement.
          </p>
        </Section>

        <Section number="4" title="Client Responsibilities">
          <p>Clients are responsible for:</p>
          <ul className="list-none space-y-2 mt-2">
            {[
              'Providing accurate and up-to-date business information',
              'Granting timely access to required platforms and accounts',
              'Reviewing and approving content or materials within agreed timeframes',
              'Notifying us promptly of any changes that may affect campaign performance',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-olive flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-3">Delays caused by the client may affect agreed timelines and results.</p>
        </Section>

        <Section number="5" title="Intellectual Property">
          <p>
            Upon full payment of all fees, clients receive ownership of deliverables specifically created for them
            under the agreement. Flemming Marketing retains ownership of all methodologies, templates, processes,
            and tools used to deliver those services.
          </p>
        </Section>

        <Section number="6" title="Limitation of Liability">
          <p>
            Flemming Marketing shall not be liable for any indirect, incidental, special, or consequential damages
            arising from the use of our services. Our total liability in respect of any claim shall not exceed the
            fees paid by the client in the three months preceding that claim.
          </p>
          <p>
            We do not guarantee specific rankings, traffic volumes, or revenue outcomes, as these depend on
            third-party platforms (including Google) and broader market conditions beyond our control.
          </p>
        </Section>

        <Section number="7" title="Confidentiality">
          <p>
            Both parties agree to treat all non-public information shared during the engagement as strictly
            confidential. This obligation survives the termination of the service agreement.
          </p>
        </Section>

        <Section number="8" title="Termination">
          <p>
            Either party may terminate a service agreement with 30 days' written notice. Upon termination, the
            client retains access to all owned deliverables produced up to that point. Fees for work completed
            to date remain payable.
          </p>
          <p>
            We reserve the right to terminate immediately in cases of material breach of these terms or sustained
            non-payment.
          </p>
        </Section>

        <Section number="9" title="Governing Law">
          <p>
            These Terms &amp; Conditions are governed by and construed in accordance with applicable law. Any
            disputes shall first be addressed through good-faith negotiation. If unresolved, disputes may be
            referred to binding arbitration.
          </p>
        </Section>

        <Section number="10" title="Changes to These Terms">
          <p>
            We reserve the right to update these Terms &amp; Conditions at any time. Continued use of our services
            after changes are posted constitutes acceptance of the revised terms. We will notify active clients of
            material changes via email with reasonable notice.
          </p>
        </Section>

        <Section number="11" title="Contact">
          <p>
            If you have questions about these Terms &amp; Conditions, please reach out:
          </p>
          <div className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-100">
            <p className="font-semibold text-olive-dark">Flemming Marketing</p>
            <a
              href="mailto:flemmingmarketing@gmail.com"
              className="text-olive-dark hover:underline"
            >
              flemmingmarketing@gmail.com
            </a>
          </div>
        </Section>
      </div>
    </LegalLayout>
  );
}