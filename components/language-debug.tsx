"use client"

import { useLanguage } from "./language-context"
import { useState, useEffect } from "react"

export default function LanguageDebug() {
  const { language, t } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-20 left-4 z-50 bg-white/80 backdrop-blur-sm rounded-md shadow-md p-2 text-xs">
      <p>
        Current language: <strong>{language}</strong>
      </p>
      <p>
        Test translation: <strong>{t("हिंदी", "English", "हिंदी")}</strong>
      </p>
    </div>
  )
}
