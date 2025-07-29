"use client"

import HeroSection from "@/components/hero_section";
import AboutSection from "@/components/about";
// import FeaturesSection from "@/components/features/feature_card";
import InventorySection from "@/components/inventory";
import TestimonialsSection from "@/components/testimonials";
import CTASection from "@/components/call_to_action";
import WhyChooseSection from '@/components/features/why_choose_us';


const MainHome = () => {
  return (
    <>
      <HeroSection />
      <InventorySection />
      <WhyChooseSection />
      {/* <FeaturesSection /> */}
      <AboutSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
};

export default MainHome;
