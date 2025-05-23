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
    <div className="fixed top-20 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-md shadow-md p-4 max-w-xs">
      <h3 className="font-medium mb-2">Language Test Panel</h3>
      <p className="text-sm mb-2">
        Current language: <strong>{language}</strong>
      </p>

      <div className="space-y-2 text-sm">
        {testPhrases.map((phrase, index) => (
          <div key={index} className="p-2 bg-gray-100 rounded">
            <p>{t(phrase.hinglish, phrase.english, phrase.hindi)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
