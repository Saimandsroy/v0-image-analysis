"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "./language-context"
import { Award, Clock, ThumbsUp, Users, Zap, Shield } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function WhyChooseUs() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLDivElement | null)[]>([])

  const reasons: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[] = [
    {
      icon: <Award className="w-10 h-10 text-gold" />,
      title: t("15+ Saal Ka Experience", "15+ Years of Experience", "15+ साल का अनुभव"),
      description: t(
        "Humne 15+ saalon mein 200+ se zyada projects complete kiye hain",
        "We've completed over 200 projects in our 15+ years of operation",
        "हमने 15+ सालों में 200+ से ज्यादा प्रोजेक्ट्स पूरे किए हैं",
      ),
    },
    {
      icon: <Clock className="w-10 h-10 text-gold" />,
      title: t("Samay Par Delivery", "On-Time Delivery", "समय पर डिलीवरी"),
      description: t(
        "Hum apne projects ko committed timeline ke andar complete karte hain",
        "We complete our projects within the committed timeline",
        "हम अपने प्रोजेक्ट्स को कमिटेड टाइमलाइन के अंदर पूरा करते हैं",
      ),
    },
    {
      icon: <ThumbsUp className="w-10 h-10 text-gold" />,
      title: t("Quality Materials", "Quality Materials", "क्वालिटी मटेरियल्स"),
      description: t(
        "Hum sirf top-quality materials ka upyog karte hain jo long-lasting results dete hain",
        "We use only top-quality materials that provide long-lasting results",
        "हम सिर्फ टॉप-क्वालिटी मटेरियल्स का उपयोग करते हैं जो लॉन्ग-लास्टिंग रिजल्ट्स देते हैं",
      ),
    },
    {
      icon: <Users className="w-10 h-10 text-gold" />,
      title: t("Expert Team", "Expert Team", "एक्सपर्ट टीम"),
      description: t(
        "Humari team experienced professionals se bani hai jo apne kaam mein mahir hain",
        "Our team consists of experienced professionals who are experts in their field",
        "हमारी टीम एक्सपीरियंस्ड प्रोफेशनल्स से बनी है जो अपने काम में माहिर हैं",
      ),
    },
    {
      icon: <Zap className="w-10 h-10 text-gold" />,
      title: t("Transparent Pricing", "Transparent Pricing", "ट्रांसपेरेंट प्राइसिंग"),
      description: t(
        "Koi hidden charges nahi, sirf clear aur transparent pricing",
        "No hidden charges, just clear and transparent pricing",
        "कोई हिडन चार्जेस नहीं, सिर्फ क्लियर और ट्रांसपेरेंट प्राइसिंग",
      ),
    },
    {
      icon: <Shield className="w-10 h-10 text-gold" />,
      title: t("After-Service Support", "After-Service Support", "आफ्टर-सर्विस सपोर्ट"),
      description: t(
        "Project completion ke baad bhi hum aapke saath hain",
        "We're with you even after project completion",
        "प्रोजेक्ट कंप्लीशन के बाद भी हम आपके साथ हैं",
      ),
    },
  ]

  useEffect(() => {
    itemsRef.current = itemsRef.current.slice(0, reasons.length)

    itemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [reasons.length])

  return (
    <section id="why-choose-us" ref={sectionRef} className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Humein Kyun Chunein?", "Why Choose Us?", "हमें क्यों चुनें?")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t(
            "Awadhi Homes Lucknow ka trusted construction partner hai. Yahan kuch reasons hain ki aap humein kyun chunein:",
            "Awadhi Homes is Lucknow's trusted construction partner. Here are some reasons why you should choose us:",
            "अवधी होम्स लखनऊ का ट्रस्टेड कंस्ट्रक्शन पार्टनर है। यहां कुछ कारण हैं कि आप हमें क्यों चुनें:",
          )}
        </p>

        {/* Responsive horizontal scroll on mobile, grid on desktop */}
        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:overflow-visible">
          {reasons.map((reason, index) => (
            <div
              key={index}
              ref={el => {
                // Always assign, even if el is null (React expects this for cleanup)
                itemsRef.current[index] = el
              }}
              className="bg-cream p-6 rounded-lg shadow-md border border-gold/20 hover:shadow-lg transition-all hover:scale-[1.03] cursor-pointer flex-shrink-0 min-w-[80vw] max-w-xs md:min-w-0 md:max-w-none"
            >
              <div className="bg-maroon/5 p-4 rounded-full w-fit mb-4">{reason.icon}</div>
              <h3 className="text-xl font-serif text-maroon mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
