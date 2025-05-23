"use client"

import type React from "react"

import { useState } from "react"
import { useLanguage } from "./language-context"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Clock, CheckCircle } from "lucide-react"

export default function FreeSiteInspection() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    date: "",
    time: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would handle the form submission
    console.log("Form submitted:", formData)
    setIsSubmitted(true)
  }

  return (
    <section id="free-site-inspection" className="py-20 px-4 md:px-10 bg-maroon/5">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-maroon p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">
                {t("Free Site Inspection", "Free Site Inspection", "फ्री साइट इंस्पेक्शन")}
              </h2>

              <p className="mb-8 text-white/90">
                {t(
                  "Apne construction project ke liye free site inspection book karein. Humari expert team aapke site ka visit karegi aur detailed analysis provide karegi.",
                  "Book a free site inspection for your construction project. Our expert team will visit your site and provide a detailed analysis.",
                  "अपने कंस्ट्रक्शन प्रोजेक्ट के लिए फ्री साइट इंस्पेक्शन बुक करें। हमारी एक्सपर्ट टीम आपके साइट का विजिट करेगी और डिटेल्ड एनालिसिस प्रोवाइड करेगी।",
                )}
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">{t("Site Analysis", "Site Analysis", "साइट एनालिसिस")}</h3>
                    <p className="text-white/80">
                      {t(
                        "Soil quality, location advantages, and potential challenges",
                        "Soil quality, location advantages, and potential challenges",
                        "मिट्टी की क्वालिटी, लोकेशन के फायदे, और पोटेंशियल चैलेंजेस",
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full mt-1">
                    <Calendar className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      {t("Project Planning", "Project Planning", "प्रोजेक्ट प्लानिंग")}
                    </h3>
                    <p className="text-white/80">
                      {t(
                        "Initial design ideas and construction timeline",
                        "Initial design ideas and construction timeline",
                        "इनिशियल डिज़ाइन आइडियाज और कंस्ट्रक्शन टाइमलाइन",
                      )}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gold/20 p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">
                      {t("Cost Estimation", "Cost Estimation", "कॉस्ट एस्टिमेशन")}
                    </h3>
                    <p className="text-white/80">
                      {t(
                        "Detailed budget breakdown and material recommendations",
                        "Detailed budget breakdown and material recommendations",
                        "डिटेल्ड बजट ब्रेकडाउन और मटेरियल रेकमेंडेशन्स",
                      )}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 md:p-12">
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-serif text-maroon mb-6">
                    {t("Book Your Free Inspection", "Book Your Free Inspection", "अपना फ्री इंस्पेक्शन बुक करें")}
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Name", "Name", "नाम")} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Phone Number", "Phone Number", "फोन नंबर")} *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                      />
                    </div>

                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Site Address", "Site Address", "साइट का पता")} *
                      </label>
                      <textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        rows={3}
                      ></textarea>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("Preferred Date", "Preferred Date", "पसंदीदा तारीख")} *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
                          {t("Preferred Time", "Preferred Time", "पसंदीदा समय")} *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gold"
                        >
                          <option value="">{t("Select Time", "Select Time", "समय चुनें")}</option>
                          <option value="morning">
                            {t("Morning (9AM-12PM)", "Morning (9AM-12PM)", "सुबह (9AM-12PM)")}
                          </option>
                          <option value="afternoon">
                            {t("Afternoon (12PM-3PM)", "Afternoon (12PM-3PM)", "दोपहर (12PM-3PM)")}
                          </option>
                          <option value="evening">
                            {t("Evening (3PM-6PM)", "Evening (3PM-6PM)", "शाम (3PM-6PM)")}
                          </option>
                        </select>
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-3 rounded-md transition-all mt-6"
                    >
                      {t("Book Free Inspection", "Book Free Inspection", "फ्री इंस्पेक्शन बुक करें")}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>

                  <h3 className="text-2xl font-serif text-maroon mb-4">
                    {t("Booking Confirmed!", "Booking Confirmed!", "बुकिंग कन्फर्म हो गई है!")}
                  </h3>

                  <p className="text-gray-700 mb-6">
                    {t(
                      "Aapki free site inspection book ho gayi hai. Humari team jald hi aapse contact karegi.",
                      "Your free site inspection has been booked. Our team will contact you soon.",
                      "आपकी फ्री साइट इंस्पेक्शन बुक हो गई है। हमारी टीम जल्द ही आपसे संपर्क करेगी।",
                    )}
                  </p>

                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-gold text-gold hover:bg-gold hover:text-maroon px-6 py-2 rounded-md transition-all"
                  >
                    {t("Book Another Inspection", "Book Another Inspection", "एक और इंस्पेक्शन बुक करें")}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
