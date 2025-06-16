"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

export default function ClientReviews() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const reviewsRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)

  const reviews = [
    {
      id: 1,
      name: t("Rajesh Kumar", "Rajesh Kumar", "राजेश कुमार"),
      location: t("Gomti Nagar, Lucknow", "Gomti Nagar, Lucknow", "गोमती नगर, लखनऊ"),
      text: t(
        "Awadhi Homes ne humara dream home banaya hai. Unki team professional hai aur quality work karti hai. Humein on-time delivery mili aur budget ke andar kaam hua. Highly recommended!",
        "Awadhi Homes has built our dream home. Their team is professional and does quality work. We got on-time delivery and the work was done within budget. Highly recommended!",
        "अवधी होम्स ने हमारा ड्रीम होम बनाया है। उनकी टीम प्रोफेशनल है और क्वालिटी वर्क करती है। हमें ऑन-टाइम डिलीवरी मिली और बजट के अंदर काम हुआ। हाइली रिकमेंडेड!",
      ),
      rating: 5,
      image: "/images/testimonial-1.png",
      project: t("Villa Construction", "Villa Construction", "विला कंस्ट्रक्शन"),
    },
    {
      id: 2,
      name: t("Priya Sharma", "Priya Sharma", "प्रिया शर्मा"),
      location: t("Hazratganj, Lucknow", "Hazratganj, Lucknow", "हजरतगंज, लखनऊ"),
      text: t(
        "Purane ghar ko naya look dene ke liye Awadhi Homes se better koi nahi. Modern design with traditional touch. Bahut khush hain hum. Team ne har detail pe dhyan diya aur humari requirements ko samjha.",
        "No one is better than Awadhi Homes for giving an old house a new look. Modern design with traditional touch. We are very happy. The team paid attention to every detail and understood our requirements.",
        "पुराने घर को नया लुक देने के लिए अवधी होम्स से बेहतर कोई नहीं। मॉडर्न डिज़ाइन विद ट्रेडिशनल टच। बहुत खुश हैं हम। टीम ने हर डिटेल पे ध्यान दिया और हमारी रिक्वायरमेंट्स को समझा।",
      ),
      rating: 5,
      image: "/images/testimonial-2.png",
      project: t("Home Renovation", "Home Renovation", "होम रेनोवेशन"),
    },
    {
      id: 3,
      name: t("Amit Singh", "Amit Singh", "अमित सिंह"),
      location: t("Indira Nagar, Lucknow", "Indira Nagar, Lucknow", "इंदिरा नगर, लखनऊ"),
      text: t(
        "Commercial property banwane ka experience bahut acha raha. On-time delivery aur transparent pricing. Will work with them again. Awadhi Homes ki team ne project ke har phase mein regular updates diye.",
        "The experience of building a commercial property was very good. On-time delivery and transparent pricing. Will work with them again. The Awadhi Homes team gave regular updates at every phase of the project.",
        "कमर्शियल प्रॉपर्टी बनवाने का एक्सपीरियंस बहुत अच्छा रहा। ऑन-टाइम डिलीवरी और ट्रांसपेरेंट प्राइसिंग। विल वर्क विद देम अगेन। अवधी होम्स की टीम ने प्रोजेक्ट के हर फेज में रेगुलर अपडेट्स दिए।",
      ),
      rating: 4,
      image: "/images/testimonial-3.png",
      project: t("Commercial Building", "Commercial Building", "कमर्शियल बिल्डिंग"),
    },
  ]

  useEffect(() => {
    gsap.fromTo(
      reviewsRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: reviewsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )

    // Auto-rotate reviews
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [reviews.length])

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  return (
    <section id="client-reviews" ref={sectionRef} className="py-10 px-2 sm:py-16 sm:px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-maroon text-center mb-3 sm:mb-4">
          {t("Hamare Khush Grahak", "Our Happy Clients", "हमारे खुश ग्राहक")}
        </h2>
        <p className="text-center text-gray-600 mb-6 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base">
          {t(
            "Dekhiye hamare clients kya kehte hain Awadhi Homes ke baare mein:",
            "See what our clients say about Awadhi Homes:",
            "देखिए हमारे क्लाइंट्स क्या कहते हैं अवधी होम्स के बारे में:",
          )}
        </p>

        <div ref={reviewsRef} className="relative">
          <div className="flex justify-center">
            <div className="bg-cream p-4 sm:p-8 rounded-lg shadow-md border border-gold/20 max-w-3xl w-full relative">
              <div className="absolute -top-7 left-1/2 transform -translate-x-1/2 bg-gold text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-full">
                <div className="flex items-center gap-0.5 sm:gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-3 h-3 sm:w-4 sm:h-4 ${
                        i < reviews[currentIndex].rating ? "text-white fill-white" : "text-white/30"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-gold/30 flex-shrink-0">
                  <Image
                    src={reviews[currentIndex].image || "/placeholder.svg"}
                    alt={reviews[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 w-full">
                  <p className="text-gray-700 italic mb-2 sm:mb-4 text-sm sm:text-base text-center md:text-left">"{reviews[currentIndex].text}"</p>
                  <div className="text-center md:text-left">
                    <h3 className="font-medium text-base sm:text-lg">{reviews[currentIndex].name}</h3>
                    <p className="text-xs sm:text-sm text-gray-600">{reviews[currentIndex].location}</p>
                    <p className="text-xs sm:text-sm text-gold font-medium">{reviews[currentIndex].project}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center mt-4 sm:mt-6 gap-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full ${index === currentIndex ? "bg-gold" : "bg-gray-300"}`}
                    onClick={() => setCurrentIndex(index)}
                    aria-label={`Go to review ${index + 1}`}
                    style={{ minWidth: 12, minHeight: 12 }}
                  ></button>
                ))}
              </div>

              <button
                className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-maroon p-2 rounded-full shadow-md"
                style={{ minWidth: 36, minHeight: 36 }}
                onClick={prevReview}
                aria-label="Previous review"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              <button
                className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-maroon p-2 rounded-full shadow-md"
                style={{ minWidth: 36, minHeight: 36 }}
                onClick={nextReview}
                aria-label="Next review"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
