
export const siteData = {
  // ──────────────────────────────────────────────
  // PERSONAL INFO
  // ──────────────────────────────────────────────
  personal: {
    name: "Neha Nitin Gawali",
    title: "Technical Solutions Engineer @ HPE",
    heroHeading: {
      line1: "Empowering",
      highlight: "Innovation",
      line2: "at Scale.",
    },
    description:
      "Emerging technology professional with hands-on experience in Linux, Kubernetes, and Docker. Currently part of the HPE Storage team, contributing to cutting-edge enterprise solutions and storage infrastructure.",
    availableBadge: "Available for Projects",
    heroImage: "/me2.jpg",
    heroImageAlt: "Neha Nitin Gawali - Technical Solutions Engineer",
    resumeUrl: "/Neha_gawali_resume.pdf",
    email: "nehaagawali5@gmail.com",
  },

  // ──────────────────────────────────────────────
  // SOCIAL LINKS
  // ──────────────────────────────────────────────
  socialLinks: [
    { platform: "Email", url: "mailto:nehaagawali5@gmail.com", icon: "alternate_email" },
    { platform: "LinkedIn", url: "https://www.linkedin.com/in/neha-gawali-0a8a06205", icon: "LinkedIn" },
    { platform: "GitHub", url: "https://github.com/GawaliNeha", icon: "GitHub" },
  ],

  // ──────────────────────────────────────────────
  // NAVIGATION LINKS
  // ──────────────────────────────────────────────
  navLinks: [
    { label: "Work", href: "#work" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Publications", href: "#publications" },
  ],

  // ──────────────────────────────────────────────
  // SKILLS / EXPERTISE CARDS
  // ──────────────────────────────────────────────
  skills: [
    {
      icon: "cloud",
      title: "Cloud & Infrastructure",
      description: "Hands-on experience with Linux, Kubernetes, and Docker for scalable deployments.",
    },
    {
      icon: "code",
      title: "Software Development",
      description: "Building robust applications using Java, Spring Boot, and Flutter.",
    },
    {
      icon: "settings",
      title: "System Administration",
      description: "Managing server components and multi-layered enterprise infrastructure.",
    },
    {
      icon: "science",
      title: "Research & AI",
      description: "Published researcher focusing on AI/ML applications in cybersecurity and dark web analysis.",
    },
  ],

  // ──────────────────────────────────────────────
  // TOOL ICONS (shown in skills section header)
  // ──────────────────────────────────────────────
  tools: [
    {
      name: "Docker",
      iconUrl: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg",
    },
    {
      name: "Kubernetes",
      iconUrl: "https://www.vectorlogo.zone/logos/kubernetes/kubernetes-icon.svg",
    },
    {
      name: "Java",
      iconUrl: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
    },
    {
      name: "Linux",
      iconUrl: "https://www.vectorlogo.zone/logos/linux/linux-icon.svg",
    },
  ],

  // ──────────────────────────────────────────────
  // LANGUAGES & PROFICIENCY
  // ──────────────────────────────────────────────
  languages: [
    { name: "English", level: "Professional", proficiency: 90 },
    { name: "Hindi", level: "Native", proficiency: 100 },
    { name: "Marathi", level: "Native", proficiency: 100 },
  ],

  // ──────────────────────────────────────────────
  // TESTIMONIAL (the quote card next to languages)
  // ──────────────────────────────────────────────
  testimonial: {
    quote:
      "Neha consistently delivers exceptional technical solutions, balancing innovation with infrastructure stability perfectly.",
    author: "HPE Superstar Performer",
    role: "Q3 and Q4 2025 Top Performer",
  },

  // ──────────────────────────────────────────────
  // SELECTED PROJECTS
  // ──────────────────────────────────────────────
  projects: [
    {
      category: "FinTech Management",
      title: "JavaFinTrack",
      description:
        "Comprehensive fee report management system built with Java, AWT, Swing, and MySQL, featuring secure admin and accountant authentication and data encryption.",
      image:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=2000&auto=format&fit=crop",
      imageAlt: "Financial tracking software dashboard",
      link: "https://github.com/GawaliNeha/CodeClause_FeeReport",
    },
  ],

  // ──────────────────────────────────────────────
  // WORK EXPERIENCE
  // ──────────────────────────────────────────────
  experience: [
    {
      dateRange: "Sep 2024 — Present",
      title: "Technical Solutions Engineer",
      company: "Hewlett Packard Enterprise",
      description:
        "Specializing in HPE Alletra MP and Storage Area Network (SAN) solutions. Awarded Q4 2025 Superstar Performer for consistent high performance.",
      isCurrent: true,
    },
    {
      dateRange: "Feb 2024 — Aug 2024",
      title: "Intern",
      company: "Hewlett Packard Enterprise",
      description:
        "Developed 'Infra Stack' projects using Linux, Kubernetes, and Docker. Orchestrated multi-layered infrastructure across Windows, Ubuntu, and VMware.",
      isCurrent: false,
    },

  ],

  // ──────────────────────────────────────────────
  // EDUCATION
  // ──────────────────────────────────────────────
  education: [
    {
      degree: "B.E. Computer Engineering",
      institution: "Savitribai Phule Pune University",
      year: "2020 - 2024",
      isCurrent: false,
    },
  ],

  // ──────────────────────────────────────────────
  // PUBLICATIONS
  // ──────────────────────────────────────────────
  publications: [
    {
      icon: "security",
      year: "2024",
      title: "AI and ML Application In Dark Web Crime Recognition",
      journal: "IGI Global (Scopus)",
      description:
        "A research paper exploring the use of AI/ML technologies for recognizing crimes in the untraceable environments of the dark web.",
      isCurrent: true,
      link: "https://www.igi-global.com/gateway/chapter/307874",
    },
    {
      icon: "eco",
      year: "2024",
      title: "Tree Plantation Management In Agriculture Sector",
      journal: "IJSREM",
      description:
        "Optimizing Mahogany tree growth conditions using satellite technology and real-time data insights for sustainable agroforestry.",
      isCurrent: false,
      link: "https://ijsrem.com/download/tree-plantation-management-in-agriculture-sector/",
    },
  ],

  // ──────────────────────────────────────────────
  // FOOTER / CONTACT
  // ──────────────────────────────────────────────
  footer: {
    heading: "Let's innovate together.",
    subtext:
      "Bridging technology and growth through cloud-native solutions and community-focused innovation.",
    email: "nehaagawali5@gmail.com",
    copyright: `© ${new Date().getFullYear()} Neha Nitin Gawali. All rights reserved.`,
  },
};
