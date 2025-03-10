export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Privacy Policy
          </span>
        </h1>
        <div className="prose prose-lg dark:prose-invert mx-auto text-center">
          <p>
            At Ryzo Search, we take your privacy seriously. This privacy policy describes how we collect, use, and
            protect your personal information.
          </p>

          <p>
            We collect information you provide directly to us, such as when you create an account, use our services, or
            communicate with us. This may include your name, email address, and payment information.
          </p>

          <p>
            We use your information to provide, maintain, and improve our services, to process transactions, and to
            communicate with you about your account and our services.
          </p>

          <p>
            We implement appropriate technical and organizational measures to protect your personal information against
            unauthorized or unlawful processing, accidental loss, destruction, or damage.
          </p>

          <p>
            You have the right to access, correct, or delete your personal information. You may also have the right to
            restrict or object to certain processing of your data.
          </p>

          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new
            privacy policy on this page.
          </p>

          <p>
            If you have any questions about this privacy policy, please contact us at{" "}
            <a href="mailto:support@ryzo.tech">support@ryzo.tech</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

