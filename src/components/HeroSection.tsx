import { Shield, Target, Zap, Lock, Search, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import cybersecurityHero from "@/assets/cybersecurity-hero.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-background overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${cybersecurityHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 to-background/70" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="flex items-center justify-center mb-6">
          <Shield className="w-16 h-16 text-primary mr-4" />
          <Badge variant="outline" className="px-4 py-2 text-lg border-primary/50">
            CYBERSECURITY PORTFOLIO
          </Badge>
        </div>
        
        <h1 className="text-6xl font-bold mb-8 bg-gradient-primary bg-clip-text text-transparent">
          Secure Crisis Communications
        </h1>
        
        <p className="text-2xl text-muted-foreground mb-6 max-w-4xl mx-auto leading-relaxed">
          Protecting SaaS During Geopolitical Conflict
        </p>
        
        <p className="text-lg text-foreground mb-12 max-w-3xl mx-auto opacity-90">
          A comprehensive simulation of cyber threats during the Ukraine conflict, demonstrating 
          advanced penetration testing, secure software craftsmanship, and crisis response capabilities.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Badge className="px-4 py-2 bg-primary/20 text-primary border-primary/30">
            <Target className="w-4 h-4 mr-2" />
            Penetration Testing
          </Badge>
          <Badge className="px-4 py-2 bg-accent/20 text-accent border-accent/30">
            <Lock className="w-4 h-4 mr-2" />
            Secure Development
          </Badge>
          <Badge className="px-4 py-2 bg-success/20 text-success border-success/30">
            <Search className="w-4 h-4 mr-2" />
            Threat Intelligence
          </Badge>
          <Badge className="px-4 py-2 bg-warning/20 text-warning border-warning/30">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Crisis Response
          </Badge>
        </div>
        
        <div className="text-sm text-muted-foreground">
          ⚠️ Ethical Note: All simulations performed in contained environments. No real-world targets affected.
        </div>
      </div>
    </section>
  );
};

export default HeroSection;