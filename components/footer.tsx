"use client"

import { useLanguage } from "./language-context"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-maroon text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="mb-6">
              <div className="relative h-24 w-48 bg-white p-2 rounded">
                <Image src="/images/logo.png" alt="Awadhi Homes Logo" fill className="object-contain" />
              </div>
            </div>
            <p className="text-white/80 mb-4">
              {t(
                "Awadhi Homes – Lucknow ke dil se banaye gaye ghar, aapke sapno ka ghar humari zimmedari.",
                "Awadhi Homes – Houses built from the heart of Lucknow, your dream home is our responsibility.",
                "अवधी होम्स – लखनऊ के दिल से बनाए गए घर, आपके सपनों का घर हमारी जिम्मेदारी।",
              )}
            </p>
            <p className="text-white/80">
              {t(
                "15+ saal ka experience, 200+ successful projects",
                "15+ years of experience, 200+ successful projects",
                "15+ साल का अनुभव, 200+ सफल प्रोजेक्ट्स",
              )}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">{t("Quick Links", "Quick Links", "त्वरित लिंक्स")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-white/80 hover:text-gold transition-colors">
                  {t("Services", "Services", "सेवाएं")}
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-white/80 hover:text-gold transition-colors">
                  {t("Portfolio", "Portfolio", "पोर्टफोलियो")}
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-white/80 hover:text-gold transition-colors">
                  {t("Testimonials", "Testimonials", "प्रशंसापत्र")}
                </a>
              </li>
              <li>
                <a href="#blog" className="text-white/80 hover:text-gold transition-colors">
                  {t("Blog", "Blog", "ब्लॉग")}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-gold transition-colors">
                  {t("Contact", "Contact", "संपर्क")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">{t("Services", "Services", "सेवाएं")}</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  {t("Interior Design", "Interior Design", "इंटीरियर डिज़ाइन")}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  {t("Home Construction", "Home Construction", "होम कंस्ट्रक्शन")}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  {t("Commercial Buildings", "Commercial Buildings", "कमर्शियल बिल्डिंग्स")}
                </a>
              </li>
              <li>
                <a href="#" className="text-white/80 hover:text-gold transition-colors">
                  {t("2D/3D Drawings", "2D/3D Drawings", "2डी/3डी ड्रॉइंग्स")}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-serif mb-6">{t("Contact Us", "Contact Us", "संपर्क करें")}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1" />
                <span className="text-white/80">
                  {t(
                    "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                    "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                    "बिलाली मस्जिद के पास, बालागंज, लखनऊ, उत्तर प्रदेश, भारत",
                  )}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold mt-1" />
                <span className="text-white/80">+91 9125197678</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold mt-1" />
                <span className="text-white/80">imadkhan01430@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-1" />
                <span className="text-white/80">
                  {t(
                    "Monday - Saturday: 9:00 AM - 6:00 PM",
                    "Monday - Saturday: 9:00 AM - 6:00 PM",
                    "सोमवार - शनिवार: सुबह 9:00 - शाम 6:00",
                  )}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/60">
            © {new Date().getFullYear()} Awadhi Homes.{" "}
            {t("All Rights Reserved.", "All Rights Reserved.", "सर्वाधिकार सुरक्षित।")}
          </p>
        </div>
      </div>
    </footer>
  )
}
