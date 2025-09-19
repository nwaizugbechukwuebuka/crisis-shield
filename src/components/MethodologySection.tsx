import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Database, 
  Shield, 
  Zap, 
  Search, 
  AlertTriangle,
  Target,
  Settings
} from "lucide-react";

const MethodologySection = () => {
  const phases = [
    {
      phase: "Phase 1",
      title: "Threat Modeling",
      icon: <Target className="w-6 h-6" />,
      description: "Built attacker personas and identified high-value assets",
      details: [
        "APT with phishing/disinformation focus",
        "Hacktivist DDoS actor personas",
        "Employee credentials & CI/CD pipeline assessment",
        "Internal message integrity evaluation"
      ],
      color: "primary"
    },
    {
      phase: "Phase 2", 
      title: "Penetration Testing",
      icon: <Shield className="w-6 h-6" />,
      description: "Controlled lab-based security assessment",
      details: [
        "Spear-phishing campaign simulation",
        "Credential/session theft testing",
        "CI/CD pipeline compromise demonstration",
        "Containerized DDoS availability testing"
      ],
      color: "accent"
    },
    {
      phase: "Phase 3",
      title: "Secure Software Craftsmanship", 
      icon: <Settings className="w-6 h-6" />,
      description: "Hardening CI/CD and authentication systems",
      details: [
        "MFA & token rotation implementation",
        "Dependency pinning & artifact signing",
        "Least-privilege runner configuration",
        "Content authenticity verification"
      ],
      color: "success"
    },
    {
      phase: "Phase 4",
      title: "Detection & Response",
      icon: <Search className="w-6 h-6" />,
      description: "SIEM configuration and incident playbooks",
      details: [
        "Failed login surge detection",
        "Suspicious message edit monitoring", 
        "Abnormal CI/CD activity alerting",
        "Crisis-specific response workflows"
      ],
      color: "warning"
    },
    {
      phase: "Phase 5",
      title: "Research & Innovation",
      icon: <Zap className="w-6 h-6" />,
      description: "Advanced threat investigation and mapping",
      details: [
        "Deepfake-based phishing research",
        "MITRE ATT&CK framework mapping",
        "GDPR implications analysis",
        "Emerging threat vector assessment"
      ],
      color: "destructive"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 bg-primary/5 text-primary",
      accent: "border-accent/30 bg-accent/5 text-accent", 
      success: "border-success/30 bg-success/5 text-success",
      warning: "border-warning/30 bg-warning/5 text-warning",
      destructive: "border-destructive/30 bg-destructive/5 text-destructive"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Methodology</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A systematic approach to simulating, testing, and hardening against crisis-amplified cyber threats
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {phases.map((phase, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge className={`px-3 py-1 ${getColorClasses(phase.color)}`}>
                    {phase.phase}
                  </Badge>
                  <div className={`p-2 rounded-lg ${getColorClasses(phase.color)}`}>
                    {phase.icon}
                  </div>
                </div>
                <CardTitle className="text-xl mb-2">{phase.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {phase.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {phase.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MethodologySection;