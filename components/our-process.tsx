"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "./language-context"

gsap.registerPlugin(ScrollTrigger)

export default function OurProcess() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<(HTMLDivElement | null)[]>([])

  const steps = [
    {
      number: "01",
      title: t("Free Consultation", "Free Consultation", "फ्री कंसल्टेशन"),
      description: t(
        "Humse contact karein aur apne project ke baare mein baat karein. Hum aapko free consultation denge.",
        "Contact us and discuss your project. We'll provide you with a free consultation.",
        "हमसे संपर्क करें और अपने प्रोजेक्ट के बारे में बात करें। हम आपको फ्री कंसल्टेशन देंगे।",
      ),
    },
    {
      number: "02",
      title: t("Site Visit & Planning", "Site Visit & Planning", "साइट विजिट और प्लानिंग"),
      description: t(
        "Humari team aapke site ka visit karegi aur detailed planning karegi.",
        "Our team will visit your site and do detailed planning.",
        "हमारी टीम आपके साइट का विजिट करेगी और डिटेल्ड प्लानिंग करेगी।",
      ),
    },
    {
      number: "03",
      title: t("Design & Estimation", "Design & Estimation", "डिज़ाइन और एस्टिमेशन"),
      description: t(
        "Aapke requirements ke hisaab se design aur cost estimation taiyar karenge.",
        "We'll prepare designs and cost estimation according to your requirements.",
        "आपके रिक्वायरमेंट्स के हिसाब से डिज़ाइन और कॉस्ट एस्टिमेशन तैयार करेंगे।",
      ),
    },
    {
      number: "04",
      title: t("Agreement & Approval", "Agreement & Approval", "एग्रीमेंट और अप्रूवल"),
      description: t(
        "Final design aur cost approval ke baad, hum agreement sign karenge.",
        "After final design and cost approval, we'll sign the agreement.",
        "फाइनल डिज़ाइन और कॉस्ट अप्रूवल के बाद, हम एग्रीमेंट साइन करेंगे।",
      ),
    },
    {
      number: "05",
      title: t("Construction", "Construction", "कंस्ट्रक्शन"),
      description: t(
        "Humari expert team high-quality materials ke saath construction start karegi.",
        "Our expert team will start construction with high-quality materials.",
        "हमारी एक्सपर्ट टीम हाई-क्वालिटी मटेरियल्स के साथ कंस्ट्रक्शन स्टार्ट करेगी।",
      ),
    },
    {
      number: "06",
      title: t("Quality Check & Handover", "Quality Check & Handover", "क्वालिटी चेक और हैंडओवर"),
      description: t(
        "Final quality check ke baad, hum aapko project handover karenge.",
        "After the final quality check, we'll hand over the project to you.",
        "फाइनल क्वालिटी चेक के बाद, हम आपको प्रोजेक्ट हैंडओवर करेंगे।",
      ),
    },
  ]

  useEffect(() => {
    stepsRef.current = stepsRef.current.slice(0, steps.length)

    stepsRef.current.forEach((step, index) => {
      gsap.fromTo(
        step,
        { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [steps.length])

  return (
    <section id="our-process" ref={sectionRef} className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Humara Process", "Our Process", "हमारा प्रोसेस")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t(
            "Hum aapke dream project ko reality mein badalne ke liye ek simple aur transparent process follow karte hain:",
            "We follow a simple and transparent process to turn your dream project into reality:",
            "हम आपके ड्रीम प्रोजेक्ट को रियलिटी में बदलने के लिए एक सिंपल और ट्रांसपेरेंट प्रोसेस फॉलो करते हैं:",
          )}
        </p>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gold/30 transform -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={(el) => (stepsRef.current[index] = el)}
                className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 relative`}
              >
                {/* Timeline dot */}
                <div className="absolute left-1/2 top-0 w-6 h-6 bg-gold rounded-full transform -translate-x-1/2 hidden md:block"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gold/20">
                    <div className="text-4xl font-bold text-gold/30 mb-2">{step.number}</div>
                    <h3 className="text-xl font-serif text-maroon mb-2">{step.title}</h3>
                    <p className="text-gray-700">{step.description}</p>
                  </div>
                </div>

                {/* Empty div for spacing on the other side */}
                <div className="md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
