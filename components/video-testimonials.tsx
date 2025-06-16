"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "./language-context"
import { Play } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface VideoTestimonial {
  id: number
  name: string
  location: string
  videoUrl: string
  thumbnail: string
  description: string
}

export default function VideoTestimonials() {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: t("Rajesh Kumar", "Rajesh Kumar", "राजेश कुमार"),
      location: t("Gomti Nagar, Lucknow", "Gomti Nagar, Lucknow", "गोमती नगर, लखनऊ"),
      videoUrl: "https://example.com/video1.mp4",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video+Testimonial+1",
      description: t(
        "Awadhi Homes ne humara dream home banaya hai. Unki team professional hai aur quality work karti hai.",
        "Awadhi Homes has built our dream home. Their team is professional and does quality work.",
        "अवधी होम्स ने हमारा ड्रीम होम बनाया है। उनकी टीम प्रोफेशनल है और क्वालिटी वर्क करती है।",
      ),
    },
    {
      id: 2,
      name: t("Priya Sharma", "Priya Sharma", "प्रिया शर्मा"),
      location: t("Hazratganj, Lucknow", "Hazratganj, Lucknow", "हजरतगंज, लखनऊ"),
      videoUrl: "https://example.com/video2.mp4",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video+Testimonial+2",
      description: t(
        "Purane ghar ko naya look dene ke liye Awadhi Homes se better koi nahi. Modern design with traditional touch.",
        "No one is better than Awadhi Homes for giving an old house a new look. Modern design with traditional touch.",
        "पुराने घर को नया लुक देने के लिए अवधी होम्स से बेहतर कोई नहीं। मॉडर्न डिज़ाइन विद ट्रेडिशनल टच।",
      ),
    },
    {
      id: 3,
      name: t("Amit Singh", "Amit Singh", "अमित सिंह"),
      location: t("Indira Nagar, Lucknow", "Indira Nagar, Lucknow", "इंदिरा नगर, लखनऊ"),
      videoUrl: "https://example.com/video3.mp4",
      thumbnail: "/placeholder.svg?height=400&width=600&text=Video+Testimonial+3",
      description: t(
        "Commercial property banwane ka experience bahut acha raha. On-time delivery aur transparent pricing.",
        "The experience of building a commercial property was very good. On-time delivery and transparent pricing.",
        "कमर्शियल प्रॉपर्टी बनवाने का एक्सपीरियंस बहुत अच्छा रहा। ऑन-टाइम डिलीवरी और ट्रांसपेरेंट प्राइसिंग।",
      ),
    },
  ]

  useEffect(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      },
    )
  }, [])

  const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@AwadhiHomes"

  const handleVideoClick = () => {
    window.open(YOUTUBE_CHANNEL_URL, "_blank")
  }

  return (
    <section id="video-testimonials" ref={sectionRef} className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Video Testimonials", "Video Testimonials", "वीडियो प्रशंसापत्र")}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {t("Hamare clients ke anubhav suniye", "Listen to our clients' experiences", "हमारे क्लाइंट्स के अनुभव सुनिए")}
        </p>

        <div className="flex gap-8 overflow-x-auto pb-4 md:grid md:grid-cols-3 md:gap-8 md:overflow-visible w-full min-w-0">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow flex-shrink-0 min-w-[90vw] sm:min-w-[60vw] md:min-w-0 max-w-xs md:max-w-none w-full"
              onClick={handleVideoClick}
            >
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
                ></div>
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gold/80 flex items-center justify-center">
                    <Play className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg">{testimonial.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{testimonial.location}</p>
                <p className="text-gray-700 line-clamp-3">{testimonial.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
