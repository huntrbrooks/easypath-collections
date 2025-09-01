import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Mitchell",
    company: "Mitchell Construction Pty Ltd",
    content: "EasyPath Collections recovered $45,000 in outstanding debts for us within 3 months. Their professional approach maintained our client relationships while getting results.",
    rating: 5,
    amount: "$45,000",
    timeframe: "3 months"
  },
  {
    name: "David Chen",
    company: "Chen Industries",
    content: "After struggling with unpaid invoices for over a year, EasyPath Collections got our money back in just 6 weeks. Highly recommended!",
    rating: 5,
    amount: "$28,500",
    timeframe: "6 weeks"
  },
  {
    name: "Lisa Thompson",
    company: "Thompson Marketing Solutions",
    content: "Professional, efficient, and results-driven. They recovered debts we thought were impossible to collect. No recovery, no fee - exactly as promised.",
    rating: 5,
    amount: "$12,800",
    timeframe: "4 weeks"
  }
]

export function TestimonialsSection() {
  return (
    <section className="px-4 py-12 bg-white">
      <div className="max-w-md mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">What Our Clients Say</h2>
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="ml-auto text-right">
                  <div className="text-lg font-bold text-green-600">{testimonial.amount}</div>
                  <div className="text-xs text-gray-500">recovered in {testimonial.timeframe}</div>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4 italic">"{testimonial.content}"</p>
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-xs text-gray-600">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <div className="bg-green-50 p-6 rounded-lg">
            <h3 className="font-bold text-green-600 mb-2">Our Track Record</h3>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-green-600">95%</div>
                <div className="text-xs text-gray-600">Success Rate</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">$2.3M</div>
                <div className="text-xs text-gray-600">Recovered This Year</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">1000+</div>
                <div className="text-xs text-gray-600">Happy Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
