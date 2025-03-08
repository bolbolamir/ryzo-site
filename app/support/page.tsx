"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MessageSquare } from "lucide-react"
import ContactForm from "../components/ContactForm"

export default function SupportPage() {
  const [activeTab, setActiveTab] = useState("contact")

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Support & Contact Us
          </span>
        </motion.h1>
        <motion.p
          className="text-center text-lg text-muted-foreground mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          We're here to help. Choose how you'd like to reach us.
        </motion.p>

        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
                activeTab === "contact"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab("contact")}
            >
              Contact Form
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium ${
                activeTab === "email"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab("email")}
            >
              Email Support
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
                activeTab === "phone"
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-muted-foreground hover:bg-primary/10"
              }`}
              onClick={() => setActiveTab("phone")}
            >
              Phone Support
            </button>
          </div>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {activeTab === "contact" && <ContactForm />}
          {activeTab === "email" && (
            <div className="text-center">
              <Mail className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Email Support</h2>
              <p className="mb-4">
                For any inquiries, please email us at:{" "}
                <a href="mailto:support@ryzo.tech" className="text-primary hover:underline">
                  support@ryzosearch.com
                </a>
              </p>
              <p>We typically respond within 24 hours during business days.</p>
            </div>
          )}
          {activeTab === "phone" && (
            <div className="text-center">
              <Phone className="w-16 h-16 text-primary mx-auto mb-4" />
              <h2 className="text-2xl font-bold mb-4">Phone Support</h2>
              <p className="mb-4">
                Call us at:{" "}
                <a href="tel:+1234567890" className="text-primary hover:underline">
                  +1 (234) 567-890
                </a>
              </p>
              <p>Our support hours are Monday to Friday, 9 AM to 5 PM EST.</p>
            </div>
          )}
        </motion.div>

        <motion.div
          className="mt-16 bg-card rounded-lg p-8 shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold mb-4 text-center">Frequently Asked Questions</h2>
          <p className="text-center mb-8">
            Check out our{" "}
            <a href="/faq" className="text-primary hover:underline">
              FAQ page
            </a>{" "}
            for quick answers to common questions.
          </p>
          <div className="text-center">
            <a
              href="/faq"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              View FAQs
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

