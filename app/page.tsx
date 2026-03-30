import { Navbar } from "@/components/sections/Navbar"
import { HeroSection } from "@/components/sections/HeroSection"
import { FeaturedCollections } from "@/components/sections/FeaturedCollections"
import { TryOnFeature } from "@/components/sections/TryOnFeature"
import { CustomerLooks } from "@/components/sections/CustomerLooks"
import { ReviewsSection } from "@/components/sections/ReviewsSection"
import { StorePresence } from "@/components/sections/StorePresence"
import { BrandStory } from "@/components/sections/BrandStory"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <HeroSection />
        <FeaturedCollections />
        <TryOnFeature />
        <CustomerLooks />
        <ReviewsSection />
        <StorePresence />
        <BrandStory />
        <Footer />
      </main>
    </>
  )
}
