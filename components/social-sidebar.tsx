"use client"

import { useEffect, useState } from "react"
import { Twitter, Instagram, Facebook, Linkedin, Phone } from "lucide-react"

export default function SocialSidebar() {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > lastScrollY) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <div
      className={`fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-transform duration-300 ${
        isVisible ? "translate-x-0" : "translate-x-16"
      }`}
    >
      <div className="flex flex-col gap-3 items-center">
        <a
          href="https://wa.me/919125197678?text=I%20want%20to%20build%20my%20home%20with%20Awadhi%20Homes"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors shadow-md relative group animate-pulse"
          title="WhatsApp Karein"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-6 h-6"
          >
            <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
            <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
            <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
          </svg>
          <span className="absolute left-0 -translate-x-full -translate-y-1/2 top-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            WhatsApp Karein
          </span>
        </a>

        <a
          href="tel:+919125197678"
          className="bg-maroon text-white p-3 rounded-full hover:bg-maroon/80 transition-colors shadow-md relative group animate-pulse"
          title="Call Karein"
        >
          <Phone className="w-6 h-6" />
          <span className="absolute left-0 -translate-x-full -translate-y-1/2 top-1/2 bg-black/80 text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
            Call Karein
          </span>
        </a>

        <div className="h-px w-8 bg-gray-300 my-2"></div>

        <a
          href="https://twitter.com/imadkhan0802"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#1DA1F2] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
          title="Twitter"
        >
          <Twitter className="w-5 h-5" />
        </a>

        <a
          href="https://instagram.com/imadkhan0802"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#E1306C] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
          title="Instagram"
        >
          <Instagram className="w-5 h-5" />
        </a>

        <a
          href="https://facebook.com/imadkhan0802"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#4267B2] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
          title="Facebook"
        >
          <Facebook className="w-5 h-5" />
        </a>

        <a
          href="https://linkedin.com/in/imadkhan0802"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-[#0077B5] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
          title="LinkedIn"
        >
          <Linkedin className="w-5 h-5" />
        </a>
      </div>
    </div>
  )
}
