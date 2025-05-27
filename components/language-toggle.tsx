"use client"

import { Button } from "@/components/ui/button"
import { useLanguage } from "./language-context"
import { useEffect, useState } from "react"

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const [open, setOpen] = useState(false)

  // Only render the component after it's mounted on the client
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything on the server to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  // Get label for current language
  const getLabel = (lang: string) => {
    if (lang === "hinglish") return "Hinglish"
    if (lang === "english") return "English"
    if (lang === "hindi") return "हिंदी"
    return ""
  }

  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="relative">
        {/* Circle button showing current language */}
        <button
          className="w-12 h-12 rounded-full bg-gold text-maroon font-bold flex items-center justify-center shadow-lg border-2 border-white hover:bg-gold/80 transition text-xs"
          onClick={() => setOpen((v) => !v)}
          aria-label="Change language"
        >
          {getLabel(language).charAt(0)}
        </button>
        {/* Dropdown options */}
        {open && (
          <div className="absolute right-0 mt-2 bg-white rounded shadow-lg py-2 flex flex-col min-w-[100px]">
            <Button
              variant={language === "hinglish" ? "default" : "ghost"}
              size="sm"
              className={`rounded-full text-xs px-3 mb-1 ${
                language === "hinglish"
                  ? "bg-gold text-maroon hover:bg-gold/80 hover:text-maroon"
                  : "text-gray-600 hover:text-maroon"
              }`}
              onClick={() => {
                setLanguage("hinglish")
                setOpen(false)
              }}
            >
              Hinglish
            </Button>
            <Button
              variant={language === "english" ? "default" : "ghost"}
              size="sm"
              className={`rounded-full text-xs px-3 mb-1 ${
                language === "english"
                  ? "bg-gold text-maroon hover:bg-gold/80 hover:text-maroon"
                  : "text-gray-600 hover:text-maroon"
              }`}
              onClick={() => {
                setLanguage("english")
                setOpen(false)
              }}
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
              onClick={() => {
                setLanguage("hindi")
                setOpen(false)
              }}
            >
              हिंदी
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
