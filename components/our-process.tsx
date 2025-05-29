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

        {/* Modern decorated timeline */}
        <div className="relative flex flex-col items-center">
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-gold/70 to-gold/10 rounded-full z-0 hidden md:block"></div>
          <div className="flex flex-col gap-12 w-full z-10">
            {steps.map((step, index) => (
              <div
                key={index}
                ref={el => { stepsRef.current[index] = el }}
                className={`
                  flex flex-col md:flex-row items-center md:items-stretch gap-6 md:gap-0 relative
                  ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}
                `}
              >
                {/* Timeline dot and connector */}
                <div className="hidden md:flex flex-col items-center w-1/12 relative">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center shadow-lg border-4 border-white z-10">
                    <span className="text-white font-bold text-lg">{step.number}</span>
                  </div>
                  {index !== steps.length - 1 && (
                    <div className="flex-1 w-1 bg-gold/20 mt-1"></div>
                  )}
                </div>

                {/* Card */}
                <div className={`
                  w-full md:w-5/12 bg-white rounded-xl shadow-xl border border-gold/20 p-6 md:p-8
                  flex flex-col justify-center
                  ${index % 2 === 0 ? "md:ml-12" : "md:mr-12"}
                  hover:scale-[1.03] transition-transform duration-300
                `}>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center text-gold font-bold text-lg shadow">
                      {step.number}
                    </div>
                    <h3 className="text-xl md:text-2xl font-serif text-maroon">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 text-base md:text-lg">{step.description}</p>
                </div>

                {/* Connector for mobile */}
                <div className="md:hidden flex flex-col items-center w-full my-2">
                  {index !== steps.length - 1 && (
                    <div className="w-1 h-8 bg-gold/20"></div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
