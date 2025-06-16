"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight, Play } from "lucide-react"
import { useLanguage } from "./language-context"

export default function Portfolio() {
  const { t } = useLanguage()
  const [selectedItem, setSelectedItem] = useState<(typeof portfolioItems)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)

  // Portfolio items with translations
  const portfolioItems = [
    {
      id: 1,
      title: t("Modern Villa Design", "Modern Villa Design", "आधुनिक विला डिज़ाइन"),
      description: t(
        "Gomti Nagar mein banaya gaya modern villa. Is project mein humne contemporary design ke saath traditional Awadhi elements ko blend kiya hai.",
        "Modern villa built in Gomti Nagar. In this project, we blended contemporary design with traditional Awadhi elements.",
        "गोमती नगर में बनाया गया आधुनिक विला। इस प्रोजेक्ट में हमने कंटेम्पररी डिज़ाइन के साथ पारंपरिक अवधी तत्वों को मिलाया है।",
      ),
      images: [
        "/images/portfolio-1.png",
        "/placeholder.svg?height=600&width=800&text=Villa+Interior",
        "/placeholder.svg?height=600&width=800&text=Villa+Garden",
        "/placeholder.svg?height=600&width=800&text=Villa+Bedroom",
      ],
      videoUrl: "https://example.com/villa-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Villa+Video",
      location: t("Gomti Nagar, Lucknow", "Gomti Nagar, Lucknow", "गोमती नगर, लखनऊ"),
      completionDate: t("January 2023", "January 2023", "जनवरी 2023"),
      area: "4500 sq. ft.",
    },
    {
      id: 2,
      title: t("Office Complex", "Office Complex", "ऑफिस कॉम्प्लेक्स"),
      description: t(
        "Commercial office space in Hazratganj. Modern facilities ke saath professional work environment create kiya gaya hai.",
        "Commercial office space in Hazratganj. A professional work environment has been created with modern facilities.",
        "हजरतगंज में वाणिज्यिक कार्यालय स्थान। आधुनिक सुविधाओं के साथ पेशेवर कार्य वातावरण बनाया गया है।",
      ),
      images: [
        "/images/portfolio-2.png",
        "/placeholder.svg?height=600&width=800&text=Office+Reception",
        "/placeholder.svg?height=600&width=800&text=Conference+Room",
        "/placeholder.svg?height=600&width=800&text=Work+Area",
      ],
      videoUrl: "https://example.com/office-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Office+Video",
      location: t("Hazratganj, Lucknow", "Hazratganj, Lucknow", "हजरतगंज, लखनऊ"),
      completionDate: t("March 2023", "March 2023", "मार्च 2023"),
      area: "8000 sq. ft.",
    },
    {
      id: 3,
      title: t("Traditional Home Renovation", "Traditional Home Renovation", "पारंपरिक घर नवीनीकरण"),
      description: t(
        "Purane ghar ko naya roop diya. Heritage structure ko preserve karte hue modern amenities add ki gayi.",
        "Gave an old house a new look. Modern amenities were added while preserving the heritage structure.",
        "पुराने घर को नया रूप दिया। हेरिटेज स्ट्रक्चर को संरक्षित करते हुए आधुनिक सुविधाएं जोड़ी गईं।",
      ),
      images: [
        "/images/portfolio-3.png",
        "/placeholder.svg?height=600&width=800&text=Before+Renovation",
        "/placeholder.svg?height=600&width=800&text=During+Renovation",
        "/placeholder.svg?height=600&width=800&text=After+Renovation",
      ],
      videoUrl: "https://example.com/renovation-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Renovation+Video",
      location: t("Chowk, Lucknow", "Chowk, Lucknow", "चौक, लखनऊ"),
      completionDate: t("May 2023", "May 2023", "मई 2023"),
      area: "3200 sq. ft.",
    },
    {
      id: 4,
      title: t("Luxury Apartment Interior", "Luxury Apartment Interior", "लक्जरी अपार्टमेंट इंटीरियर"),
      description: t(
        "Premium apartment ka interior design. High-end materials aur custom furniture ke saath luxury living experience create kiya gaya.",
        "Interior design of a premium apartment. A luxury living experience was created with high-end materials and custom furniture.",
        "प्रीमियम अपार्टमेंट का इंटीरियर डिज़ाइन। हाई-एंड मटेरियल्स और कस्टम फर्नीचर के साथ लक्जरी लिविंग एक्सपीरियंस बनाया गया।",
      ),
      images: [
        "/images/portfolio-4.png",
        "/placeholder.svg?height=600&width=800&text=Living+Room",
        "/placeholder.svg?height=600&width=800&text=Master+Bedroom",
        "/placeholder.svg?height=600&width=800&text=Kitchen",
      ],
      videoUrl: "https://example.com/apartment-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Apartment+Video",
      location: t("Vibhuti Khand, Lucknow", "Vibhuti Khand, Lucknow", "विभूति खंड, लखनऊ"),
      completionDate: t("July 2023", "July 2023", "जुलाई 2023"),
      area: "2800 sq. ft.",
    },
    {
      id: 5,
      title: t("Commercial Complex", "Commercial Complex", "वाणिज्यिक परिसर"),
      description: t(
        "Multi-purpose commercial building with retail spaces, offices, and food court. Modern architecture with efficient space utilization.",
        "Multi-purpose commercial building with retail spaces, offices, and food court. Modern architecture with efficient space utilization.",
        "रिटेल स्पेस, ऑफिस और फूड कोर्ट के साथ बहु-उद्देश्यीय वाणिज्यिक भवन। कुशल स्थान उपयोग के साथ आधुनिक वास्तुकला।",
      ),
      images: [
        "/images/portfolio-5.png",
        "/placeholder.svg?height=600&width=800&text=Building+Exterior",
        "/placeholder.svg?height=600&width=800&text=Retail+Area",
        "/placeholder.svg?height=600&width=800&text=Food+Court",
      ],
      videoUrl: "https://example.com/commercial-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Commercial+Video",
      location: t("Aliganj, Lucknow", "Aliganj, Lucknow", "अलीगंज, लखनऊ"),
      completionDate: t("October 2023", "October 2023", "अक्टूबर 2023"),
      area: "15000 sq. ft.",
    },
    {
      id: 6,
      title: t("Residential Bungalow", "Residential Bungalow", "आवासीय बंगला"),
      description: t(
        "Family ke liye spacious bungalow with modern amenities and traditional design elements. Large garden and outdoor entertainment area.",
        "Spacious bungalow for family with modern amenities and traditional design elements. Large garden and outdoor entertainment area.",
        "परिवार के लिए आधुनिक सुविधाओं और पारंपरिक डिज़ाइन तत्वों के साथ विशाल बंगला। बड़ा बगीचा और आउटडोर मनोरंजन क्षेत्र।",
      ),
      images: [
        "/images/portfolio-6.png",
        "/placeholder.svg?height=600&width=800&text=Bungalow+Front",
        "/placeholder.svg?height=600&width=800&text=Garden+Area",
        "/placeholder.svg?height=600&width=800&text=Living+Space",
      ],
      videoUrl: "https://example.com/bungalow-video.mp4", // Replace with actual video URL
      videoThumbnail: "/placeholder.svg?height=400&width=600&text=Bungalow+Video",
      location: t("Sushant Golf City, Lucknow", "Sushant Golf City, Lucknow", "सुशांत गोल्फ सिटी, लखनऊ"),
      completionDate: t("December 2023", "December 2023", "दिसंबर 2023"),
      area: "5500 sq. ft.",
    },
  ]

  const openLightbox = (item: (typeof portfolioItems)[0]) => {
    setSelectedItem(item)
    setCurrentImageIndex(0)
    setShowVideo(false)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedItem(null)
    setShowVideo(false)
    setIsVideoPlaying(false)
    document.body.style.overflow = "auto"
  }

  const nextImage = () => {
    if (!selectedItem) return
    if (showVideo) {
      setShowVideo(false)
      setCurrentImageIndex(0)
    } else {
      setCurrentImageIndex((prev) => (prev === selectedItem.images.length - 1 ? 0 : prev + 1))
    }
  }

  const prevImage = () => {
    if (!selectedItem) return
    if (showVideo) {
      setShowVideo(false)
      setCurrentImageIndex(selectedItem.images.length - 1)
    } else {
      setCurrentImageIndex((prev) => (prev === 0 ? selectedItem.images.length - 1 : prev - 1))
    }
  }

  const toggleVideo = () => {
    setShowVideo(!showVideo)
    setIsVideoPlaying(!showVideo)
  }

  return (
    <section id="portfolio" className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Portfolio", "Portfolio", "पोर्टफोलियो")}
        </h2>
        <p className="text-center text-gray-600 mb-12">{t("हमारा काम", "Our Work", "हमारा काम")}</p>

        <div className="flex gap-6 overflow-x-auto pb-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible w-full min-w-0">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer h-64 flex-shrink-0 min-w-[90vw] sm:min-w-[60vw] md:min-w-0 max-w-xs md:max-w-none w-full"
              onClick={() => openLightbox(item)}
            >
              <Image
                src={item.images[0] || "/placeholder.svg"}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.location}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-gold hover:bg-gold/80 text-maroon hover:text-white px-8 py-6 rounded-md transition-all shadow-md">
            {t("View All Projects", "View All Projects", "सभी प्रोजेक्ट देखें")}
          </Button>
        </div>
      </div>

      {/* Project Detail Lightbox */}
      {selectedItem && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button className="absolute top-4 right-4 text-white hover:text-gold" onClick={closeLightbox}>
            <X className="w-8 h-8" />
          </button>

          <div className="w-full max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="md:col-span-2">
                <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                  {showVideo ? (
                    // Video player
                    <div className="w-full h-full">
                      <div className="absolute inset-0 flex items-center justify-center bg-black">
                        <p className="text-white text-center">
                          {t(
                            "Video player will be displayed here",
                            "Video player will be displayed here",
                            "वीडियो प्लेयर यहां दिखाया जाएगा",
                          )}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Image display
                    <Image
                      src={selectedItem.images[currentImageIndex] || "/placeholder.svg"}
                      alt={selectedItem.title}
                      fill
                      className="object-contain"
                    />
                  )}

                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <button
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        prevImage()
                      }}
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                      className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
                      onClick={(e) => {
                        e.stopPropagation()
                        nextImage()
                      }}
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>
                  </div>
                </div>

                <div className="flex mt-4 space-x-2 overflow-x-auto pb-2">
                  {selectedItem.images.map((image, index) => (
                    <div
                      key={index}
                      className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                        currentImageIndex === index && !showVideo ? "ring-2 ring-gold" : ""
                      }`}
                      onClick={() => {
                        setCurrentImageIndex(index)
                        setShowVideo(false)
                      }}
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                  <div
                    className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden ${
                      showVideo ? "ring-2 ring-gold" : ""
                    }`}
                    onClick={toggleVideo}
                  >
                    <Image
                      src={selectedItem.videoThumbnail || "/placeholder.svg"}
                      alt="Video thumbnail"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <Play className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg">
                <h2 className="text-2xl font-serif text-maroon mb-4">{selectedItem.title}</h2>
                <p className="text-gray-700 mb-6">{selectedItem.description}</p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">{t("Location", "Location", "स्थान")}</h3>
                    <p className="text-gray-900">{selectedItem.location}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">
                      {t("Completion Date", "Completion Date", "पूरा होने की तारीख")}
                    </h3>
                    <p className="text-gray-900">{selectedItem.completionDate}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">{t("Area", "Area", "क्षेत्रफल")}</h3>
                    <p className="text-gray-900">{selectedItem.area}</p>
                  </div>
                </div>

                <div className="mt-8">
                  <Button className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-4 rounded-md transition-all">
                    {t("Request Similar Project", "Request Similar Project", "इसी तरह का प्रोजेक्ट अनुरोध करें")}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
