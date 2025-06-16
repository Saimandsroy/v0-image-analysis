"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { gsap } from "gsap"
import { useLanguage } from "./language-context"
import { Phone, MessageCircle } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  const { t, language } = useLanguage()
  const textRef = useRef<HTMLDivElement>(null)
  const taglineRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const [showLeadForm, setShowLeadForm] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const tl = gsap.timeline()

    if (textRef.current && taglineRef.current && ctaRef.current) {
      tl.fromTo(
        textRef.current,
        { opacity: 0, scale: 0.95, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" },
      )
        .fromTo(
          taglineRef.current,
          { opacity: 0, scale: 0.95, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5",
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, scale: 0.95, y: 10 },
          { opacity: 1, scale: 1, y: 0, duration: 1, ease: "power2.out" },
          "-=0.5",
        )
    }
  }, [])

  // Force re-render when language changes
  useEffect(() => {
    // This empty dependency array ensures this effect runs when language changes
  }, [language])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission, like sending to your CRM or email
    console.log("Form submitted:", formData)
    alert(
      t(
        "Thank you! We'll call you back soon.",
        "Thank you! We'll call you back soon.",
        "धन्यवाद! हम आपको जल्द ही कॉल बैक करेंगे।",
      ),
    )
    setFormData({ name: "", phone: "" })
    setShowLeadForm(false)
  }

  // Don't render content until mounted to prevent hydration mismatch
  if (!mounted) {
    return <div className="h-screen bg-cream"></div>
  }

  return (
    <section id="hero" className="relative h-screen w-full">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/IMG_20250616_124915.png.jpg')" }}
      ></div>

      {/* Awadhi Homes top-left */}
      <div
        className="absolute left-6 z-15"
        style={{ top: "90px" }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-sky-500/70 rounded-lg -z-10 transform scale-110"></div>
          <h1
            className="text-3xl md:text-4xl font-serif font-bold px-2 py-1"
            style={{
              color: "#1a202c", // Deep slate/charcoal (Tailwind slate-900)
              textShadow: "0 2px 16px rgba(255,255,255,0.7), 0 1px 0 #FFD700" // Light glow for contrast on gold
            }}
          >
            Awadhi Homes
          </h1>
        </div>
      </div>

      <div className="relative z-20 h-full flex flex-col items-center justify-center text-white px-4 pt-16">
        <div ref={textRef} className="flex w-full justify-between px-4 md:px-20 mb-6">
          {/* Removed the old heading from here */}
        </div>

        <div ref={taglineRef} className="text-center mb-8 max-w-3xl">
          <h2 className="text-xl md:text-3xl font-medium mb-4">
            {t(
              "Lucknow ki shaan, aapka sapno ka ghar",
              "Pride of Lucknow, your dream home",
              "लखनऊ की शान, आपका सपनों का घर",
            )}
          </h2>
          <p className="text-lg md:text-xl opacity-90">
            {t(
              "15+ saal ka experience, 100+ successful projects",
              "15+ years of experience, 100+ successful projects",
              "15+ साल का अनुभव, 100+ सफल प्रोजेक्ट्स",
            )}
          </p>
        </div>

        <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 items-center">
          <Button
            onClick={() => setShowLeadForm(true)}
            className="bg-gold hover:bg-gold/80 text-maroon hover:text-white text-lg px-8 py-6 rounded-md transition-all shadow-md flex items-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            {t("Muft Estimate Lijiye", "Get Your Free Quote", "मुफ्त एस्टिमेट लीजिए")}
          </Button>

          <a href="tel:+919125197678">
            <Button
              variant="outline"
              className="border-gold text-gold hover:bg-gold hover:text-maroon text-lg px-8 py-6 rounded-md transition-all flex items-center gap-2"
            >
              <Phone className="w-5 h-5" />
              {t("Abhi Call Karein", "Call Now", "अभी कॉल करें")}
            </Button>
          </a>
        </div>

      
      {/* Lead capture form modal */}
      {showLeadForm && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
            <button
              onClick={() => setShowLeadForm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✕
            </button>

            <h3 className="text-2xl font-serif text-maroon mb-2">
              {t("Free Estimate Ke Liye", "Get Your Free Estimate", "फ्री एस्टिमेट के लिए")}
            </h3>
            <p className="text-gray-600 mb-4">
              {t(
                "Apna naam aur phone number dein, hum aapko call karenge",
                "Enter your name and phone number, we'll call you back",
                "अपना नाम और फोन नंबर दें, हम आपको कॉल करेंगे",
              )}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("Aapka Naam", "Your Name", "आपका नाम")}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder={t("Naam likhen", "Enter your name", "नाम लिखें")}
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  {t("Phone Number", "Phone Number", "फोन नंबर")}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                  placeholder={t("Phone number likhen", "Enter your phone number", "फोन नंबर लिखें")}
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-4 rounded-md transition-all"
              >
                {t("Submit Karein", "Submit", "सबमिट करें")}
              </Button>
            </form>
          </div>
        </div>
      )}
      </div>
    </section>
  )
}
