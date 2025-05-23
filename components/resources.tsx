"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FileDown } from "lucide-react"
import { useLanguage } from "./language-context"

export default function Resources() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [email, setEmail] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [otp, setOtp] = useState("")
  const [verified, setVerified] = useState(false)

  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && phone) {
      // In a real implementation, you would send an OTP to the phone number
      setOtpSent(true)
    }
  }

  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real implementation, you would verify the OTP
    if (otp === "1234") {
      // Dummy verification
      setVerified(true)
    }
  }

  return (
    <section id="resources" className="py-20 px-4 md:px-10 bg-cream">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-maroon text-center mb-4">
          {t("Free Design Resources", "Free Design Resources", "फ्री डिज़ाइन संसाधन")}
        </h2>
        <p className="text-center text-gray-600 mb-12">
          {t("मुफ्त डिज़ाइन मटेरियल", "Free Design Materials", "मुफ्त डिज़ाइन मटेरियल")}
        </p>

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
          <div className="mb-6">
            <p className="text-lg text-gray-700 mb-4">
              {t(
                "Best interior design ideas, layouts, aur inspiration—PDF format mein. Download karne ke liye apna phone number aur naam dalein.",
                "Best interior design ideas, layouts, and inspiration—in PDF format. Enter your phone number and name to download.",
                "बेस्ट इंटीरियर डिज़ाइन आइडियाज़, लेआउट्स, और इंस्पिरेशन—पीडीएफ फॉर्मेट में। डाउनलोड करने के लिए अपना फोन नंबर और नाम दालें।",
              )}
            </p>

            <div className="flex items-center gap-4 mb-6">
              <div className="bg-maroon/10 p-3 rounded-full">
                <FileDown className="w-6 h-6 text-maroon" />
              </div>
              <div>
                <h4 className="font-medium">
                  {t("3 Premium Design PDFs", "3 Premium Design PDFs", "3 प्रीमियम डिज़ाइन पीडीएफ")}
                </h4>
                <p className="text-sm text-gray-500">
                  {t(
                    "Top trends, layouts, and inspiration",
                    "Top trends, layouts, and inspiration",
                    "टॉप ट्रेंड्स, लेआउट्स, और इंस्पिरेशन",
                  )}
                </p>
              </div>
            </div>
          </div>

          {!verified ? (
            !otpSent ? (
              <form onSubmit={handleSendOTP} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Name", "Name", "नाम")}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("Aapka naam", "Your name", "आपका नाम")}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Phone Number", "Phone Number", "फोन नंबर")}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder={t("Aapka phone number", "Your phone number", "आपका फोन नंबर")}
                    required
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    {t("Email (Optional)", "Email (Optional)", "ईमेल (वैकल्पिक)")}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("Aapka email (optional)", "Your email (optional)", "आपका ईमेल (वैकल्पिक)")}
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-6 rounded-md transition-all shadow-md"
                  disabled={!name || !phone}
                >
                  {t("Send OTP", "Send OTP", "OTP भेजें")}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-4">
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    {t(`Enter OTP sent to ${phone}`, `Enter OTP sent to ${phone}`, `${phone} पर भेजा गया OTP दर्ज करें`)}
                  </label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder={t("Enter OTP", "Enter OTP", "OTP दर्ज करें")}
                    required
                    className="w-full"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gold hover:bg-gold/80 text-maroon hover:text-white py-6 rounded-md transition-all shadow-md"
                  disabled={!otp}
                >
                  {t("Verify & Download", "Verify & Download", "वेरिफाई करें और डाउनलोड करें")}
                </Button>

                <button
                  type="button"
                  className="text-sm text-maroon hover:text-gold underline w-full text-center"
                  onClick={() => setOtpSent(false)}
                >
                  {t("Change Phone Number", "Change Phone Number", "फोन नंबर बदलें")}
                </button>
              </form>
            )
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 border border-green-200 rounded-md text-green-700">
                <p className="font-medium">
                  {t("Verification Successful!", "Verification Successful!", "वेरिफिकेशन सफल!")}
                </p>
                <p className="text-sm">
                  {t(
                    "You can now download the design resources.",
                    "You can now download the design resources.",
                    "अब आप डिज़ाइन संसाधन डाउनलोड कर सकते हैं।",
                  )}
                </p>
              </div>

              <div className="space-y-3">
                <a
                  href="#"
                  className="flex items-center gap-2 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FileDown className="w-5 h-5 text-maroon" />
                  <span>
                    {t(
                      "Top 10 Interior Design Trends (PDF)",
                      "Top 10 Interior Design Trends (PDF)",
                      "टॉप 10 इंटीरियर डिज़ाइन ट्रेंड्स (PDF)",
                    )}
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FileDown className="w-5 h-5 text-maroon" />
                  <span>
                    {t(
                      "Modern vs. Traditional Awadhi Interiors (PDF)",
                      "Modern vs. Traditional Awadhi Interiors (PDF)",
                      "मॉडर्न बनाम ट्रेडिशनल अवधी इंटीरियर्स (PDF)",
                    )}
                  </span>
                </a>

                <a
                  href="#"
                  className="flex items-center gap-2 p-3 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors"
                >
                  <FileDown className="w-5 h-5 text-maroon" />
                  <span>{t("3D Layout Templates (PDF)", "3D Layout Templates (PDF)", "3D लेआउट टेम्पलेट्स (PDF)")}</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
