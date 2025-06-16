"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { Quote } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

export default function FounderMessage() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    gsap.fromTo(
      contentRef.current,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        delay: 0.2,
      },
    )
  }, [])

  return (
    <section id="Awadhi Homes Mission" ref={sectionRef} className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={imageRef} className="md:w-1/3">
            <div className="relative">
              <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/images/cf38d3ee40e829bc95a1385b086272ad.jpg"
                  alt={t("Awadhi Homes Logo", "Awadhi Homes Logo", "अवधी होम्स लोगो")}
                  fill
                  className="object-contain bg-white"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-lg shadow-lg">
                <p className="font-serif font-bold">
                  {t("Our Mission", "Our Mission", "हमारा मिशन")}
                </p>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif text-maroon mb-6">
              {t("Awadhi Homes Mission", "Awadhi Homes Mission", "अवधी होम्स का मिशन")}
            </h2>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-gold/20" />

              <p className="text-gray-700 mb-4">
                {t(
                  "Awadhi Homes ka mission hai Lucknow aur aas-paas ke logon ko world-class, transparent, aur affordable construction solutions dena. Humara vishwas hai ki har vyakti apne sapno ka ghar deserve karta hai—aur hum us sapne ko reality mein badalne ke liye committed hain.",
                  "The mission of Awadhi Homes is to provide world-class, transparent, and affordable construction solutions to the people of Lucknow and nearby regions. We believe everyone deserves their dream home—and we are committed to turning that dream into reality.",
                  "अवधी होम्स का मिशन है लखनऊ और आसपास के लोगों को वर्ल्ड-क्लास, ट्रांसपेरेंट और अफोर्डेबल कंस्ट्रक्शन सॉल्यूशंस देना। हमारा विश्वास है कि हर व्यक्ति अपने सपनों का घर डिज़र्व करता है—और हम उस सपने को हकीकत में बदलने के लिए प्रतिबद्ध हैं।",
                )}
              </p>

              <p className="text-gray-700 mb-4">
                {t(
                  "Hum quality, integrity, aur timely delivery par focus karte hain. Har project mein hum apne clients ke saath ek strong relationship banate hain, taki unka experience stress-free aur memorable ho.",
                  "We focus on quality, integrity, and timely delivery. In every project, we build a strong relationship with our clients to ensure their experience is stress-free and memorable.",
                  "हम क्वालिटी, इंटीग्रिटी और समय पर डिलीवरी पर फोकस करते हैं। हर प्रोजेक्ट में हम अपने क्लाइंट्स के साथ एक मजबूत रिश्ता बनाते हैं, ताकि उनका अनुभव स्ट्रेस-फ्री और यादगार हो।",
                )}
              </p>

              <p className="text-gray-700">
                {t(
                  "Awadhi Homes ka lakshya hai har ghar ko ek nayi pehchaan dena—modern design, sustainable practices, aur customer satisfaction ke saath.",
                  "Awadhi Homes aims to give every home a new identity—with modern design, sustainable practices, and customer satisfaction.",
                  "अवधी होम्स का लक्ष्य है हर घर को एक नई पहचान देना—मॉडर्न डिज़ाइन, सस्टेनेबल प्रैक्टिसेज़ और कस्टमर सैटिस्फैक्शन के साथ।",
                )}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-1 w-16 bg-gold"></div>
                <p className="font-serif text-maroon font-bold">{t("Awadhi Homes Team", "Awadhi Homes Team", "अवधी होम्स टीम")}</p>
              </div>

              <p className="text-gray-600 text-sm">
                {t("Building Dreams, Creating Trust", "Building Dreams, Creating Trust", "सपनों का निर्माण, विश्वास की रचना")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
  