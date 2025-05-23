"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"
import { Phone, MessageCircle, ArrowUp } from "lucide-react"

export default function StickyCTA() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 bg-white shadow-lg border-t border-gray-200 z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="hidden md:block">
          <p className="font-medium text-maroon">
            {t("Abhi Call Karein: +91 9125197678", "Call Now: +91 9125197678", "अभी कॉल करें: +91 9125197678")}
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:+919125197678" className="md:hidden">
            <Button
              size="sm"
              className="bg-maroon hover:bg-maroon/80 text-white rounded-full w-10 h-10 p-0 flex items-center justify-center"
            >
              <Phone className="w-5 h-5" />
            </Button>
          </a>

          <a href="https://wa.me/919125197678?text=I%20want%20to%20know%20more%20about%20your%20construction%20services">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700 text-white rounded-full md:rounded-md md:px-4 w-10 h-10 md:w-auto md:h-auto p-0 md:py-2 flex items-center justify-center md:gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:inline">{t("WhatsApp", "WhatsApp", "व्हाट्सएप")}</span>
            </Button>
          </a>

          <a href="#contact">
            <Button
              size="sm"
              className="bg-gold hover:bg-gold/80 text-maroon rounded-full md:rounded-md md:px-4 w-10 h-10 md:w-auto md:h-auto p-0 md:py-2 flex items-center justify-center md:gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="hidden md:inline">{t("Get Quote", "Get Quote", "कोट प्राप्त करें")}</span>
            </Button>
          </a>

          <button
            onClick={scrollToTop}
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-full w-10 h-10 p-0 flex items-center justify-center"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  )
}
