"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Star } from "lucide-react"
import { useLanguage } from "./language-context"

gsap.registerPlugin(ScrollTrigger)

export default function Testimonials() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const testimonialsRef = useRef<(HTMLDivElement | null)[]>([])

  const testimonials = [
    {
      id: 1,
      name: t("Rajesh Kumar", "Rajesh Kumar", "राजेश कुमार"),
      location: t("Gomti Nagar, Lucknow", "Gomti Nagar, Lucknow", "गोमती नगर, लखनऊ"),
      text: t(
        "Awadhi Homes ne humara dream home banaya hai. Unki team professional hai aur quality work karti hai. Highly recommended!",
        "Awadhi Homes has built our dream home. Their team is professional and does quality work. Highly recommended!",
        "अवधी होम्स ने हमारा ड्रीम होम बनाया है। उनकी टीम प्रोफेशनल है और क्वालिटी वर्क करती है। हाइली रिकमेंडेड!",
      ),
      rating: 5,
      image: "/images/testimonial-1.png",
    },
    {
      id: 2,
      name: t("Priya Sharma", "Priya Sharma", "प्रिया शर्मा"),
      location: t("Hazratganj, Lucknow", "Hazratganj, Lucknow", "हजरतगंज, लखनऊ"),
      text: t(
        "Purane ghar ko naya look dene ke liye Awadhi Homes se better koi nahi. Modern design with traditional touch. Bahut khush hain hum.",
        "No one is better than Awadhi Homes for giving an old house a new look. Modern design with traditional touch. We are very happy.",
        "पुराने घर को नया लुक देने के लिए अवधी होम्स से बेहतर कोई नहीं। मॉडर्न डिज़ाइन विद ट्रेडिशनल टच। बहुत खुश हैं हम।",
      ),
      rating: 5,
      image: "/images/testimonial-2.png",
    },
    {
      id: 3,
      name: t("Amit Singh", "Amit Singh", "अमित सिंह"),
      location: t("Indira Nagar, Lucknow", "Indira Nagar, Lucknow", "इंदिरा नगर, लखनऊ"),
      text: t(
        "Commercial property banwane ka experience bahut acha raha. On-time delivery aur transparent pricing. Will work with them again.",
        "The experience of building a commercial property was very good. On-time delivery and transparent pricing. Will work with them again.",
        "कमर्शियल प्रॉपर्टी बनवाने का एक्सपीरियंस बहुत अच्छा रहा। ऑन-टाइम डिलीवरी और ट्रांसपेरेंट प्राइसिंग। विल वर्क विद देम अगेन।",
      ),
      rating: 4,
      image: "/images/testimonial-3.png",
    },
  ]

  useEffect(() => {
    testimonialsRef.current = testimonialsRef.current.slice(0, testimonials.length)

    testimonialsRef.current.forEach((testimonial, index) => {
      gsap.fromTo(
        testimonial,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: testimonial,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        },
      )
    })
  }, [testimonials.length])

  return (
    <section id="testimonials" ref={sectionRef} className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Hamare Khush Grahak", "Our Happy Clients", "हमारे खुश ग्राहक")}
        </h2>
        <p className="text-center text-gray-600 mb-12">{t("हमारे खुश ग्राहक", "Our Happy Clients", "हमारे खुश ग्राहक")}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              ref={el => {
                if (el) testimonialsRef.current[index] = el
              }}
              className="bg-cream p-6 rounded-lg shadow-md border border-gold/10"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium text-lg">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                  <div className="flex mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < testimonial.rating ? "text-gold fill-gold" : "text-gray-300"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-700">{testimonial.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-maroon/5 rounded-lg max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gold/20 p-2 rounded-full">
              <Star className="w-6 h-6 text-gold fill-gold" />
            </div>
            <div>
              <h3 className="font-medium">4.8/5 Google Reviews</h3>
              <p className="text-sm text-gray-600">
                {t("Based on 120+ reviews", "Based on 120+ reviews", "120+ रिव्यूज के आधार पर")}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-white px-4 py-2 rounded border border-gray-200">
              <p className="text-sm font-medium">{t("ISO Certified", "ISO Certified", "आईएसओ प्रमाणित")}</p>
            </div>
            <div className="bg-white px-4 py-2 rounded border border-gray-200">
              <p className="text-sm font-medium">
                {t("15+ Years Experience", "15+ Years Experience", "15+ वर्षों का अनुभव")}
              </p>
            </div>
            <div className="bg-white px-4 py-2 rounded border border-gray-200">
              <p className="text-sm font-medium">
                {t("200+ Projects Completed", "200+ Projects Completed", "200+ प्रोजेक्ट्स पूरे किए")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
