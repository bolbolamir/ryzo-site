export default function TermsPage() {
  const sections = [
    { id: "use", title: "1. Use of Services" },
    { id: "account", title: "2. Account Registration" },
    { id: "payment", title: "3. Payment and Billing" },
    { id: "termination", title: "4. Termination" },
    { id: "disclaimer", title: "5. Disclaimer of Warranties" },
    { id: "liability", title: "6. Limitation of Liability" },
    { id: "changes", title: "7. Changes to Terms" },
    { id: "law", title: "8. Governing Law" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-7xl">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Terms of Service
          </span>
        </h1>

        {/* Table of Contents */}
        <nav className="mb-12 p-6 bg-muted rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Table of Contents</h2>
          <ul className="space-y-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="prose prose-lg dark:prose-invert mx-auto">
          <div className="bg-card p-6 rounded-lg mb-8">
            <p className="text-xl">
              Welcome to Ryzo Search. By using our services, you agree to be bound by the following terms and conditions.
            </p>
          </div>

          <section id="use" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[0].title}</h2>
            <p>
              You may use our services only as permitted by law and as described in these terms. You may not use our
              services to violate any laws or infringe on any third-party rights.
            </p>
          </section>

          <section id="account" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[1].title}</h2>
            <p>
              To use certain features of our services, you may be required to create an account. You are responsible for
              maintaining the confidentiality of your account information.
            </p>
          </section>

          <section id="payment" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[2].title}</h2>
            <p>
              If you choose a paid plan, you agree to pay the fees associated with that plan. We may change our fees at
              any time, but will give you advance notice of these changes.
            </p>
          </section>

          <section id="termination" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[3].title}</h2>
            <p>
              We reserve the right to suspend or terminate your access to our services at any time, with or without cause
              and with or without notice.
            </p>
          </section>

          <section id="disclaimer" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[4].title}</h2>
            <p>
              Our services are provided "as is" without any warranties, express or implied. We do not guarantee that our
              services will be uninterrupted or error-free.
            </p>
          </section>

          <section id="liability" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[5].title}</h2>
            <p>
              To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to your use of our services.
            </p>
          </section>

          <section id="changes" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[6].title}</h2>
            <p>
              We may modify these terms at any time. We will notify you of any material changes by posting the new terms
              on our website.
            </p>
          </section>

          <section id="law" className="scroll-mt-16">
            <h2 className="text-2xl font-bold mb-4">{sections[7].title}</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without
              regard to its conflict of law provisions.
            </p>
          </section>

          <section id="contact" className="scroll-mt-16 bg-muted p-6 rounded-lg mt-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="flex items-center gap-2">
              If you have any questions about these terms, please contact us at{" "}
              <a 
                href="mailto:support@ryzo.tech"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                support@ryzo.tech
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

