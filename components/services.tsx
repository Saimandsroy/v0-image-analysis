"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Home, Building2, Building, FileImage } from "lucide-react"
import { useLanguage } from "./language-context"

gsap.registerPlugin(ScrollTrigger)

export default function Services() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const services: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <Building2 className="w-10 h-10 text-gold" />,
      title: t(
        "Complete Home Construction & Finishing",
        "Complete Home Construction & Finishing",
        "संपूर्ण घर निर्माण और फिनिशिंग",
      ),
      description: t(
        "Aapki zameen par sapno ka ghar—foundation se finish tak.",
        "Your dream home on your land—from foundation to finish.",
        "आपकी ज़मीन पर सपनों का घर—फाउंडेशन से फिनिश तक।",
      ),
    },
    {
      icon: <Home className="w-10 h-10 text-gold" />,
      title: t(
        "Interior Design (Old Homes to New Homes)",
        "Interior Design (Old Homes to New Homes)",
        "इंटीरियर डिज़ाइन (पुराने घरों से नए घरों तक)",
      ),
      description: t(
        "Purane makaan ko naya look dena—from classic to contemporary.",
        "Give your old house a new look—from classic to contemporary.",
        "पुराने मकान को नया लुक देना—क्लासिक से कंटेम्पररी तक।",
      ),
    },
   
    {
      icon: <Building className="w-10 h-10 text-gold" />,
      title: t("Commercial Buildings", "Commercial Buildings", "वाणिज्यिक भवन"),
      description: t(
        "Office, shop, ya villa—hum sab banate hain.",
        "Office, shop, or villa—we build them all.",
        "ऑफिस, शॉप, या विला—हम सब बनाते हैं।",
      ),
    },
    {
      icon: <FileImage className="w-10 h-10 text-gold" />,
      title: t("2D/3D Drawing & Layouts", "2D/3D Drawing & Layouts", "2डी/3डी ड्रॉइंग और लेआउट"),
      description: t(
        "Professional nakshaein—2D aur 3D.",
        "Professional blueprints—2D and 3D.",
        "प्रोफेशनल नक्शे—2डी और 3डी।",
      ),
    },
  ]

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, services.length)

    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [services.length])

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-16 px-2 sm:py-20 sm:px-4 md:px-10 bg-cream overflow-x-hidden w-full"
    >
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-maroon text-center mb-8 sm:mb-12">
          {t("Humari Services", "Our Services", "हमारी सेवाएं")}
        </h2>
        <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 md:overflow-visible w-full min-w-0">
          {services.map((service, index) => (
            <div
              key={index}
              ref={el => { cardsRef.current[index] = el }}
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gold/20 hover:shadow-lg transition-all hover:scale-[1.03] cursor-pointer flex-shrink-0 min-w-[90vw] sm:min-w-[60vw] md:min-w-0 max-w-xs md:max-w-none w-full"
            >
              <div className="bg-maroon/5 p-4 rounded-full w-fit mb-4">{service.icon}</div>
              <h3 className="text-xl font-serif text-maroon mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
              <a
                href="https://wa.me/919125197678?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20your%20services."
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4"
                style={{ width: "100%" }}
              >
                <button className="w-full text-gold hover:text-maroon/80 font-medium transition-colors bg-transparent">
                  {t("Aur Jaanein →", "Learn More →", "और जानें →")}
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
