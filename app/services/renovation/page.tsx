"use client"

import { useEffect } from "react"
import { useLanguage } from "@/components/language-context"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import LanguageToggle from "@/components/language-toggle"
import ServiceLanding from "@/components/service-landing"
import ClientReviews from "@/components/client-reviews"
import FreeSiteInspection from "@/components/free-site-inspection"
import Contact from "@/components/contact"
import FloatingEnquiry from "@/components/floating-enquiry"
import StickyCTA from "@/components/sticky-cta"

export default function RenovationPage() {
  const { t } = useLanguage()

  // Set page title for SEO
  useEffect(() => {
    document.title = t(
      "Home Renovation Services in Lucknow | Awadhi Homes",
      "Home Renovation Services in Lucknow | Awadhi Homes",
      "लखनऊ में होम रेनोवेशन सर्विसेज | अवधी होम्स",
    )
  }, [t])

  const serviceData = {
    title: {
      hinglish: "Home Renovation Services",
      english: "Home Renovation Services",
      hindi: "होम रेनोवेशन सर्विसेज",
    },
    description: {
      hinglish:
        "Purane ghar ko naya roop dein Awadhi Homes ke saath. Hum aapke existing home ko modern amenities aur fresh design ke saath transform karte hain, jisse aapka ghar naya aur stylish dikhe.",
      english:
        "Give your old house a new look with Awadhi Homes. We transform your existing home with modern amenities and fresh design, making your house look new and stylish.",
      hindi:
        "पुराने घर को नया रूप दें अवधी होम्स के साथ। हम आपके एक्जिस्टिंग होम को मॉडर्न एमेनिटीज और फ्रेश डिज़ाइन के साथ ट्रांसफॉर्म करते हैं, जिससे आपका घर नया और स्टाइलिश दिखे।",
    },
    image: "/images/portfolio-3.png",
    features: [
      {
        hinglish: "Partial ya complete renovation options",
        english: "Partial or complete renovation options",
        hindi: "पार्शियल या कंप्लीट रेनोवेशन ऑप्शन्स",
      },
      {
        hinglish: "Heritage structures ko preserve karte hue modern amenities add karna",
        english: "Adding modern amenities while preserving heritage structures",
        hindi: "हेरिटेज स्ट्रक्चर्स को प्रिज़र्व करते हुए मॉडर्न एमेनिटीज ऐड करना",
      },
      {
        hinglish: "Space optimization aur functional design",
        english: "Space optimization and functional design",
        hindi: "स्पेस ऑप्टिमाइज़ेशन और फंक्शनल डिज़ाइन",
      },
      {
        hinglish: "Energy-efficient upgrades aur sustainable solutions",
        english: "Energy-efficient upgrades and sustainable solutions",
        hindi: "एनर्जी-एफिशिएंट अपग्रेड्स और सस्टेनेबल सॉल्यूशन्स",
      },
      {
        hinglish: "Minimal disruption to daily life during renovation",
        english: "Minimal disruption to daily life during renovation",
        hindi: "रेनोवेशन के दौरान डेली लाइफ में मिनिमल डिसरप्शन",
      },
      {
        hinglish: "Cost-effective solutions jo aapke budget mein fit ho",
        english: "Cost-effective solutions that fit your budget",
        hindi: "कॉस्ट-इफेक्टिव सॉल्यूशन्स जो आपके बजट में फिट हो",
      },
    ],
    cta: {
      hinglish: "Renovation Quote Paayen",
      english: "Get Renovation Quote",
      hindi: "रेनोवेशन कोट पाएं",
    },
  }

  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <LanguageToggle />

      <ServiceLanding service={serviceData} />

      <ClientReviews />

      <FreeSiteInspection />

      <Contact />

      <Footer />

      <FloatingEnquiry />
      <StickyCTA />
    </div>
  )
}
