import { Shield, Users, Award, TrendingUp, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useNavigation } from "@/components/navigation-context"

export function AboutPage() {
  const { setCurrentPage } = useNavigation()
  
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 py-12 text-center bg-white">
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-6 leading-tight">
            <span className="text-gray-900">ABOUT</span>
            <br />
            <span className="text-green-600">EASYPATH COLLECTIONS</span>
          </h1>
          <p className="text-gray-700 text-lg mb-8 leading-relaxed">
            Australia's most trusted debt recovery specialists with over 15 years of proven success.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
          <div className="space-y-6 text-gray-700">
            <p className="leading-relaxed">
              Founded in 2009, EasyPath Collections has grown from a small Melbourne-based agency to Australia's leading
              debt recovery service. We understand that every unpaid debt represents more than just money - it's your
              business's cash flow, growth potential, and financial stability.
            </p>
            <p className="leading-relaxed">
              Our mission is simple: to make debt recovery as straightforward and effective as possible while
              maintaining the highest standards of professionalism and legal compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-12 bg-white">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our Values</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600 text-sm">
                  We operate with complete transparency and ethical practices in every interaction.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                <p className="text-gray-600 text-sm">
                  Our success is measured by your recovered funds and improved cash flow.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Partnership</h3>
                <p className="text-gray-600 text-sm">
                  We work as an extension of your team, protecting your business relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-12 bg-gray-50">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Expertise</h2>
          <div className="grid grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg">
              <Award className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Licensed</h3>
              <p className="text-gray-600 text-sm">Fully licensed debt collection agency</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <CheckCircle className="w-8 h-8 text-green-600 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">ACLA Member</h3>
              <p className="text-gray-600 text-sm">Australian Commercial Law Association</p>
            </div>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Our team of experienced professionals combines legal expertise with advanced technology to deliver superior
            results for our clients across Australia.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 bg-green-600 text-white">
        <div className="max-w-md mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="mb-8 text-green-100">
            Let us help you recover what's rightfully yours with our proven, professional approach.
          </p>
          <Button 
            onClick={() => setCurrentPage('contact')}
            className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 font-medium"
          >
            Get Started Today
          </Button>
        </div>
      </section>
    </>
  )
}
