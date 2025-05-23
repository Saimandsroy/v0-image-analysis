import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { LanguageProvider } from "@/components/language-context"

export const metadata = {
  title: "Awadhi Homes - Best Construction Company in Lucknow | Home Building Experts",
  description:
    "Awadhi Homes provides premium residential and commercial construction services in Lucknow. 15+ years experience, 200+ successful projects. Get a free quote today!",
  keywords:
    "construction company lucknow, home building, residential construction, commercial construction, interior design, renovation services, best builder in lucknow",
  alternates: {
    canonical: "https://awadhihomes.com",
    languages: {
      "en-US": "https://awadhihomes.com/en",
      "hi-IN": "https://awadhihomes.com/hi",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        {/* Hreflang tags for language variants */}
        <link rel="alternate" hrefLang="en" href="https://awadhihomes.com/en" />
        <link rel="alternate" hrefLang="hi" href="https://awadhihomes.com/hi" />
        <link rel="alternate" hrefLang="x-default" href="https://awadhihomes.com" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>

        {/* Schema markup for local business */}
        <Script
          id="schema-markup"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Awadhi Homes",
              image: "https://awadhihomes.com/images/logo.png",
              url: "https://awadhihomes.com",
              telephone: "+919125197678",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Near Bilali Masjid, Balagunj",
                addressLocality: "Lucknow",
                addressRegion: "Uttar Pradesh",
                postalCode: "226018",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 26.8673,
                longitude: 80.9462,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "09:00",
                closes: "18:00",
              },
              sameAs: [
                "https://facebook.com/imadkhan0802",
                "https://instagram.com/imadkhan0802",
                "https://twitter.com/imadkhan0802",
                "https://linkedin.com/in/imadkhan0802",
              ],
            }),
          }}
        />

        {/* Google Analytics placeholder - replace with your actual GA code */}
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </body>
    </html>
  )
}
