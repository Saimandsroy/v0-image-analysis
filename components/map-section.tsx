"use client"

import { useLanguage } from "./language-context"

export default function MapSection() {
  const { t } = useLanguage()

  return (
    <section className="py-12 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Our Location", "Our Location", "हमारा स्थान")}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {t("Humse milne ke liye aayein", "Visit us to meet in person", "हमसे मिलने के लिए आएं")}
        </p>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="aspect-video w-full">
            {/* Replace with actual Google Maps embed code */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.2689024497!2d80.9462!3d26.8673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDUyJzAyLjMiTiA4MMKwNTYnNDYuMyJF!5e0!3m2!1sen!2sin!4v1621234567890!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Awadhi Homes Location"
            ></iframe>
          </div>
          <div className="p-4">
            <p className="font-medium">{t("Awadhi Homes", "Awadhi Homes", "अवधी होम्स")}</p>
            <p className="text-gray-600">
              {t(
                "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                "Near Bilali Masjid, Balagunj, Lucknow, Uttar Pradesh, India",
                "बिलाली मस्जिद के पास, बालागंज, लखनऊ, उत्तर प्रदेश, भारत",
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
