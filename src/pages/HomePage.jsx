import React, { useEffect } from "react";
import HeroSection from "../components/Home/HeroSection";
import BusinessStatsBar from "../components/Home/BusinessStatsBar";
import AboutSection from "../components/Home/AboutSection";
import BusinessEcosystemSection from "../components/Home/BusinessEcosystemSection";
import WhyExpGloSection from "../components/Home/WhyExpGloSection";
import EventsSection from "../components/Home/EventsSection";
import NewsSection from "../components/Home/NewsSection";
import PartnershipCTA from "../components/Home/PartnershipCTA";

export default function HomePage() {
  useEffect(() => {
    document.title =
      "Building Businesses. Empowering Entrepreneurs. | EXPGLO BUSINESS PRIVATE LIMITED";
  }, []);

  return (
    <main>
      <HeroSection />
      <BusinessStatsBar />
      <AboutSection />
      <BusinessEcosystemSection />
      <WhyExpGloSection />
      <EventsSection />
      <NewsSection />
      <PartnershipCTA />
    </main>
  );
}
