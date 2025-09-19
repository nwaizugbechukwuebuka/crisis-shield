import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Shield, 
  AlertTriangle, 
  Users, 
  Target,
  Zap,
  CheckCircle,
  ArrowRight
} from "lucide-react";

const ImpactAndSkillsSection = () => {
  const businessImpact = [
    {
      title: "Communication Availability",
      description: "Ensures reliable internal communications during crisis events",
      icon: <TrendingUp className="w-6 h-6" />,
      metrics: "99.9% uptime maintained"
    },
    {
      title: "Trust & Reputation",
      description: "Prevents misinformation that could harm employee safety",
      icon: <Shield className="w-6 h-6" />,
      metrics: "Zero false alerts"
    },
    {
      title: "Supply Chain Security",
      description: "Reduces risks in SaaS deployments and dependencies",
      icon: <AlertTriangle className="w-6 h-6" />,
      metrics: "100% signed artifacts"
    },
    {
      title: "Incident Readiness",
      description: "Strengthens response capabilities with targeted playbooks",
      icon: <Users className="w-6 h-6" />,
      metrics: "<5min response time"
    }
  ];

  const keyLearnings = [
    "Crisis conditions magnify the effectiveness of phishing and misinformation",
    "Supply-chain security (signed builds, verified dependencies) is a top priority", 
    "Detection and response are as important as prevention",
    "Curiosity-driven research (deepfakes, misinformation) makes a security engineer stand out"
  ];

  const skills = [
    {
      category: "Penetration Testing",
      tools: ["Burp Suite", "OWASP ZAP", "Nmap", "Metasploit"],
      color: "primary"
    },
    {
      category: "Secure Development", 
      tools: ["CI/CD Hardening", "MFA Implementation", "Artifact Signing"],
      color: "accent"
    },
    {
      category: "Threat Intelligence",
      tools: ["MISP Feeds", "IOC Enrichment", "TTP Analysis"],
      color: "success"
    },
    {
      category: "SIEM & Detection",
      tools: ["ELK Stack", "Splunk Rules", "Anomaly Detection"],
      color: "warning"
    },
    {
      category: "Research & Innovation",
      tools: ["Deepfake Analysis", "Geopolitical Mapping", "Emerging Threats"],
      color: "destructive"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "border-primary/30 bg-primary/10 text-primary",
      accent: "border-accent/30 bg-accent/10 text-accent", 
      success: "border-success/30 bg-success/10 text-success",
      warning: "border-warning/30 bg-warning/10 text-warning",
      destructive: "border-destructive/30 bg-destructive/10 text-destructive"
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Business Impact */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Business Impact</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Quantifiable security improvements that protect organizational resilience
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {businessImpact.map((impact, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      {impact.icon}
                    </div>
                    <Badge variant="outline" className="bg-success/10 text-success border-success/30">
                      {impact.metrics}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{impact.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{impact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Key Learnings */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Learnings</h2>
          </div>

          <Card className="bg-gradient-card border-border/50 shadow-card">
            <CardContent className="p-8">
              <div className="space-y-6">
                {keyLearnings.map((learning, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-success mr-4 mt-0.5 flex-shrink-0" />
                    <p className="text-foreground text-lg">{learning}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skills Demonstrated */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Skills Demonstrated</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Technical expertise across the full spectrum of cybersecurity disciplines
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill, index) => (
              <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center">
                    <Target className="w-5 h-5 mr-3 text-primary" />
                    {skill.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, idx) => (
                      <Badge key={idx} className={`px-3 py-1 ${getColorClasses(skill.color)}`}>
                        {tool}
                      </Badge>
                    ))}
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

export default ImpactAndSkillsSection;