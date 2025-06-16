"use client"

import { useLanguage } from "./language-context"

export default function MapSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Our Location", "Our Location", "हमारा स्थान")}
        </h2>
        <p className="text-center text-gray-600 mb-8">
          {t("Humse milne ke liye aayein", "Visit us to meet in person", "हमसे मिलने के लिए आएं")}
        </p>

       
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
    </section>
  )
}
