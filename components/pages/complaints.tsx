import { useNavigation } from "@/components/navigation-context"

export function Complaints() {
  const { setCurrentPage } = useNavigation()

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Complaints & Disputes</h1>
          <p className="text-lg text-gray-600">We're committed to resolving your concerns professionally and promptly</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Commitment</h2>
            <p className="text-gray-700 leading-relaxed">
              EasyPath Collections is committed to providing professional, ethical, and compliant debt collection 
              services. We take all complaints seriously and are dedicated to resolving issues promptly and fairly. 
              We operate in accordance with Australian Consumer Law and industry best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">How to Make a Complaint</h2>
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-blue-900 mb-3">Step 1: Contact Us Directly</h3>
                <p className="text-blue-800 mb-4">
                  We encourage you to contact us first to discuss your concern. Most issues can be resolved quickly 
                  through direct communication.
                </p>
                <div className="space-y-2 text-blue-800">
                  <p><strong>Phone:</strong> <a href="tel:0429129688" className="underline">0429 129 688</a></p>
                  <p><strong>Email:</strong> <a href="mailto:contact@easypathcollections.com.au" className="underline">contact@easypathcollections.com.au</a></p>
                  <p><strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM AEST</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-green-900 mb-3">Step 2: Formal Complaint Process</h3>
                <p className="text-green-800 mb-4">
                  If your concern cannot be resolved informally, you may submit a formal written complaint.
                </p>
                <div className="space-y-2 text-green-800">
                  <p>• Submit in writing via email or post</p>
                  <p>• Include your name, contact details, and account reference</p>
                  <p>• Clearly describe the issue and desired resolution</p>
                  <p>• Provide any relevant documentation</p>
                </div>
              </div>

              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-medium text-orange-900 mb-3">Step 3: External Dispute Resolution</h3>
                <p className="text-orange-800 mb-4">
                  If you're not satisfied with our response, you may escalate to external dispute resolution bodies.
                </p>
                <div className="space-y-2 text-orange-800">
                  <p>• Australian Financial Complaints Authority (AFCA)</p>
                  <p>• Office of the Australian Information Commissioner (OAIC)</p>
                  <p>• State-based consumer protection agencies</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Response Timeframes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Initial Response</h3>
                <p className="text-gray-700">
                  We will acknowledge your complaint within <strong>2 business days</strong> and provide 
                  an initial response within <strong>5 business days</strong>.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Final Resolution</h3>
                <p className="text-gray-700">
                  We aim to resolve all complaints within <strong>30 calendar days</strong>. 
                  Complex cases may require additional time, and we will keep you informed of progress.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Common Complaint Types</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-medium text-gray-800 mb-2">Communication Issues</h3>
                <p className="text-gray-700 text-sm">
                  Concerns about frequency, timing, or manner of communication
                </p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-medium text-gray-800 mb-2">Payment Disputes</h3>
                <p className="text-gray-700 text-sm">
                  Disagreements about payment amounts, arrangements, or processing
                </p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h3 className="font-medium text-gray-800 mb-2">Privacy Concerns</h3>
                <p className="text-gray-700 text-sm">
                  Issues related to personal information handling or data protection
                </p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h3 className="font-medium text-gray-800 mb-2">Service Quality</h3>
                <p className="text-gray-700 text-sm">
                  Concerns about the quality or effectiveness of our services
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Rights</h2>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <p className="text-yellow-800 mb-4">
                As a consumer, you have the right to:
              </p>
              <ul className="list-disc list-inside text-yellow-800 space-y-2 ml-4">
                <li>Be treated fairly and respectfully</li>
                <li>Receive clear and accurate information</li>
                <li>Have your complaint investigated thoroughly</li>
                <li>Receive a written response to your complaint</li>
                <li>Escalate unresolved complaints to external bodies</li>
                <li>Not be subject to harassment or intimidation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">EasyPath Collections</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Phone:</strong> <a href="tel:0429129688" className="text-green-600 hover:underline">0429 129 688</a></p>
                  <p><strong>Email:</strong> <a href="mailto:contact@easypathcollections.com.au" className="text-green-600 hover:underline">contact@easypathcollections.com.au</a></p>
                  <p><strong>Address:</strong> Melbourne, Victoria, Australia</p>
                  <p><strong>Hours:</strong> Mon-Fri 9:00 AM - 5:00 PM AEST</p>
                </div>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-medium text-gray-800 mb-3">External Bodies</h3>
                <div className="space-y-2 text-gray-700 text-sm">
                  <p><strong>AFCA:</strong> 1800 931 678</p>
                  <p><strong>OAIC:</strong> 1300 363 992</p>
                  <p><strong>Consumer Affairs Victoria:</strong> 1300 558 181</p>
                </div>
              </div>
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

