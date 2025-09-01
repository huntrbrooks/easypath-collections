"use client"

import { Menu, X } from "lucide-react"
import { useState } from "react"
import { useNavigation } from "@/components/navigation-context"

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { currentPage, setCurrentPage } = useNavigation()

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "services", label: "Services" },
    { id: "contact", label: "Contact" },
    { id: "portal", label: "Client Portal" },
  ]

  return (
    <>
      {/* Header */}
      <header className="bg-white px-4 py-4 flex items-center justify-between relative">
        <div className="flex items-center">
          {/* Logo with green lines */}
          <div className="flex flex-col gap-1 mr-3">
            <div className="w-8 h-1 bg-green-600"></div>
            <div className="w-8 h-1 bg-green-600"></div>
            <div className="w-8 h-1 bg-green-600"></div>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">EASYPATH COLLECTIONS</h1>
            <p className="text-xs text-gray-600 uppercase tracking-wide">
              Professional Debt Recovery & Financial Solutions
            </p>
          </div>
        </div>
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className="z-50 relative"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          {isMenuOpen ? <X className="w-6 h-6 text-green-600" /> : <Menu className="w-6 h-6 text-green-600" />}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-40 pt-20" id="mobile-menu">
          <nav className="px-4 py-8" role="navigation" aria-label="Main navigation">
            <ul className="space-y-6" role="list">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      setCurrentPage(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`block w-full text-left text-xl font-medium py-3 px-4 rounded-lg transition-colors ${
                      currentPage === item.id ? "bg-green-600 text-white" : "text-gray-900 hover:bg-green-50"
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  )
}
