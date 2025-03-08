import ScrollRevealFeatures from "../components/ScrollRevealFeatures"
import Services from "../components/Services"
import FeatureCarousel from "../components/FeatureCarousel"
import PortfolioGrid from "../components/PortfolioGrid"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-8">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600">
            Ryzo Search Features
          </span>
        </h1>
        <p className="text-center text-lg text-muted-foreground mb-16">
          Discover the powerful features that make Ryzo Search the ultimate solution for e-commerce search.
        </p>
        <ScrollRevealFeatures />
        <Services />
        <FeatureCarousel />

        <PortfolioGrid />
      </div>
    </div>
  )
}

