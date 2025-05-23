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

export default function HomeConstructionPage() {
  const { t } = useLanguage()

  // Set page title for SEO
  useEffect(() => {
    document.title = t(
      "Home Construction Services in Lucknow | Awadhi Homes",
      "Home Construction Services in Lucknow | Awadhi Homes",
      "लखनऊ में होम कंस्ट्रक्शन सर्विसेज | अवधी होम्स",
    )
  }, [t])

  const serviceData = {
    title: {
      hinglish: "Home Construction Services",
      english: "Home Construction Services",
      hindi: "होम कंस्ट्रक्शन सर्विसेज",
    },
    description: {
      hinglish:
        "Awadhi Homes aapke sapno ke ghar ko reality mein badalne ke liye complete home construction services provide karta hai. Foundation se lekar finishing tak, hum har step pe quality aur excellence ensure karte hain.",
      english:
        "Awadhi Homes provides complete home construction services to turn your dream home into reality. From foundation to finishing, we ensure quality and excellence at every step.",
      hindi:
        "अवधी होम्स आपके सपनों के घर को रियलिटी में बदलने के लिए कंप्लीट होम कंस्ट्रक्शन सर्विसेज प्रोवाइड करता है। फाउंडेशन से लेकर फिनिशिंग तक, हम हर स्टेप पे क्वालिटी और एक्सीलेंस एन्श्योर करते हैं।",
    },
    image: "/images/portfolio-1.png",
    features: [
      {
        hinglish: "15+ saal ka experience aur 200+ successful projects",
        english: "15+ years of experience and 200+ successful projects",
        hindi: "15+ साल का अनुभव और 200+ सफल प्रोजेक्ट्स",
      },
      {
        hinglish: "High-quality materials aur latest construction techniques",
        english: "High-quality materials and latest construction techniques",
        hindi: "हाई-क्वालिटी मटेरियल्स और लेटेस्ट कंस्ट्रक्शन टेक्निक्स",
      },
      {
        hinglish: "Customized designs jo aapke requirements ko fulfill karte hain",
        english: "Customized designs that fulfill your requirements",
        hindi: "कस्टमाइज्ड डिज़ाइन्स जो आपके रिक्वायरमेंट्स को फुलफिल करते हैं",
      },
      {
        hinglish: "Transparent pricing aur no hidden charges",
        english: "Transparent pricing and no hidden charges",
        hindi: "ट्रांसपेरेंट प्राइसिंग और नो हिडन चार्जेस",
      },
      {
        hinglish: "On-time delivery aur project completion",
        english: "On-time delivery and project completion",
        hindi: "ऑन-टाइम डिलीवरी और प्रोजेक्ट कंप्लीशन",
      },
      {
        hinglish: "After-construction support aur maintenance services",
        english: "After-construction support and maintenance services",
        hindi: "आफ्टर-कंस्ट्रक्शन सपोर्ट और मेंटेनेंस सर्विसेज",
      },
    ],
    cta: {
      hinglish: "Free Quote Paayen",
      english: "Get a Free Quote",
      hindi: "फ्री कोट पाएं",
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
