"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How does the 14-day free trial work?",
    answer:
      "Our 14-day free trial provides you with full access to all features of Ryzo Search. You can start using the platform immediately without entering any payment information. At the end of the trial period, if you don't cancel or choose a paid plan, your account will automatically be downgraded to our free tier, which includes basic functionality. No credit card is required to start the trial.",
  },
  {
    question: "Can I change plans later?",
    answer:
      "Absolutely! You have the flexibility to upgrade or downgrade your subscription at any time within your Shopify admin dashboard. Upgrading will grant you immediate access to advanced features, while downgrading will take effect at the beginning of your next billing cycle. This ensures that you only pay for what you need.",
  },
  {
    question: "How secure is my data?",
    answer:
      "We prioritize the security of your data by implementing robust encryption protocols both in transit (TLS) and at rest (AES-256). Your sensitive information is stored on secure cloud servers with multiple layers of protection, including firewalls, intrusion detection systems, and regular security audits conducted by third-party experts. We comply with industry standards such as GDPR and PCI-DSS to ensure maximum safety.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We provide round-the-clock email support for all users, ensuring timely assistance regardless of your plan. For our premium subscribers, we offer priority response times, phone support, and live video call sessions to resolve complex issues quickly. Additionally, we maintain an extensive knowledge base, step-by-step guides, and an active community forum where you can interact with other merchants and get instant help.",
  },
  {
    question: "Do I need technical expertise to set up Ryzo Search?",
    answer:
      "Not at all! Ryzo Search is designed to be user-friendly and intuitive. Our setup process is straightforward, typically taking just a few minutes to complete. Even if you're new to Shopify apps, our guided installation wizard will walk you through each step. If you encounter any challenges, our support team is always here to assist you.",
  },
  {
    question: "Will Ryzo Search slow down my store's performance?",
    answer:
      "No, Ryzo Search is optimized for speed and efficiency. It uses lightweight code architecture and leverages caching mechanisms to ensure minimal impact on your store's loading times. In fact, many users report faster search results and improved overall site performance after integrating our app.",
  },
  {
    question: "Is there a limit to the number of products I can index?",
    answer:
      "With our free tier, you can index up to 25 products. For larger stores, upgrading to one of our paid plans removes this limitation, allowing you to index unlimited products. Each plan also comes with additional benefits like advanced analytics and customization options.",
  },
  {
    question: "Can I customize the search bar design?",
    answer:
      "Yes, Ryzo Search offers extensive customization options to match your store's branding. You can adjust colors, fonts, layouts, and even add custom CSS to create a seamless integration with your website's design. Our drag-and-drop editor makes it easy to tailor the search experience without needing coding skills.",
  },
  {
    question: "How often are my product listings updated in the search index?",
    answer:
      "Ryzo Search automatically updates your product listings in real-time whenever changes are made in your Shopify store. This ensures that customers always see the most accurate and up-to-date results when they perform searches."
  },
  {
    question: "Does Ryzo Search support multi-language stores?",
    answer:
      "Yes, Ryzo Search supports multi-language stores, enabling you to provide localized search experiences for international customers. Simply enable the languages you use in your Shopify settings, and our app will adapt accordingly. This feature helps improve customer satisfaction and drives higher conversion rates across different regions."
  },
  {
    question: "Are there any hidden fees or charges?",
    answer:
      "No, we believe in transparency. There are no hidden fees or charges associated with Ryzo Search. The pricing structure is clearly outlined on our website, and you only pay for the plan you select. Free trials, upgrades, and downgrades are all handled seamlessly through your Shopify account."
  },
  {
    question: "How long does it take to implement Ryzo Search on my store?",
    answer:
      "The implementation process is quick and hassle-free. Most users can install and configure Ryzo Search within 5–10 minutes using our intuitive setup wizard. Once installed, the app begins indexing your products immediately, so you can start seeing results right away."
  },
  {
    question: "Can I test Ryzo Search before committing to a paid plan?",
    answer:
      "Certainly! Our 14-day free trial allows you to fully explore Ryzo Search's capabilities without obligation. During this time, you'll have access to all premium features, giving you ample opportunity to evaluate how the app enhances your store's search functionality. If you're satisfied, simply subscribe to a paid plan; otherwise, you can continue using the free tier without interruption."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
              Frequently Asked Questions
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">Find answers to common questions about our platform.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              className="border border-border rounded-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <button
                className="flex justify-between items-center w-full p-4 text-left bg-card hover:bg-card/80 transition-colors duration-200"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-foreground">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-200 ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-4 bg-card/50 text-muted-foreground">{faq.answer}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

