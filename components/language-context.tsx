"use client"

import { createContext, useState, useContext, useEffect, type ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

type Language = "hinglish" | "english" | "hindi"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
  t: (hinglish: string, english: string, hindi: string) => string
  getMetaTitle: (hinglish: string, english: string, hindi: string) => string
  getMetaDescription: (hinglish: string, english: string, hindi: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("hinglish")
  const [isInitialized, setIsInitialized] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  // Load language preference from localStorage if available
  useEffect(() => {
    // Only run this on the client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("preferredLanguage") as Language
      if (savedLanguage && ["hinglish", "english", "hindi"].includes(savedLanguage)) {
        setLanguage(savedLanguage)
      } else {
        // Default to hinglish if no valid preference is found
        setLanguage("hinglish")
      }
      setIsInitialized(true)
    }
  }, [])

  // Save language preference to localStorage when changed
  useEffect(() => {
    if (!isInitialized) return

    if (typeof window !== "undefined") {
      localStorage.setItem("preferredLanguage", language)
    }

    // URL path handling is commented out for now as it was causing issues
    // We'll handle language in the UI only without changing URLs
    /*
    if (language === "english" && !pathname.includes("/en")) {
      router.push("/en" + pathname)
    } else if (language === "hindi" && !pathname.includes("/hi")) {
      router.push("/hi" + pathname)
    } else if (language === "hinglish" && (pathname.includes("/en") || pathname.includes("/hi"))) {
      router.push(pathname.replace(/\/(en|hi)/, ""))
    }
    */
  }, [language, isInitialized])

  const t = (hinglish: string, english: string, hindi: string): string => {
    // Ensure we're returning the correct string based on the selected language
    switch (language) {
      case "hinglish":
        return hinglish || ""
      case "english":
        return english || ""
      case "hindi":
        return hindi || ""
      default:
        return hinglish || ""
    }
  }

  // For SEO meta titles
  const getMetaTitle = (hinglish: string, english: string, hindi: string): string => {
    return t(hinglish, english, hindi)
  }

  // For SEO meta descriptions
  const getMetaDescription = (hinglish: string, english: string, hindi: string): string => {
    return t(hinglish, english, hindi)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, getMetaTitle, getMetaDescription }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
