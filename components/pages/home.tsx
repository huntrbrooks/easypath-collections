import { Button } from "@/components/ui/button"
import { ChevronDown, Phone, Mail, Clock, Shield, Users, TrendingUp } from "lucide-react"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { BlogPreview } from "@/components/sections/blog-preview"
import { useNavigation } from "@/components/navigation-context"

export function HomePage() {
  const { setCurrentPage } = useNavigation()
  
  return (
    <>
      {/* Main Content */}
      <main className="px-4 py-8 text-center">
        <div className="max-w-md mx-auto">
          <h2 className="text-3xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">DEBT RECOVERY</span>
            <br />
            <span className="text-green-600">SPECIALISTS</span>
          </h2>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Australia's most efficient debt recovery and collection service.
          </p>

          <p className="text-gray-700 text-base mb-8 leading-relaxed">
            With proven expertise and innovative approaches,{" "}
            <span className="text-green-600 font-medium">we make debt recovery simple and effective.</span>
          </p>

          <Button
            onClick={() => {
              const element = document.getElementById('trust-indicators');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-sm font-medium uppercase tracking-wide"
            size="lg"
          >
            Why Choose Us?
            <ChevronDown className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </main>

      {/* Services Section */}
      <section className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Services</h3>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Commercial Debt Recovery</h4>
                <p className="text-gray-600 text-sm">Professional B2B debt collection with proven results</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Compliance</h4>
                <p className="text-gray-600 text-sm">Fully compliant with Australian debt collection laws</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Credit Management</h4>
                <p className="text-gray-600 text-sm">Comprehensive credit control and risk assessment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">How We Work</h3>
          <div className="space-y-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Assessment</h4>
              <p className="text-gray-600 text-sm">We evaluate your case and develop a tailored recovery strategy</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Action</h4>
              <p className="text-gray-600 text-sm">Professional contact and negotiation with your debtors</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Results</h4>
              <p className="text-gray-600 text-sm">Successful debt recovery with regular progress updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators Section */}
      <section id="trust-indicators" className="bg-white px-4 py-12">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-8">Why Choose EasyPath?</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
              <p className="text-gray-600 text-sm">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
              <p className="text-gray-600 text-sm">Success Rate</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <p className="text-gray-600 text-sm">Support Available</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <p className="text-gray-600 text-sm">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Preview Section */}
      <BlogPreview />

      {/* Contact Section */}
      <section className="px-4 py-12 bg-green-600 text-white">
        <div className="max-w-md mx-auto text-center">
          <h3 className="text-2xl font-bold mb-6">Get Started Today</h3>
          <p className="mb-8 text-green-100">
            Ready to recover your outstanding debts? Contact us for a free consultation.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              <a href="tel:0499682389" className="hover:underline">0499 682 389</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-5 h-5" />
              <a href="mailto:contact@easypathcollections.com.au" className="hover:underline">contact@easypathcollections.com.au</a>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-5 h-5" />
              <span>Mon-Fri 9AM-5PM AEST</span>
            </div>
          </div>

          <Button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-medium"
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="px-4 py-8 text-center">
        <h3 className="text-2xl font-medium text-green-600 leading-tight max-w-xs mx-auto">
          Australia's trusted debt recovery partner
        </h3>
      </section>
    </>
  )
}
