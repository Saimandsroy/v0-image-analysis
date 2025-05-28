"use client"

import { useState, useEffect } from "react"
import { useLanguage } from "./language-context"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navigation() {
  const { t } = useLanguage()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navItems = [
    {
      name: t("Services", "Services", "सेवाएं"),
      href: "#services",
    },
    {
      name: t("Portfolio", "Portfolio", "पोर्टफोलियो"),
      href: "#portfolio",
    },
    {
      name: t("Resources", "Resources", "संसाधन"),
      href: "#resources",
    },
    {
      name: t("Testimonials", "Testimonials", "प्रशंसापत्र"),
      href: "#testimonials",
    },
    {
      name: t("Blog", "Blog", "ब्लॉग"),
      href: "#blog",
    },
    {
      name: t("Contact", "Contact", "संपर्क"),
      href: "#contact",
    },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-1 flex justify-between items-center">
        <Link href="#" className="flex items-center">
          <div className="relative h-20 w-48">
            <Image src="/images/logo.png" alt="Awadhi Homes Logo" fill className="object-contain" priority />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                isScrolled ? "text-maroon hover:text-gold" : "text-white hover:text-gold"
              }`}
            >
              {item.name}
            </a>
          ))}
          <Link href="#contact">
            <Button
              className="bg-gold hover:bg-gold/80 text-maroon hover:text-white rounded-md transition-all"
              size="sm"
            >
              {t("Get Quote", "Get Quote", "कोट प्राप्त करें")}
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-maroon p-2 rounded-md" onClick={toggleMenu} aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-4 py-3 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block text-maroon hover:text-gold font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Link href="#contact" onClick={() => setIsMenuOpen(false)}>
              <Button
                className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white rounded-md transition-all"
                size="sm"
              >
                {t("Get Quote", "Get Quote", "कोट प्राप्त करें")}
              </Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
