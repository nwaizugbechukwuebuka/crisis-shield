import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  BookOpen, 
  Settings, 
  BarChart3, 
  Users, 
  Camera,
  Folder,
  Shield
} from "lucide-react";

const DeliverablesSection = () => {
  const deliverables = [
    {
      title: "Penetration Test Report",
      description: "Comprehensive vulnerabilities, risks, and remediation strategies",
      icon: <FileText className="w-6 h-6" />,
      items: ["Executive Summary", "Technical Findings", "Risk Assessment", "Remediation Roadmap"],
      color: "primary"
    },
    {
      title: "Incident Response Playbooks", 
      description: "Crisis-specific workflows and communication procedures",
      icon: <BookOpen className="w-6 h-6" />,
      items: ["Phishing Response", "Misinformation Handling", "CI/CD Compromise", "DDoS Mitigation"],
      color: "accent"
    },
    {
      title: "Hardened CI/CD Configurations",
      description: "Before/after states with security improvements",
      icon: <Settings className="w-6 h-6" />,
      items: ["Dependency Pinning", "Artifact Signing", "Secure Runners", "Pipeline Monitoring"],
      color: "success"
    },
    {
      title: "SIEM Rules & Dashboards",
      description: "Detection coverage for crisis scenarios",
      icon: <BarChart3 className="w-6 h-6" />,
      items: ["Login Anomalies", "Message Tampering", "Pipeline Alerts", "Threat Indicators"],
      color: "warning"
    },
    {
      title: "Research Appendix",
      description: "MITRE ATT&CK mapping and compliance considerations",
      icon: <Users className="w-6 h-6" />,
      items: ["TTP Mapping", "GDPR Analysis", "Deepfake Research", "Threat Evolution"],
      color: "destructive"
    },
    {
      title: "Evidence & Screenshots",
      description: "Documented proof of simulations and improvements",
      icon: <Camera className="w-6 h-6" />,
      items: ["Phishing Simulations", "SIEM Alerts", "Hardened Builds", "Test Results"],
      color: "primary"
    }
  ];

  const repositoryStructure = [
    { name: "report/", type: "folder", desc: "Penetration test & threat assessment" },
    { name: "playbooks/", type: "folder", desc: "Incident response guides" },
    { name: "sim-lab/", type: "folder", desc: "Dockerized SaaS + CI/CD (vulnerable & hardened)" },
    { name: "scripts/", type: "folder", desc: "MFA demo, token rotation, artifact signing" },
    { name: "siem/", type: "folder", desc: "Example SIEM rules & dashboards" },
    { name: "phishing-templates/", type: "folder", desc: "Lab-only spear-phishing templates" },
    { name: "docs/", type: "folder", desc: "MITRE mapping, GDPR notes, research appendix" },
    { name: "screenshots/", type: "folder", desc: "Evidence from simulation" }
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
    <section className="py-24 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">Deliverables & Repository</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive documentation and artifacts demonstrating security expertise
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
          {deliverables.map((deliverable, index) => (
            <Card key={index} className="bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2 rounded-lg ${getColorClasses(deliverable.color)}`}>
                    {deliverable.icon}
                  </div>
                </div>
                <CardTitle className="text-lg mb-2">{deliverable.title}</CardTitle>
                <CardDescription className="text-muted-foreground text-sm">
                  {deliverable.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {deliverable.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-foreground/80 flex items-start">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-gradient-card border-border/50 shadow-card">
          <CardHeader>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <CardTitle className="text-2xl">Repository Structure</CardTitle>
            </div>
            <CardDescription>
              Organized codebase demonstrating professional security engineering practices
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-muted/50 rounded-lg p-6 font-mono text-sm">
              <div className="text-primary font-semibold mb-4">secure-crisis-communications/</div>
              <div className="space-y-2 ml-4">
                {repositoryStructure.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <Folder className="w-4 h-4 text-warning mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-accent mr-4">{item.name}</span>
                    <span className="text-muted-foreground text-xs"># {item.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default DeliverablesSection;