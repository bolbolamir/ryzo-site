import Hero from "./components/Hero"
import ProductShowcase from "./components/ProductShowcase"
import FeatureCarousel from "./components/FeatureCarousel"
import PortfolioGrid from "./components/PortfolioGrid"
import Timeline from "./components/Timeline"
import Marquee from "./components/Marquee"
import ContactForm from "./components/ContactForm"
import NewsletterSubscribe from "./components/NewsletterSubscribe"
import WearYourStory from "./components/WearYourStory"
import Services from "./components/Services"
import Testimonials from "./components/Testimonials"
import AboutUs from "./components/AboutUs"
import ScrollProgressBar from "./components/ScrollProgressBar"
import StatisticsSection from "./components/StatisticsSection"
import ParallaxSection from "./components/ParallaxSection"
import ScrollRevealFeatures from "./components/ScrollRevealFeatures"
import ScrollingImageShowcase from "./components/ScrollingImageShowcase"
import PricingSlider from "./components/PricingSlider"
import FAQ from "./components/FAQ"

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <section id="hero">
        <Hero />
      </section>
      <WearYourStory />
      <StatisticsSection />
      <section id="features">
        <Services />
        {/* <ScrollRevealFeatures /> */}
      </section>
      <ParallaxSection />
      <section id="how-it-works">
        <PortfolioGrid />
        <ScrollingImageShowcase />
        <ProductShowcase />
        <FeatureCarousel />
      </section>
      <section id="pricing">
        <PricingSlider />
      </section>
      <FAQ />
      <Testimonials />
      <AboutUs />
      <Timeline />
      <Marquee />
      <section id="contact">
        <ContactForm />
      </section>
      <NewsletterSubscribe />
    </>
  )
}

