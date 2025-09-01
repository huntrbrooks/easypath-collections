import { useNavigation } from "@/components/navigation-context"

export function PrivacyPolicy() {
  const { setCurrentPage } = useNavigation()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              EasyPath Collections Pty Ltd ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our debt collection services or visit our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Name, address, and contact details</li>
                  <li>Financial information and debt details</li>
                  <li>Employment and income information</li>
                  <li>Communication records and correspondence</li>
                  <li>Payment history and transaction records</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium text-gray-800 mb-2">Website Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>IP address and browser information</li>
                  <li>Pages visited and time spent on site</li>
                  <li>Contact form submissions</li>
                  <li>Cookies and tracking data</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>To provide debt collection services</li>
              <li>To communicate with you about your account</li>
              <li>To process payments and maintain records</li>
              <li>To comply with legal and regulatory requirements</li>
              <li>To improve our services and website</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Information Sharing</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We may share your information with:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Our clients (creditors) as required by our agreements</li>
              <li>Legal professionals and courts when necessary</li>
              <li>Credit reporting agencies as permitted by law</li>
              <li>Service providers who assist in our operations</li>
              <li>Government agencies when required by law</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction. These measures include 
              encryption, secure servers, and strict access controls.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Access your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information (subject to legal requirements)</li>
              <li>Opt-out of certain communications</li>
              <li>Lodge a complaint with privacy authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-700">
                <strong>EasyPath Collections Pty Ltd</strong><br />
                Phone: <a href="tel:0429129688" className="text-green-600 hover:underline">0429 129 688</a><br />
                Email: <a href="mailto:contact@easypathcollections.com.au" className="text-green-600 hover:underline">contact@easypathcollections.com.au</a><br />
                Address: Melbourne, Victoria, Australia
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
