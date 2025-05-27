"use client"

import { useLanguage } from "./language-context"
import { useEffect, useState } from "react"

export default function LanguageTest() {
  const { language, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const testPhrases = [
    {
      hinglish: "Namaste, kaise hain aap?",
      english: "Hello, how are you?",
      hindi: "नमस्ते, आप कैसे हैं?",
    },
    {
      hinglish: "Humse contact karein",
      english: "Contact us",
      hindi: "हमसे संपर्क करें",
    },
    {
      hinglish: "Muft quote paayen",
      english: "Get a free quote",
      hindi: "मुफ्त कोट पाएं",
    },
  ]

  return (
    <div className="fixed top-16 right-2 sm:top-20 sm:right-4 z-50 bg-white/90 backdrop-blur-sm rounded-md shadow-md p-3 sm:p-4 w-full max-w-xs sm:max-w-xs">
      <button
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl sm:text-lg w-8 h-8 flex items-center justify-center"
        onClick={() => setMounted(false)}
        aria-label="Close"
        type="button"
      >
        ✕
      </button>
      <h3 className="font-medium mb-2 text-base sm:text-lg">Language Test Panel</h3>
      <p className="text-xs sm:text-sm mb-2">
        Current language: <strong>{language}</strong>
      </p>
      <div className="space-y-2 text-xs sm:text-sm">
        {testPhrases.map((phrase, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded">
            <p>{t(phrase.hinglish, phrase.english, phrase.hindi)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
