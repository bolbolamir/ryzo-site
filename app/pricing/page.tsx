import PricingSlider from "../components/PricingSlider"
import FAQ from "../components/FAQ"

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Ryzo Search Pricing
          </span>
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-16">
          Choose the perfect plan for your business needs.
        </p>
        <PricingSlider />
        <FAQ />
      </div>
    </div>
  )
}

