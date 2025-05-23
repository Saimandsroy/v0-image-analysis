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
    <section id="founder-message" ref={sectionRef} className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div ref={imageRef} className="md:w-1/3">
            <div className="relative">
              <div className="relative h-80 w-64 rounded-lg overflow-hidden shadow-lg border-4 border-white">
                <Image
                  src="/placeholder.svg?height=400&width=300&text=Founder"
                  alt={t("Imad Khan - Founder", "Imad Khan - Founder", "इमाद खान - फाउंडर")}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold text-white p-4 rounded-lg shadow-lg">
                <p className="font-serif font-bold">
                  {t("15+ Years", "15+ Years", "15+ साल")}
                  <br />
                  {t("Experience", "Experience", "अनुभव")}
                </p>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-serif text-maroon mb-6">
              {t("Founder's Message", "Founder's Message", "फाउंडर का संदेश")}
            </h2>

            <div className="relative">
              <Quote className="absolute -top-6 -left-6 w-12 h-12 text-gold/20" />

              <p className="text-gray-700 mb-4">
                {t(
                  "Namaste, main Imad Khan, Awadhi Homes ka founder. 15+ saal pehle maine ek vision ke saath is company ki shuruaat ki thi - Lucknow mein quality construction services provide karna jo affordable bhi ho aur long-lasting bhi.",
                  "Namaste, I am Imad Khan, the founder of Awadhi Homes. 15+ years ago, I started this company with a vision - to provide quality construction services in Lucknow that are both affordable and long-lasting.",
                  "नमस्ते, मैं इमाद खान, अवधी होम्स का फाउंडर। 15+ साल पहले मैंने एक विज़न के साथ इस कंपनी की शुरुआत की थी - लखनऊ में क्वालिटी कंस्ट्रक्शन सर्विसेज प्रोवाइड करना जो अफोर्डेबल भी हो और लॉन्ग-लास्टिंग भी।",
                )}
              </p>

              <p className="text-gray-700 mb-4">
                {t(
                  "Humne 200+ se zyada projects successfully complete kiye hain aur har client ke saath ek trust-based relationship banaya hai. Hum sirf ghar nahi banate, hum sapne banate hain.",
                  "We have successfully completed more than 200 projects and built a trust-based relationship with every client. We don't just build houses, we build dreams.",
                  "हमने 200+ से ज्यादा प्रोजेक्ट्स सफलतापूर्वक पूरे किए हैं और हर क्लाइंट के साथ एक ट्रस्ट-बेस्ड रिलेशनशिप बनाया है। हम सिर्फ घर नहीं बनाते, हम सपने बनाते हैं।",
                )}
              </p>

              <p className="text-gray-700">
                {t(
                  "Aaj bhi humara mission wohi hai - quality, transparency, aur on-time delivery. Agar aap apne dream home ya commercial project ke baare mein soch rahe hain, toh humse baat karein. Hum aapke vision ko reality mein badalne mein madad karenge.",
                  "Even today, our mission remains the same - quality, transparency, and on-time delivery. If you are thinking about your dream home or commercial project, talk to us. We will help turn your vision into reality.",
                  "आज भी हमारा मिशन वही है - क्वालिटी, ट्रांसपेरेंसी, और ऑन-टाइम डिलीवरी। अगर आप अपने ड्रीम होम या कमर्शियल प्रोजेक्ट के बारे में सोच रहे हैं, तो हमसे बात करें। हम आपके विज़न को रियलिटी में बदलने में मदद करेंगे।",
                )}
              </p>

              <div className="mt-6 flex items-center gap-4">
                <div className="h-1 w-16 bg-gold"></div>
                <p className="font-serif text-maroon font-bold">{t("Imad Khan", "Imad Khan", "इमाद खान")}</p>
              </div>

              <p className="text-gray-600 text-sm">
                {t("Founder & CEO, Awadhi Homes", "Founder & CEO, Awadhi Homes", "फाउंडर और सीईओ, अवधी होम्स")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
