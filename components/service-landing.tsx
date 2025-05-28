"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Image from "next/image"
import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "lucide-react"

gsap.registerPlugin(ScrollTrigger)

interface ServiceLandingProps {
  service: {
    title: {
      hinglish: string
      english: string
      hindi: string
    }
    description: {
      hinglish: string
      english: string
      hindi: string
    }
    image: string
    features: Array<{
      hinglish: string
      english: string
      hindi: string
    }>
    cta: {
      hinglish: string
      english: string
      hindi: string
    }
  }
}

export default function ServiceLanding({ service }: ServiceLandingProps) {
  const { t } = useLanguage()
  const sectionRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<(HTMLLIElement | null)[]>([])

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
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
      { opacity: 0, y: 30 },
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

    featuresRef.current = featuresRef.current.slice(0, service.features.length)

    featuresRef.current.forEach((feature, index) => {
      gsap.fromTo(
        feature,
        { opacity: 0, x: 20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: feature,
            start: "top 90%",
            toggleActions: "play none none none",
          },
          delay: index * 0.1,
        },
      )
    })
  }, [service.features.length])

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div ref={imageRef} className="lg:w-1/2">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src={service.image || "/placeholder.svg"}
                alt={t(service.title.hinglish, service.title.english, service.title.hindi)}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="inline-block bg-gold text-white px-4 py-1 rounded-md text-sm font-medium mb-2">
                  {t("Premium Service", "Premium Service", "प्रीमियम सर्विस")}
                </div>
              </div>
            </div>
          </div>

          <div ref={contentRef} className="lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-serif text-maroon mb-4">
              {t(service.title.hinglish, service.title.english, service.title.hindi)}
            </h1>

            <p className="text-gray-700 mb-6">
              {t(service.description.hinglish, service.description.english, service.description.hindi)}
            </p>

            <h3 className="text-xl font-serif text-maroon mb-4">{t("Key Features", "Key Features", "मुख्य विशेषताएं")}</h3>

            <ul className="space-y-3 mb-8">
              {service.features.map((feature, index) => (
                <li
                  key={index}
                  ref={el => {
                    // Always assign, even if el is null (React expects this for cleanup)
                    featuresRef.current[index] = el
                  }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-gold/20 p-1 rounded-full mt-1">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <span className="text-gray-700">{t(feature.hinglish, feature.english, feature.hindi)}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-gold hover:bg-gold/80 text-maroon hover:text-white px-6 py-3 rounded-md transition-all flex items-center gap-2">
                {t(service.cta.hinglish, service.cta.english, service.cta.hindi)}
                <ArrowRight className="w-4 h-4" />
              </Button>

              <a href="tel:+919125197678">
                <Button
                  variant="outline"
                  className="border-gold text-gold hover:bg-gold hover:text-maroon px-6 py-3 rounded-md transition-all"
                >
                  {t("Call Now", "Call Now", "अभी कॉल करें")}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
