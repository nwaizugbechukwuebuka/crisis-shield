# Secure Crisis Communications: Protecting SaaS During Geopolitical Conflict

## 📌 Overview

This project simulates realistic cyber threats against an enterprise SaaS internal-communications platform during the Ukraine conflict. The goal is to:

- Identify vulnerabilities through controlled penetration testing.
- Apply secure software craftsmanship to harden CI/CD, authentication, and data integrity.
- Demonstrate curiosity-driven research into emerging threats such as misinformation, phishing, and supply-chain attacks.

⚠ **Ethical note**: All simulations are performed in contained environments. No real-world targets are affected.

## 🎯 Objectives

- Simulate attacker tactics seen during geopolitical crises: phishing, misinformation, CI/CD compromise, and DDoS.
- Assess vulnerabilities in a Dockerized sample SaaS communication platform.
- Harden authentication, CI/CD pipelines, and content distribution integrity.
- Develop SIEM rules, incident response playbooks, and secure deployment artifacts.
- Demonstrate forward-looking research into emerging attack vectors (e.g., deepfake-enhanced social engineering).

## 🔍 Scenario Context

During the Ukraine war, enterprises faced increased phishing, supply-chain attacks, and misinformation campaigns.
In this project, I recreated a controlled simulation of how attackers could attempt to:

- Steal employee credentials via spear-phishing.
- Spread false or malicious content through compromised accounts.
- Exploit insecure CI/CD pipelines to inject backdoors.
- Disrupt availability with targeted DDoS.

## ⚙ Methodology

### Phase 1 — Threat Modeling
- **Attacker personas**: APT phishing actor, hacktivist DDoS group.
- **Assets**: Employee accounts, admin tokens, CI/CD pipeline.

### Phase 2 — Penetration Testing (Controlled)
- Spear-phishing simulation in lab.
- Credential/session theft in a test environment.
- Simulated CI/CD compromise using unsigned dependencies.
- Availability testing with safe, containerized DDoS simulation.

### Phase 3 — Secure Software Craftsmanship
- Enforced MFA & short-lived tokens.
- CI/CD hardening: dependency pinning, artifact signing, least-privilege runners.
- Content authenticity checks (signed messages).

### Phase 4 — Detection & Response
- SIEM rules for crisis-specific anomalies.
- Playbooks for phishing, misinformation, and CI/CD alerts.
- Crisis communication response framework.

### Phase 5 — Curiosity & Research
- Explored use of deepfake text/audio in phishing campaigns (lab-only).
- Mapped TTPs to MITRE ATT&CK.
- Considered GDPR implications for sensitive employee communications during crisis.

## 📂 Repository Structure

```
secure-crisis-communications/
│
├── README.md
├── report/                  # Final threat & penetration report
├── playbooks/               # Incident response & comms playbooks
├── sim-lab/                 # Dockerized SaaS app + vulnerable & hardened CI
├── scripts/                 # MFA demo, token rotation, artifact signing
├── siem/                    # Example SIEM rules & dashboards
├── phishing-templates/      # Lab-only templates for phishing simulation
├── docs/                    # MITRE mapping, GDPR notes, research appendix
└── screenshots/             # Captured lab evidence
```

## 📈 Business Impact

- Protects availability and trust of internal communications during crises.
- Mitigates reputational and legal risks tied to misinformation or data leaks.
- Strengthens supply-chain resilience for SaaS deployments.
- Improves incident response maturity with custom playbooks and SIEM rules.

## 🧾 Key Learnings

- Crisis scenarios amplify phishing and misinformation effectiveness.
- Secure CI/CD and artifact signing are essential to block backdoors.
- Proactive research (deepfake awareness, APT simulations) sets apart a strong security engineer.
- Technical findings must always map to business risk and resilience, not just vulnerabilities.

## 🛠 Skills Demonstrated

- **Penetration Testing** (Burp Suite, OWASP ZAP, Nmap, Metasploit)
- **Secure Software Craftsmanship** (CI/CD hardening, MFA, artifact signing)
- **Threat Intelligence** (MISP feeds, IOC enrichment)
- **SIEM & Detection Engineering** (ELK/Splunk rules, anomaly detection)
- **Research & Curiosity** (deepfake phishing, geopolitical threat mapping)