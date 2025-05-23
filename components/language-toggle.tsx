"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"
import { useEffect, useState } from "react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Only render the component after it's mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything on the server to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return (
    <div className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm rounded-full shadow-md p-1">
      <div className="flex items-center">
        <Button
          variant={language === "hinglish" ? "default" : "ghost"}
          size="sm"
          className={`rounded-full text-xs px-3 ${
            language === "hinglish"
              ? "bg-gold text-maroon hover:bg-gold/80 hover:text-maroon"
              : "text-gray-600 hover:text-maroon"
          }`}
          onClick={() => setLanguage("hinglish")}
        >
          Hinglish
        </Button>

        <Button
          variant={language === "english" ? "default" : "ghost"}
          size="sm"
          className={`rounded-full text-xs px-3 ${
            language === "english"
              ? "bg-gold text-maroon hover:bg-gold/80 hover:text-maroon"
              : "text-gray-600 hover:text-maroon"
          }`}
          onClick={() => setLanguage("english")}
        >
          English
        </Button>

        <Button
          variant={language === "hindi" ? "default" : "ghost"}
          size="sm"
          className={`rounded-full text-xs px-3 ${
            language === "hindi"
              ? "bg-gold text-maroon hover:bg-gold/80 hover:text-maroon"
              : "text-gray-600 hover:text-maroon"
          }`}
          onClick={() => setLanguage("hindi")}
        >
          हिंदी
        </Button>
      </div>
    </div>
  )
}
