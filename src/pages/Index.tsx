import HeroSection from "@/components/HeroSection";
import ScenarioSection from "@/components/ScenarioSection";
import MethodologySection from "@/components/MethodologySection";
import DeliverablesSection from "@/components/DeliverablesSection";
import ImpactAndSkillsSection from "@/components/ImpactAndSkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-background text-foreground">
      <HeroSection />
      <ScenarioSection />
      <MethodologySection />
      <DeliverablesSection />
      <ImpactAndSkillsSection />
    </div>
  );
};

export default Index;