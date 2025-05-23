"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Phone, MapPin, Mail, Clock, CheckCircle } from "lucide-react"
import { useLanguage } from "./language-context"

export default function Contact() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    details: "",
    budget: "",
    service: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log(formData)
    // Show success message
    setIsSubmitted(true)
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        details: "",
        budget: "",
        service: "",
      })
    }, 5000)
  }

  return (
    <section id="contact" className="py-20 px-4 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Humse Baat Karein / Quote Maangein", "Talk to Us / Request a Quote", "हमसे बात करें / कोट माँगें")}
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          {t(
            "Apne dream project ko reality mein badalne ke liye humse contact karein. Hum aapko free consultation aur detailed quote provide karenge.",
            "Contact us to turn your dream project into reality. We'll provide you with a free consultation and detailed quote.",
            "अपने ड्रीम प्रोजेक्ट को रियलिटी में बदलने के लिए हमसे संपर्क करें। हम आपको फ्री कंसल्टेशन और डिटेल्ड कोट प्रोवाइड करेंगे।",
          )}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-cream p-6 md:p-8 rounded-lg shadow-md">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-serif text-maroon mb-6">
                    {t("Get a Free Quote", "Get a Free Quote", "फ्री कोट प्राप्त करें")}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Name (required)", "Name (required)", "नाम (आवश्यक)")}
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t("Aapka naam", "Your name", "आपका नाम")}
                        required
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        {t("Phone Number (required)", "Phone Number (required)", "फोन नंबर (आवश्यक)")}
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t("Aapka phone number", "Your phone number", "आपका फोन नंबर")}
                        required
                        className="w-full"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Email (optional)", "Email (optional)", "ईमेल (वैकल्पिक)")}
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t("Aapka email (optional)", "Your email (optional)", "आपका ईमेल (वैकल्पिक)")}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Service Required", "Service Required", "आवश्यक सेवा")}
                    </label>
                    <Select value={formData.service} onValueChange={(value) => handleSelectChange("service", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={t("Select service", "Select service", "सेवा चुनें")} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="home-construction">
                          {t("Home Construction", "Home Construction", "होम कंस्ट्रक्शन")}
                        </SelectItem>
                        <SelectItem value="renovation">{t("Renovation", "Renovation", "रेनोवेशन")}</SelectItem>
                        <SelectItem value="interior-design">
                          {t("Interior Design", "Interior Design", "इंटीरियर डिज़ाइन")}
                        </SelectItem>
                        <SelectItem value="commercial">
                          {t("Commercial Construction", "Commercial Construction", "कमर्शियल कंस्ट्रक्शन")}
                        </SelectItem>
                        <SelectItem value="architectural">
                          {t("Architectural Services", "Architectural Services", "आर्किटेक्चरल सर्विसेज")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Project Details", "Project Details", "प्रोजेक्ट विवरण")}
                    </label>
                    <Textarea
                      id="details"
                      name="details"
                      value={formData.details}
                      onChange={handleChange}
                      placeholder={t(
                        "Aapka project kaisa hai? Kya banwana hai?",
                        "What is your project like? What do you want to build?",
                        "आपका प्रोजेक्ट कैसा है? क्या बनवाना है?",
                      )}
                      className="w-full min-h-[120px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                      {t("Preferred Budget (optional)", "Preferred Budget (optional)", "पसंदीदा बजट (वैकल्पिक)")}
                    </label>
                    <Select value={formData.budget} onValueChange={(value) => handleSelectChange("budget", value)}>
                      <SelectTrigger className="w-full">
                        <SelectValue
                          placeholder={t("Select your budget range", "Select your budget range", "अपना बजट रेंज चुनें")}
                        />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under10">{t("Under ₹10 Lakh", "Under ₹10 Lakh", "₹10 लाख से कम")}</SelectItem>
                        <SelectItem value="10-20">{t("₹10-20 Lakh", "₹10-20 Lakh", "₹10-20 लाख")}</SelectItem>
                        <SelectItem value="20-30">{t("₹20-30 Lakh", "₹20-30 Lakh", "₹20-30 लाख")}</SelectItem>
                        <SelectItem value="30-50">{t("₹30-50 Lakh", "₹30-50 Lakh", "₹30-50 लाख")}</SelectItem>
                        <SelectItem value="above50">
                          {t("Above ₹50 Lakh", "Above ₹50 Lakh", "₹50 लाख से अधिक")}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-6 rounded-md transition-all shadow-md"
                  >
                    {t("Submit", "Submit", "सबमिट करें")}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    {t(
                      "Aapka data secure hai. Hum aapko spam nahi karenge.",
                      "Your data is secure. We won't spam you.",
                      "आपका डेटा सुरक्षित है। हम आपको स्पैम नहीं करेंगे।",
                    )}
                  </p>
                </form>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="bg-green-100 p-4 rounded-full mb-4">
                    <CheckCircle className="w-16 h-16 text-green-600" />
                  </div>

                  <h3 className="text-2xl font-serif text-maroon mb-4">
                    {t(
                      "Form Successfully Submitted!",
                      "Form Successfully Submitted!",
                      "फॉर्म सफलतापूर्वक सबमिट किया गया!",
                    )}
                  </h3>

                  <p className="text-gray-700 mb-6 max-w-md">
                    {t(
                      "Thank you for contacting Awadhi Homes. Humari team jald hi aapse contact karegi.",
                      "Thank you for contacting Awadhi Homes. Our team will contact you soon.",
                      "अवधी होम्स से संपर्क करने के लिए धन्यवाद। हमारी टीम जल्द ही आपसे संपर्क करेगी।",
                    )}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-cream p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-maroon mb-4">
                {t("Contact Information", "Contact Information", "संपर्क जानकारी")}
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-maroon/10 p-2 rounded-full mt-1">
                    <Phone className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-medium">{t("Phone", "Phone", "फोन")}</p>
                    <p className="text-gray-600">+91 9125197678</p>
                    <a href="tel:+919125197678" className="text-gold hover:text-maroon text-sm">
                      {t("Call Now", "Call Now", "अभी कॉल करें")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-maroon/10 p-2 rounded-full mt-1">
                    <MapPin className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-medium">{t("Address", "Address", "पता")}</p>
                    <p className="text-gray-600">
                      {t(
                        "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                        "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                        "बिलाली मस्जिद के पास, बालागंज, लखनऊ, उत्तर प्रदेश, भारत",
                      )}
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold hover:text-maroon text-sm"
                    >
                      {t("View on Map", "View on Map", "मैप पर देखें")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-maroon/10 p-2 rounded-full mt-1">
                    <Mail className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-medium">{t("Email", "Email", "ईमेल")}</p>
                    <p className="text-gray-600">imadkhan01430@gmail.com</p>
                    <a href="mailto:imadkhan01430@gmail.com" className="text-gold hover:text-maroon text-sm">
                      {t("Send Email", "Send Email", "ईमेल भेजें")}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-maroon/10 p-2 rounded-full mt-1">
                    <Clock className="w-5 h-5 text-maroon" />
                  </div>
                  <div>
                    <p className="font-medium">{t("Working Hours", "Working Hours", "कार्य समय")}</p>
                    <p className="text-gray-600">
                      {t(
                        "Monday - Saturday: 9:00 AM - 6:00 PM",
                        "Monday - Saturday: 9:00 AM - 6:00 PM",
                        "सोमवार - शनिवार: सुबह 9:00 - शाम 6:00",
                      )}
                    </p>
                    <p className="text-gray-600">{t("Sunday: Closed", "Sunday: Closed", "रविवार: बंद")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-cream p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-serif text-maroon mb-4">
                {t("Quick Connect", "Quick Connect", "त्वरित संपर्क")}
              </h3>

              <div className="space-y-4">
                <a
                  href="https://wa.me/919125197678?text=I%20want%20to%20build%20my%20home%20with%20Awadhi%20Homes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white p-3 rounded-md hover:bg-green-600 transition-colors"
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
                    className="w-5 h-5"
                  >
                    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z" />
                    <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1" />
                  </svg>
                  <span>{t("WhatsApp Karein", "WhatsApp Us", "व्हाट्सएप करें")}</span>
                </a>

                <a
                  href="tel:+919125197678"
                  className="flex items-center gap-2 bg-maroon text-white p-3 rounded-md hover:bg-maroon/80 transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>{t("Call Karein", "Call Us", "कॉल करें")}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
