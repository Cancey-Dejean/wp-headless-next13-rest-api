import AboutUs from "@/components/AboutUs"
import CTA from "@/components/CTA"
import Hero from "@/components/Hero"
import HowItWorks from "@/components/HowItWorks"
import OurServices from "@/components/OurServices"
import Portfolio from "@/components/Portfolio"
import SocialProof from "@/components/SocialProof"
import Testimonials from "@/components/Testimonials"

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <SocialProof />
      <Testimonials />
      <Portfolio />
      <OurServices />
      <HowItWorks />
      <AboutUs />
      <CTA />
    </main>
  )
}
