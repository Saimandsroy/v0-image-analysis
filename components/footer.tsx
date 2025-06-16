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

        {/* Social Links Section */}
        <div className="flex justify-center gap-4 mb-8">
          <a
            href="https://twitter.com/imadkhan0802"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#1DA1F2] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            title="Twitter"
          >
            {/* You can use your icon component here if available */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.36a9.09 9.09 0 01-2.88 1.1A4.52 4.52 0 0016.11 0c-2.5 0-4.52 2.02-4.52 4.52 0 .36.04.71.11 1.05C7.69 5.4 4.07 3.7 1.64 1.15c-.4.68-.63 1.47-.63 2.32 0 1.6.81 3.01 2.05 3.84A4.48 4.48 0 01.96 6v.06c0 2.23 1.59 4.09 3.7 4.51-.39.11-.8.17-1.22.17-.3 0-.59-.03-.87-.08.59 1.84 2.3 3.18 4.33 3.22A9.06 9.06 0 010 19.54a12.8 12.8 0 006.95 2.04c8.34 0 12.9-6.91 12.9-12.9 0-.2 0-.39-.01-.58A9.22 9.22 0 0023 3z" />
            </svg>
          </a>
          <a
            href="https://instagram.com/imadkhan0802"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#E1306C] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <circle cx="17.5" cy="6.5" r="1.5" />
            </svg>
          </a>
          <a
            href="https://facebook.com/imadkhan0802"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#4267B2] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            title="Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M18 2h-3a5 5 0 00-5 5v3H6v4h4v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com/in/imadkhan0802"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#0077B5] p-2 rounded-full hover:bg-gray-100 transition-colors shadow-md"
            title="LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect width="20" height="20" x="2" y="2" rx="5" />
              <path d="M16 8a6 6 0 016 6v6h-4v-6a2 2 0 00-4 0v6h-4v-6a6 6 0 016-6z" />
              <circle cx="8" cy="16" r="1" />
              <circle cx="8" cy="12" r="1" />
            </svg>
          </a>
        </div>
        {/* End Social Links Section */}

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
