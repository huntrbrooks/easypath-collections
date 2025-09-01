import { useNavigation } from "@/components/navigation-context"

export function TermsOfService() {
  const { setCurrentPage } = useNavigation()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using the services of EasyPath Collections Pty Ltd ("we," "our," or "us"), 
              you agree to be bound by these Terms of Service. If you do not agree to these terms, 
              please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Services Description</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              EasyPath Collections provides professional debt collection services including:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Commercial debt recovery</li>
              <li>Credit management and reporting</li>
              <li>Legal recovery services</li>
              <li>Skip tracing and debtor location</li>
              <li>Payment processing and account management</li>
              <li>Client portal access and reporting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Client Responsibilities</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a client, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Provide accurate and complete information about debts</li>
              <li>Maintain proper documentation and records</li>
              <li>Cooperate with our collection efforts</li>
              <li>Pay agreed-upon fees and commissions</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Maintain confidentiality of sensitive information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Fees and Payment</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Our fees are based on successful debt recovery and are clearly outlined in our service agreements. 
                Payment terms and commission structures vary by service type and debt amount.
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-2">Standard Fee Structure:</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Commercial debts: 15-25% of recovered amount</li>
                  <li>• Legal recovery: Additional legal costs may apply</li>
                  <li>• Skip tracing: Fixed fee per successful location</li>
                  <li>• Credit management: Monthly subscription fees</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Privacy and Data Protection</h2>
            <p className="text-gray-700 leading-relaxed">
              We are committed to protecting your privacy and handling personal information in accordance 
              with Australian privacy laws. Please refer to our Privacy Policy for detailed information 
              about how we collect, use, and protect your data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Legal Compliance</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Our services are conducted in compliance with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Australian Consumer Law</li>
              <li>Privacy Act 1988 (Cth)</li>
              <li>Debt collection licensing requirements</li>
              <li>Industry codes of conduct</li>
              <li>State and federal regulations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              EasyPath Collections will not be liable for any indirect, incidental, special, or consequential 
              damages arising from the use of our services. Our liability is limited to the amount of fees 
              paid for the specific service in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Termination</h2>
            <p className="text-gray-700 leading-relaxed">
              Either party may terminate our service agreement with written notice. Upon termination, 
              we will complete any ongoing collection activities and provide a final report. 
              Outstanding fees remain due and payable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Dispute Resolution</h2>
            <p className="text-gray-700 leading-relaxed">
              Any disputes arising from these terms or our services will be resolved through mediation 
              or arbitration in accordance with Australian law. We are committed to fair and professional 
              resolution of all disputes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact Information</h2>
            <p className="text-gray-700 leading-relaxed">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>EasyPath Collections Pty Ltd</strong><br />
                Phone: <a href="tel:0429129688" className="text-green-600 hover:underline">0429 129 688</a><br />
                Email: <a href="mailto:contact@easypathcollections.com.au" className="text-green-600 hover:underline">contact@easypathcollections.com.au</a><br />
                Address: Melbourne, Victoria, Australia<br />
                ABN: 12 345 678 901 | License: DC123456
              </p>
            </div>
          </section>

          {/* Back Button */}
          <div className="pt-8 border-t border-gray-200">
            <button
              onClick={() => setCurrentPage('home')}
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
