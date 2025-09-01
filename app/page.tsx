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
      <Navigation />

      <main>{renderPage()}</main>

      <Footer />
    </div>
  )
}
