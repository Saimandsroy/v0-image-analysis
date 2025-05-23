"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useLanguage } from "./language-context"
import { Play, Pause, Volume2, VolumeX, X } from "lucide-react"

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
  const [activeVideo, setActiveVideo] = useState<number | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const videoTestimonials: VideoTestimonial[] = [
    {
      id: 1,
      name: t("Rajesh Kumar", "Rajesh Kumar", "राजेश कुमार"),
      location: t("Gomti Nagar, Lucknow", "Gomti Nagar, Lucknow", "गोमती नगर, लखनऊ"),
      videoUrl: "https://example.com/video1.mp4", // Replace with actual video URL
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
      videoUrl: "https://example.com/video2.mp4", // Replace with actual video URL
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
      videoUrl: "https://example.com/video3.mp4", // Replace with actual video URL
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

  const handleVideoClick = (id: number) => {
    setActiveVideo(id)
    setIsPlaying(true)

    // In a real implementation, you would play the video
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error playing video:", error)
      })
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Error playing video:", error)
        })
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => handleVideoClick(testimonial.id)}
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

        {/* Video Modal */}
        {activeVideo !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl">
              <button
                className="absolute -top-12 right-0 text-white hover:text-gold"
                onClick={() => setActiveVideo(null)}
              >
                <X className="w-8 h-8" />
              </button>

              <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                {/* Replace with actual video */}
                <video
                  ref={videoRef}
                  className="w-full h-full"
                  poster={videoTestimonials.find((v) => v.id === activeVideo)?.thumbnail}
                  controls={false}
                  muted={isMuted}
                >
                  <source src={videoTestimonials.find((v) => v.id === activeVideo)?.videoUrl} type="video/mp4" />
                  {t(
                    "Your browser does not support the video tag.",
                    "Your browser does not support the video tag.",
                    "आपका ब्राउज़र वीडियो टैग का समर्थन नहीं करता है।",
                  )}
                </video>

                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4 flex justify-between items-center">
                  <div>
                    <h3 className="text-white text-lg">{videoTestimonials.find((v) => v.id === activeVideo)?.name}</h3>
                    <p className="text-white/80 text-sm">
                      {videoTestimonials.find((v) => v.id === activeVideo)?.location}
                    </p>
                  </div>
                  <div className="flex gap-4">
                    <button
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        togglePlay()
                      }}
                    >
                      {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white" />}
                    </button>
                    <button
                      className="bg-white/20 hover:bg-white/30 p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleMute()
                      }}
                    >
                      {isMuted ? (
                        <VolumeX className="w-6 h-6 text-white" />
                      ) : (
                        <Volume2 className="w-6 h-6 text-white" />
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
