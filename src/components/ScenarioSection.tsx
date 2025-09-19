import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Globe, 
  Users, 
  Zap, 
  Database, 
  Shield, 
  AlertTriangle,
  Target,
  MapPin
} from "lucide-react";

const ScenarioSection = () => {
  const threatActors = [
    {
      name: "APT Phishing Group",
      description: "State-sponsored actors targeting employee credentials",
      tactics: ["Spear-phishing", "Social engineering", "Credential theft", "Lateral movement"],
      icon: <Target className="w-6 h-6" />,
      color: "destructive"
    },
    {
      name: "Hacktivist DDoS Collective", 
      description: "Ideologically motivated groups disrupting services",
      tactics: ["DDoS attacks", "Website defacement", "Service disruption", "Media campaigns"],
      icon: <Zap className="w-6 h-6" />,
      color: "warning"
    }
  ];

  const assets = [
    {
      name: "Employee Accounts",
      description: "Login credentials and session tokens",
      risk: "High",
      impact: "Credential theft, unauthorized access",
      icon: <Users className="w-5 h-5" />
    },
    {
      name: "Admin Tokens",
      description: "Privileged access to system configuration", 
      risk: "Critical",
      impact: "Full system compromise",
      icon: <Shield className="w-5 h-5" />
    },
    {
      name: "CI/CD Pipeline",
      description: "Automated build and deployment system",
      risk: "High", 
      impact: "Supply chain compromise",
      icon: <Database className="w-5 h-5" />
    },
    {
      name: "Message Integrity",
      description: "Internal communication authenticity",
      risk: "Medium",
      impact: "Misinformation spread",
      icon: <Globe className="w-5 h-5" />
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      destructive: "border-destructive/30 bg-destructive/5 text-destructive",
      warning: "border-warning/30 bg-warning/5 text-warning"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.destructive;
  };

  const getRiskColor = (risk: string) => {
    const riskMap = {
      "Critical": "bg-destructive/20 text-destructive border-destructive/30",
      "High": "bg-warning/20 text-warning border-warning/30", 
      "Medium": "bg-accent/20 text-accent border-accent/30"
    };
    return riskMap[risk as keyof typeof riskMap] || riskMap.High;
  };

  return (
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Scenario Context</h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            During the Ukraine war, enterprises faced increased phishing, supply-chain attacks, and misinformation campaigns. 
            This project recreates a controlled simulation of those threats.
          </p>
          <div className="flex items-center justify-center">
            <MapPin className="w-5 h-5 text-primary mr-2" />
            <span className="text-primary font-semibold">Geopolitical Crisis Simulation</span>
          </div>
        </div>

        {/* Threat Actors */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Simulated Threat Actors</h3>
          <div className="grid gap-8 md:grid-cols-2">
            {threatActors.map((actor, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg ${getColorClasses(actor.color)}`}>
                      {actor.icon}
                    </div>
                    <Badge className={`px-3 py-1 ${getColorClasses(actor.color)}`}>
                      THREAT ACTOR
                    </Badge>
                  </div>
                  <CardTitle className="text-xl mb-2">{actor.name}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {actor.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm text-foreground">Tactics & Techniques:</h4>
                    <div className="flex flex-wrap gap-2">
                      {actor.tactics.map((tactic, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tactic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* High-Value Assets */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">High-Value Assets</h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {assets.map((asset, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {asset.icon}
                    </div>
                    <Badge className={getRiskColor(asset.risk)}>
                      {asset.risk}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{asset.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {asset.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-xs text-muted-foreground">
                    <span className="font-semibold">Impact:</span> {asset.impact}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScenarioSection;