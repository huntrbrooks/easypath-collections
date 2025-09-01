import { TrendingUp, Shield, Users, FileText, Phone, Gavel, Calculator } from "lucide-react"
import { Button } from "@/components/ui/button"
import { QuoteCalculator } from "@/components/sections/quote-calculator"
import { useNavigation } from "@/components/navigation-context"

export function ServicesPage() {
  const { setCurrentPage } = useNavigation()
  
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-12 text-center bg-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">OUR</span>
            <br />
            <span className="text-green-600">SERVICES</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Comprehensive debt recovery solutions tailored to your business needs.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Core Services</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Commercial Debt Recovery</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Professional B2B debt collection with industry-leading success rates.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Outstanding invoices</li>
                    <li>• Trade debts</li>
                    <li>• Contract disputes</li>
                    <li>• Overdue accounts</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Credit Management</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    Comprehensive credit control and risk assessment services.
                  </p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Credit checks</li>
                    <li>• Risk assessment</li>
                    <li>• Payment terms setup</li>
                    <li>• Ongoing monitoring</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Legal Recovery</h3>
                  <p className="text-gray-600 text-sm mb-4">Full legal support for complex debt recovery cases.</p>
                  <ul className="text-gray-600 text-sm space-y-1">
                    <li>• Legal demand letters</li>
                    <li>• Court proceedings</li>
                    <li>• Judgment enforcement</li>
                    <li>• Asset investigation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Additional Services</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4">
              <FileText className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Skip Tracing</h3>
              <p className="text-gray-600 text-xs">Locate missing debtors</p>
            </div>
            <div className="text-center p-4">
              <Phone className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Phone Recovery</h3>
              <p className="text-gray-600 text-xs">Professional phone collection</p>
            </div>
            <div className="text-center p-4">
              <Gavel className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Litigation</h3>
              <p className="text-gray-600 text-xs">Court action support</p>
            </div>
            <div className="text-center p-4">
              <Calculator className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Settlements</h3>
              <p className="text-gray-600 text-xs">Negotiated payment plans</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Process</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                1
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Initial Assessment</h3>
                <p className="text-gray-600 text-sm">
                  We review your case details and develop a customized recovery strategy.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                2
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Professional Contact</h3>
                <p className="text-gray-600 text-sm">Our team contacts debtors using proven negotiation techniques.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                3
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Regular Updates</h3>
                <p className="text-gray-600 text-sm">
                  You receive detailed progress reports throughout the recovery process.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm">
                4
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Successful Recovery</h3>
                <p className="text-gray-600 text-sm">
                  Funds are recovered and transferred to you promptly upon collection.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Transparent Pricing</h2>
          <div className="bg-green-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-green-600 mb-2">No Recovery, No Fee</h3>
            <p className="text-gray-700 text-sm mb-4">You only pay when we successfully recover your debt.</p>
            <div className="text-2xl font-bold text-gray-900">15-25%</div>
            <p className="text-gray-600 text-sm">Commission on recovered amounts</p>
          </div>
          <p className="text-gray-600 text-sm">
            Rates vary based on debt age, amount, and complexity. Contact us for a personalized quote.
          </p>
        </div>
      </section>

      {/* Quote Calculator */}
      <QuoteCalculator />

      {/* CTA Section */}
      <section className="px-4 py-12 bg-green-600 text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Recover Your Debts?</h2>
          <p className="mb-8 text-green-100">Get started with a free consultation and case assessment today.</p>
          <Button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-medium"
          >
            Get Free Quote
          </Button>
        </div>
      </section>
    </>
  )
}
