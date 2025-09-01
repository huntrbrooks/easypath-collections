import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Company Info */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="flex flex-col gap-1 mr-3">
                <div className="w-6 h-0.5 bg-green-600"></div>
                <div className="w-6 h-0.5 bg-green-600"></div>
                <div className="w-6 h-0.5 bg-green-600"></div>
              </div>
              <span className="font-bold text-lg">EASYPATH COLLECTIONS</span>
            </div>
            <p className="text-gray-400 text-sm mb-6">
              Australia's trusted debt recovery specialists with over 15 years of proven success.
            </p>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-sm">1300 EASYPATH (1300 327 972)</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="text-sm">info@easypathcollections.com.au</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-sm">Melbourne, Victoria - Serving All Australia</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Clock className="w-4 h-4 text-green-600" />
              <span className="text-sm">Mon-Fri 9:00 AM - 5:00 PM AEST</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-6 mb-8 text-center">
            <div>
              <h3 className="font-semibold text-white mb-3">Services</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Commercial Debt Recovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Credit Management
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Legal Recovery
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Skip Tracing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-3">Company</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Client Portal
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-green-400 transition-colors">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-4 mb-8">
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-green-600 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          {/* Certifications */}
          <div className="text-center mb-8">
            <div className="flex justify-center gap-6 mb-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">ACLA</span>
                </div>
                <p className="text-xs text-gray-400">Member</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold text-xs">LIC</span>
                </div>
                <p className="text-xs text-gray-400">Licensed</p>
              </div>
            </div>
            <p className="text-xs text-gray-500">
              Licensed debt collection agency | Australian Commercial Law Association member
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 px-4 py-6">
        <div className="max-w-md mx-auto text-center">
          <div className="flex flex-col gap-2 text-xs text-gray-500">
            <p>© 2024 EasyPath Collections Pty Ltd. All rights reserved.</p>
            <p>ABN: 12 345 678 901 | Debt Collection License: DC123456</p>
            <div className="flex justify-center gap-4 mt-2">
              <a href="#" className="hover:text-green-400 transition-colors">
                Terms of Service
              </a>
              <span>|</span>
              <a href="#" className="hover:text-green-400 transition-colors">
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#" className="hover:text-green-400 transition-colors">
                Complaints
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
