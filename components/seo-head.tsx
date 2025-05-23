"use client"

import { useEffect } from "react"
import Head from "next/head"
import { useLanguage } from "./language-context"

interface SEOHeadProps {
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
  keywords?: {
    hinglish: string
    english: string
    hindi: string
  }
  canonicalUrl?: string
  ogImage?: string
}

export default function SEOHead({
  title,
  description,
  keywords,
  canonicalUrl = "https://awadhihomes.com",
  ogImage = "https://awadhihomes.com/images/og-image.jpg",
}: SEOHeadProps) {
  const { language, getMetaTitle, getMetaDescription } = useLanguage()

  // Set document title dynamically based on language
  useEffect(() => {
    document.title = getMetaTitle(title.hinglish, title.english, title.hindi)
  }, [language, title, getMetaTitle])

  const metaTitle = getMetaTitle(title.hinglish, title.english, title.hindi)
  const metaDescription = getMetaDescription(description.hinglish, description.english, description.hindi)
  const metaKeywords = keywords
    ? getMetaDescription(keywords.hinglish, keywords.english, keywords.hindi)
    : "construction, builder, home construction, lucknow, awadhi homes"

  // Determine the language code for hreflang
  const langCode = language === "english" ? "en" : language === "hindi" ? "hi" : "en-IN"

  return (
    <Head>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="keywords" content={metaKeywords} />

      {/* Open Graph / Social Media Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Hreflang Tags */}
      <link rel="alternate" hrefLang="en" href={`${canonicalUrl}/en`} />
      <link rel="alternate" hrefLang="hi" href={`${canonicalUrl}/hi`} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

      {/* Current page language */}
      <meta httpEquiv="content-language" content={langCode} />
    </Head>
  )
}
