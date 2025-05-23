import Hero from "@/components/hero"
import Services from "@/components/services"
import WhyChooseUs from "@/components/why-choose-us"
import OurProcess from "@/components/our-process"
import Portfolio from "@/components/portfolio"
import Resources from "@/components/resources"
import ClientReviews from "@/components/client-reviews"
import VideoTestimonials from "@/components/video-testimonials"
import FounderMessage from "@/components/founder-message"
import FreeSiteInspection from "@/components/free-site-inspection"
import Blog from "@/components/blog"
import Contact from "@/components/contact"
import MapSection from "@/components/map-section"
import SocialSidebar from "@/components/social-sidebar"
import FloatingEnquiry from "@/components/floating-enquiry"
import StickyCTA from "@/components/sticky-cta"
import LanguageToggle from "@/components/language-toggle"
import LanguageDebug from "@/components/language-debug"
import LanguageTest from "@/components/language-test"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { LanguageProvider } from "@/components/language-context"

export default function Home() {
  return (
    <LanguageProvider>
      <main className="min-h-screen bg-cream">
        <Navigation />
        <LanguageToggle />
        <LanguageDebug />
        <LanguageTest /> {/* Add the test component */}
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <OurProcess />
        <VideoTestimonials />
        <FreeSiteInspection />
        <Resources />
        <ClientReviews />
        <FounderMessage />
        <Blog />
        <MapSection />
        <Contact />
        <Footer />
        <SocialSidebar />
        <FloatingEnquiry />
        <StickyCTA />
      </main>
    </LanguageProvider>
  )
}
