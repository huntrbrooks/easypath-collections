"use client"
import { Navigation } from "@/components/navigation"
import { useNavigation } from "@/components/navigation-context"
import { HomePage } from "@/components/pages/home"
import { AboutPage } from "@/components/pages/about"
import { ServicesPage } from "@/components/pages/services"
import { ContactPage } from "@/components/pages/contact"
import { PortalPage } from "@/components/pages/portal"
import { Footer } from "@/components/shared/footer"

export default function App() {
  const { currentPage } = useNavigation()

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "about":
        return <AboutPage />
      case "services":
        return <ServicesPage />
      case "contact":
        return <ContactPage />
      case "portal":
        return <PortalPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Browser Bar Simulation */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">2:32</span>
          <div className="w-2 h-2 bg-black rounded-full"></div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
          </div>
          <div className="bg-gray-200 rounded px-2 py-1 text-xs">5G</div>
        </div>
      </div>

      {/* Tab Indicator */}
      <div className="bg-white px-4 py-2 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
          <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          <span>1 tab</span>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-gray-100 mx-4 my-2 rounded-full px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-gray-500 rounded-sm"></div>
          </div>
          <span className="text-gray-800 font-medium">easypathcollections.com.au</span>
        </div>
        <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
          <div className="w-3 h-3 border border-gray-500"></div>
        </div>
      </div>

      {/* Green accent line */}
      <div className="h-1 bg-green-600"></div>

      <Navigation />

      <main className="pb-20">{renderPage()}</main>

      <Footer />

      {/* Mobile Browser Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 z-50">
        <div className="flex items-center justify-between">
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 border-l-2 border-b-2 border-gray-400 rotate-45"></div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-4 h-4 border-r-2 border-b-2 border-gray-400 -rotate-45"></div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-6 h-1 bg-gray-400"></div>
            <div className="w-1 h-6 bg-gray-400 ml-1"></div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="w-5 h-4 border-2 border-gray-400 rounded-sm"></div>
          </div>
          <div className="w-8 h-8 flex items-center justify-center">
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="mt-2 h-1 bg-black rounded-full mx-auto" style={{ width: "134px" }}></div>
      </div>
    </div>
  )
}
