"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useLanguage } from "./language-context"

export default function Blog() {
  const { t } = useLanguage()

  const blogPosts = [
    {
      id: 1,
      title: t(
        "Lucknow ke Traditional Designs ko Modern Touch Kaise Dein",
        "How to Give Lucknow's Traditional Designs a Modern Touch",
        "लखनऊ के पारंपरिक डिज़ाइन को मॉडर्न टच कैसे दें",
      ),
      excerpt: t(
        "Awadhi architecture ki khoobsurti ko modern homes mein kaise incorporate karein. Yahan kuch tips diye gaye hain...",
        "How to incorporate the beauty of Awadhi architecture in modern homes. Here are some tips...",
        "अवधी आर्किटेक्चर की खूबसूरती को मॉडर्न होम्स में कैसे इनकॉर्पोरेट करें। यहां कुछ टिप्स दिए गए हैं...",
      ),
      date: t("15 May, 2025", "15 May, 2025", "15 मई, 2025"),
      category: t("Interior Ideas", "Interior Ideas", "इंटीरियर आइडियाज"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: t(
        "Construction Materials ki Quality Kaise Check Karein",
        "How to Check the Quality of Construction Materials",
        "कंस्ट्रक्शन मटेरियल्स की क्वालिटी कैसे चेक करें",
      ),
      excerpt: t(
        "Ghar banwate samay materials ki quality check karna bahut zaroori hai. Is article mein janiye kaise...",
        "Checking the quality of materials is very important when building a house. Learn how in this article...",
        "घर बनवाते समय मटेरियल्स की क्वालिटी चेक करना बहुत जरूरी है। इस आर्टिकल में जानिए कैसे...",
      ),
      date: t("10 May, 2025", "10 May, 2025", "10 मई, 2025"),
      category: t("Construction Tips", "Construction Tips", "कंस्ट्रक्शन टिप्स"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: t(
        "Lucknow Architecture: Nawabi Style se Modern Tak",
        "Lucknow Architecture: From Nawabi Style to Modern",
        "लखनऊ आर्किटेक्चर: नवाबी स्टाइल से मॉडर्न तक",
      ),
      excerpt: t(
        "Lucknow ki architecture ka safar, Nawabi daur se lekar aaj tak. Kaise badla hai design aur kya hai khaas...",
        "The journey of Lucknow's architecture, from the Nawabi era to today. How design has changed and what's special...",
        "लखनऊ की आर्किटेक्चर का सफर, नवाबी दौर से लेकर आज तक। कैसे बदला है डिज़ाइन और क्या है खास...",
      ),
      date: t("5 May, 2025", "5 May, 2025", "5 मई, 2025"),
      category: t("Lucknow Architecture", "Lucknow Architecture", "लखनऊ आर्किटेक्चर"),
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: t(
        "Budget Friendly Home Renovation Tips",
        "Budget Friendly Home Renovation Tips",
        "बजट फ्रेंडली होम रेनोवेशन टिप्स",
      ),
      excerpt: t(
        "Kam budget mein ghar ko naya look dene ke liye yeh tips follow karein. Aapka ghar bhi lag sakta hai premium...",
        "Follow these tips to give your home a new look on a low budget. Your home can also look premium...",
        "कम बजट में घर को नया लुक देने के लिए ये टिप्स फॉलो करें। आपका घर भी लग सकता है प्रीमियम...",
      ),
      date: t("1 May, 2025", "1 May, 2025", "1 मई, 2025"),
      category: t("Interior Ideas", "Interior Ideas", "इंटीरियर आइडियाज"),
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section id="blog" className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Blog Aur Tips", "Blog And Tips", "ब्लॉग और टिप्स")}
        </h2>
        <p className="text-center text-gray-600 mb-12">{t("ब्लॉग और टिप्स", "Blog And Tips", "ब्लॉग और टिप्स")}</p>

        <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 md:gap-6 lg:overflow-visible w-full min-w-0">
          {blogPosts.slice(0, 4).map((post) => (
            <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden flex-shrink-0 min-w-[90vw] sm:min-w-[60vw] lg:min-w-0 max-w-xs lg:max-w-none w-full">
              <div className="relative h-48">
                <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-maroon bg-maroon/10 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h3 className="font-medium text-lg mb-2 line-clamp-2">{post.title}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                <Button variant="link" className="p-0 h-auto text-gold hover:text-maroon">
                  {t("Read More →", "Read More →", "और पढ़ें →")}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-gold hover:bg-gold/80 text-maroon hover:text-white px-8 py-6 rounded-md transition-all shadow-md">
            {t("View All Blog Posts", "View All Blog Posts", "सभी ब्लॉग पोस्ट देखें")}
          </Button>
        </div>
      </div>
    </section>
  )
}
