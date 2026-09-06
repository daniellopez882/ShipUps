import Footer from "@/components/sections/Footer";
import HeroSection from "@/components/sections/HeroSection";
import OnsiteSection from "@/components/sections/OnsiteSection";
import OperationModeSection from "@/components/sections/OperationModeSection";
import PrimaryBar from "@/components/small/PrimaryBar";
import ServicesSection from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div id="top">
      <PrimaryBar />
      <main>
        <HeroSection />
        <ServicesSection />
        <OperationModeSection />
        <OnsiteSection />
      </main>
      <Footer />
    </div>
  );
}
