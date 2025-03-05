import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <Link href="/features" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Features
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/pricing" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Pricing
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/support" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Support
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/privacy" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Privacy
            </Link>
          </div>
          <div className="pb-6">
            <Link href="/terms" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
              Terms
            </Link>
          </div>
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          <Link href="https://apps.shopify.com/ryzo-search" target="_blank" rel="noopener noreferrer">
            <Button className="apple-button">Get Started with Ryzo Search</Button>
          </Link>
        </div>
        <p className="mt-10 text-center text-sm leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} Ryzo Search. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

