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
import { ScrollAnimation } from "../components/ScrollAnimation"

export default function Home() {
  return (
    <>
      <ScrollProgressBar />
      <section id="hero">
        <Hero />
      </section>
      <ScrollAnimation>
        <WearYourStory />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <ProductShowcase />
      </ScrollAnimation>
      <Marquee />
      <ScrollAnimation>
        <StatisticsSection />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <section id="features">
          <Services />
        </section>
      </ScrollAnimation>
      <ParallaxSection />
      <ScrollAnimation>
        <section id="how-it-works">
          <ScrollingImageShowcase />
          <FeatureCarousel />
        </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <section id="pricing">
          <PricingSlider />
        </section>
      </ScrollAnimation>
      <ScrollAnimation>
        <FAQ />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        {/* <Testimonials /> */}
      </ScrollAnimation>
      <ScrollAnimation>
        <AboutUs />
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <Timeline />
      </ScrollAnimation>
      <ScrollAnimation>
        <section id="contact">
          <ContactForm />
        </section>
      </ScrollAnimation>
      <ScrollAnimation delay={0.2}>
        <NewsletterSubscribe />
      </ScrollAnimation>
    </>
  )
}

