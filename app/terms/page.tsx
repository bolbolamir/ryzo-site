export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Terms of Service
          </span>
        </h1>
        <div className="prose prose-lg dark:prose-invert mx-auto">
          <p>
            Welcome to Ryzo Search. By using our services, you agree to be bound by the following terms and conditions.
          </p>
          <h2>1. Use of Services</h2>
          <p>
            You may use our services only as permitted by law and as described in these terms. You may not use our
            services to violate any laws or infringe on any third-party rights.
          </p>
          <h2>2. Account Registration</h2>
          <p>
            To use certain features of our services, you may be required to create an account. You are responsible for
            maintaining the confidentiality of your account information.
          </p>
          <h2>3. Payment and Billing</h2>
          <p>
            If you choose a paid plan, you agree to pay the fees associated with that plan. We may change our fees at
            any time, but will give you advance notice of these changes.
          </p>
          <h2>4. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our services at any time, with or without cause
            and with or without notice.
          </p>
          <h2>5. Disclaimer of Warranties</h2>
          <p>
            Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our
            services will be uninterrupted or error-free.
          </p>
          <h2>6. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special,
            consequential, or punitive damages arising out of or relating to your use of our services.
          </p>
          <h2>7. Changes to Terms</h2>
          <p>
            We may modify these terms at any time. We will notify you of any material changes by posting the new terms
            on our website.
          </p>
          <h2>8. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
            regard to its conflict of law provisions.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these terms, please contact us at{" "}
            <a href="mailto:legal@ryzosearch.com">legal@ryzosearch.com</a>.
          </p>
        </div>
      </div>
    </div>
  )
}

