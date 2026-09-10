const coursesSeedData = [
  {
    title: "Ethical Hacking & VAPT Professional Program",
    slug: "cyber",
    shortDescription: "Ethical Hacking & VAPT Professional Program",
    description: "Become a certified security specialist. Master Vulnerability Assessment & Penetration Testing, network security, threat hunting, and security operations center (SOC) architectures through hands-on labs and real-world simulations.",
    thumbnail: "/images/cyber.png",
    category: "CYBER SECURITY",
    level: "Beginner to Advanced",
    price: 4999900, // ₹49,999 represented in paise
    discountPrice: 2999900, // ₹29,999 represented in paise
    currency: "INR",
    duration: "6 Months (240 Hours Live Practical)",
    bannerClass: "cyber-bg",
    bannerIcon: "fa-solid fa-user-secret",
    prereq: "Basic Networking and OS concepts",
    cert: "Netcradus Certified Ethical Hacker (NCEH) + CEH v12 Prep",
    highlights: [
      "Vulnerability Assessment & Penetration Testing",
      "Network & Web Application Security",
      "Bug Bounty & SIEM/SOC Tools"
    ],
    tools: ["Metasploit", "Wireshark", "Burp Suite Pro", "Nmap", "Kali Linux", "OWASP ZAP"],
    roles: ["Penetration Tester", "Cyber Security Analyst", "VAPT Engineer", "Security Consultant"],
    requirements: [
      "Basic Networking and OS concepts"
    ],
    learningOutcomes: [
      "Module 1: Information Gathering, Footprinting & Reconnaissance",
      "Module 2: Network Pentesting, Port Scanning & Vulnerability Analysis",
      "Module 3: Web Application Pentesting (OWASP Top 10)",
      "Module 4: System Hacking, Privilege Escalation & Persistence",
      "Module 5: Wireless Security, Social Engineering & Malware Analysis",
      "Module 6: Cloud Pentesting & Report Writing for Corporate Audits"
    ],
    skills: [
      "Metasploit", "Wireshark", "Burp Suite Pro", "Nmap", "Kali Linux", "OWASP ZAP"
    ],
    tags: ["Cyber Security", "VAPT", "Ethical Hacking", "SOC"],
    published: true,
    featured: true
  },
  {
    title: "Artificial Intelligence & ML with Generative AI",
    slug: "ai",
    shortDescription: "AI & Machine Learning With Generative AI",
    description: "Develop cutting-edge models. Master deep learning, computer vision, natural language processing, transformers, and large language models (LLMs) with PyTorch and LangChain.",
    thumbnail: "/images/ai.png",
    category: "ARTIFICIAL INTELLIGENCE",
    level: "Intermediate",
    price: 5999900, // ₹59,999 in paise
    discountPrice: 3499900, // ₹34,999 in paise
    currency: "INR",
    duration: "6 Months (240 Hours Live Coding)",
    bannerClass: "ai-bg",
    bannerIcon: "fa-solid fa-brain",
    prereq: "Python fundamentals & Basic Mathematics",
    cert: "Netcradus Certified AI & LLM Engineer",
    highlights: [
      "Deep Learning & Computer Vision",
      "Generative AI, RAG & LangChain",
      "Model Deployment & MLOps"
    ],
    tools: ["PyTorch", "TensorFlow", "OpenCV", "LangChain", "HuggingFace", "Docker"],
    roles: ["AI Engineer", "Machine Learning Specialist", "GenAI Developer", "Data Scientist"],
    requirements: [
      "Python fundamentals & Basic Mathematics"
    ],
    learningOutcomes: [
      "Module 1: Advanced Python, NumPy, Pandas & Data Wrangling",
      "Module 2: Supervised & Unsupervised Machine Learning Algorithms",
      "Module 3: Deep Neural Networks & Convolutional Neural Networks (CNN)",
      "Module 4: Natural Language Processing (NLP) & Transformers",
      "Module 5: Generative AI, Large Language Models (LLMs) & RAG",
      "Module 6: Deploying AI Models to AWS SageMaker & FastAPIs"
    ],
    skills: [
      "PyTorch", "TensorFlow", "OpenCV", "LangChain", "HuggingFace", "Docker"
    ],
    tags: ["Artificial Intelligence", "Machine Learning", "Generative AI", "Deep Learning"],
    published: true,
    featured: true
  },
  {
    title: "AWS, Azure & Google Cloud Masterclass",
    slug: "cloud",
    shortDescription: "AWS, Azure & Google Cloud Masterclass",
    description: "Architect secure multi-cloud environments. Prepare for AWS Solutions Architect & Azure Admin certifications with detailed modules on Terraform, Kubernetes, and Ansible.",
    thumbnail: "/images/cloud.png",
    category: "CLOUD COMPUTING",
    level: "Beginner to Pro",
    price: 3999900, // ₹39,999 in paise
    discountPrice: 2499900, // ₹24,999 in paise
    currency: "INR",
    duration: "5 Months (200 Hours Multi-Cloud)",
    bannerClass: "cloud-bg",
    bannerIcon: "fa-solid fa-cloud-arrow-up",
    prereq: "Basic Linux administration",
    cert: "AWS Certified Solutions Architect & Azure Admin Prep",
    highlights: [
      "AWS Solutions Architect Prep",
      "Azure Cloud Administration & GCP",
      "Terraform Infrastructure as Code"
    ],
    tools: ["AWS Console", "Azure Portal", "Terraform", "Kubernetes", "Docker", "Ansible"],
    roles: ["Cloud Solutions Architect", "Cloud Security Engineer", "DevOps Cloud Engineer"],
    requirements: [
      "Basic Linux administration"
    ],
    learningOutcomes: [
      "Module 1: Cloud Fundamentals & Virtual Private Cloud (VPC) Setup",
      "Module 2: AWS EC2, S3, IAM, Lambda & Auto Scaling Architecture",
      "Module 3: Azure Resource Manager, Active Directory & Cloud Security",
      "Module 4: Google Cloud Platform Compute & Storage Engine",
      "Module 5: Infrastructure as Code (IaC) using Terraform",
      "Module 6: Disaster Recovery, High Availability & Enterprise Migration"
    ],
    skills: [
      "AWS Console", "Azure Portal", "Terraform", "Kubernetes", "Docker", "Ansible"
    ],
    tags: ["Cloud Computing", "AWS", "Azure", "GCP", "DevOps", "Terraform"],
    published: true,
    featured: true
  },
  {
    title: "Data Analytics & Visualization Masterclass",
    slug: "data",
    shortDescription: "Data Analytics & Visualization with Python",
    description: "Extract insights from raw datasets. Master advanced SQL, Python analytics libraries, and create interactive business intelligence dashboards in PowerBI and Tableau.",
    thumbnail: "/images/data.png",
    category: "DATA SCIENCE",
    level: "Beginner",
    price: 2999900, // ₹29,999 in paise
    discountPrice: 1999900, // ₹19,999 in paise
    currency: "INR",
    duration: "4 Months (160 Hours Practical)",
    bannerClass: "data-bg",
    bannerIcon: "fa-solid fa-chart-line",
    prereq: "None required",
    cert: "Netcradus Certified Data Analyst",
    highlights: [
      "Advanced SQL, Python Data Science",
      "PowerBI & Tableau Dashboards",
      "Business Intelligence & Analytics"
    ],
    tools: ["Python", "Advanced SQL", "PowerBI", "Tableau", "Excel VBA", "Jupyter"],
    roles: ["Data Analyst", "Business Intelligence Engineer", "PowerBI Developer"],
    requirements: [
      "None required"
    ],
    learningOutcomes: [
      "Module 1: Advanced SQL Queries, Joins, Aggregations & Database Design",
      "Module 2: Python for Analytics (Pandas, Matplotlib, Seaborn)",
      "Module 3: Interactive Dashboarding with PowerBI & DAX Formulas",
      "Module 4: Business Intelligence & Tableau Visual Storytelling",
      "Module 5: Exploratory Data Analysis & Predictive Analytics",
      "Module 6: Capstone Project with Real Enterprise Financial Data"
    ],
    skills: [
      "Python", "Advanced SQL", "PowerBI", "Tableau", "Excel VBA", "Jupyter"
    ],
    tags: ["Data Analytics", "SQL", "Python", "PowerBI", "Business Intelligence"],
    published: true,
    featured: false
  },
  {
    title: "Full Stack MERN & Next.js Development",
    slug: "fullstack",
    shortDescription: "MERN Stack Development with Next.js",
    description: "Build production-ready web applications. Master React, Next.js, Node.js, Express, and MongoDB with TypeScript and Tailwind CSS.",
    thumbnail: "/images/fullstack.png",
    category: "FULL STACK DEVELOPMENT",
    level: "Beginner to Advanced",
    price: 4999900, // ₹49,999 in paise
    discountPrice: 2999900, // ₹29,999 in paise
    currency: "INR",
    duration: "6 Months (240 Hours Web Labs)",
    bannerClass: "fullstack-bg",
    bannerIcon: "fa-solid fa-layer-group",
    prereq: "Basic HTML & CSS knowledge",
    cert: "Netcradus Certified Full Stack Developer",
    highlights: [
      "MongoDB, Express, React, Node.js",
      "Next.js 14, TypeScript & Tailwind",
      "CI/CD Pipeline & Web Deployment"
    ],
    tools: ["React 18", "Next.js 14", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    roles: ["MERN Stack Developer", "Frontend Engineer", "Node.js Backend Developer"],
    requirements: [
      "Basic HTML & CSS knowledge"
    ],
    learningOutcomes: [
      "Module 1: Modern HTML5, CSS3, Flexbox, Grid & Responsive UI Design",
      "Module 2: JavaScript ES6+, Asynchronous JS, DOM & APIs",
      "Module 3: React.js Hooks, Context API, Redux Toolkit & Component Architecture",
      "Module 4: Node.js & Express.js REST API Architecture",
      "Module 5: MongoDB NoSQL Database, Mongoose ODM & Authentication",
      "Module 6: Full Stack Next.js App Deployment on Vercel & AWS S3"
    ],
    skills: [
      "React 18", "Next.js 14", "Node.js", "Express", "MongoDB", "Tailwind CSS"
    ],
    tags: ["Full Stack", "MERN Stack", "Next.js", "React", "Node.js"],
    published: true,
    featured: false
  },
  {
    title: "SOC Analyst & Incident Response Specialist",
    slug: "soc",
    shortDescription: "SOC Analyst & Network Defense Specialist",
    description: "Audit security logs and defend against ransomware. Master SIEM operations in Splunk Enterprise, malware forensics, threat intelligence, and protocol auditing with Wireshark.",
    thumbnail: "/images/soc.png",
    category: "CYBER SECURITY",
    level: "Intermediate",
    price: 4499900, // ₹44,999 in paise
    discountPrice: 2699900, // ₹26,999 in paise
    currency: "INR",
    duration: "5 Months (200 Hours SOC Lab)",
    bannerClass: "devops-bg",
    bannerIcon: "fa-solid fa-shield-virus",
    prereq: "Networking & Security Basics",
    cert: "Netcradus Certified SOC Security Analyst",
    highlights: [
      "Splunk Enterprise SIEM Operations",
      "Malware Analysis & Incident Response",
      "Threat Hunting & Forensic Analysis"
    ],
    tools: ["Splunk Enterprise", "Wireshark", "QRadar", "Elastic SIEM", "YARA", "Autopsy"],
    roles: ["L1/L2 SOC Analyst", "Incident Responder", "Threat Hunter"],
    requirements: [
      "Networking & Security Basics"
    ],
    learningOutcomes: [
      "Module 1: SOC Operations Overview & Threat Intelligence Landscape",
      "Module 2: Packet Analysis & Protocol Auditing with Wireshark",
      "Module 3: SIEM Log Analysis with Splunk & Rule Creation",
      "Module 4: Malware Forensics & Memory Analysis",
      "Module 5: Incident Playbooks, Containment & Remediation",
      "Module 6: Simulated Live Ransomware Attack Defense"
    ],
    skills: [
      "Splunk Enterprise", "Wireshark", "QRadar", "Elastic SIEM", "YARA", "Autopsy"
    ],
    tags: ["Cyber Security", "SOC", "Incident Response", "Splunk", "Threat Intelligence"],
    published: true,
    featured: false
  }
];

module.exports = coursesSeedData;
