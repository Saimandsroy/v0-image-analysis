"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MessageSquare, X } from "lucide-react"
import { useLanguage } from "./language-context"

export default function FloatingEnquiry() {
  const { t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Reset form
    setFormData({
      name: "",
      phone: "",
      message: "",
    })
    // Show success message
    alert(t("Enquiry submitted successfully!", "Enquiry submitted successfully!", "पूछताछ सफलतापूर्वक सबमिट की गई!"))
    // Close the form
    setIsOpen(false)
  }

  return (
    <>
      {/* Floating button */}
      <button
        className={`fixed bottom-6 right-6 z-40 bg-gold text-maroon p-4 rounded-full shadow-lg hover:bg-gold/80 transition-all ${
          isOpen ? "scale-0" : "scale-100"
        }`}
        onClick={() => setIsOpen(true)}
        aria-label="Open enquiry form"
      >
        <MessageSquare className="w-6 h-6" />
      </button>

      {/* Enquiry form */}
      <div
        className={`fixed bottom-0 right-0 z-40 w-full sm:w-96 bg-white shadow-lg rounded-t-lg sm:rounded-lg transition-transform duration-300 ${
          isOpen ? "translate-y-0 sm:bottom-6 sm:right-6" : "translate-y-full sm:translate-y-full"
        }`}
      >
        <div className="p-4 bg-maroon text-white rounded-t-lg flex justify-between items-center">
          <h3 className="text-lg font-medium">{t("Quick Enquiry", "Quick Enquiry", "त्वरित पूछताछ")}</h3>
          <button
            className="text-white hover:text-gold transition-colors"
            onClick={() => setIsOpen(false)}
            aria-label="Close enquiry form"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label htmlFor="floating-name" className="block text-sm font-medium text-gray-700 mb-1">
              {t("Name", "Name", "नाम")} *
            </label>
            <Input
              id="floating-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={t("Aapka naam", "Your name", "आपका नाम")}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="floating-phone" className="block text-sm font-medium text-gray-700 mb-1">
              {t("Phone Number", "Phone Number", "फोन नंबर")} *
            </label>
            <Input
              id="floating-phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder={t("Aapka phone number", "Your phone number", "आपका फोन नंबर")}
              required
              className="w-full"
            />
          </div>

          <div>
            <label htmlFor="floating-message" className="block text-sm font-medium text-gray-700 mb-1">
              {t("Message", "Message", "संदेश")} *
            </label>
            <Textarea
              id="floating-message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder={t("Aapko kya jaankari chahiye?", "What information do you need?", "आपको क्या जानकारी चाहिए?")}
              required
              className="w-full min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-4 rounded-md transition-all"
          >
            {t("Submit Enquiry", "Submit Enquiry", "पूछताछ सबमिट करें")}
          </Button>
        </form>
      </div>
    </>
  )
}
