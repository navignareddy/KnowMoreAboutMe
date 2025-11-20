"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, FolderKanban, Briefcase, GraduationCap } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

const projectSections = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Research",
    category: "research",
    color: "text-blue-500",
    projects: [
      {
        title: "Probabilistic Circuits, Research Project",
        description: "Designed probabilistic circuit frameworks to identify minimal feature subsets for interpretable machine learning models. Implemented gradient-based optimization algorithms in Julia, enabling efficient high-dimensional inference. Achieved 85% predictive accuracy using only 60% of features, improving interpretability and computational efficiency.",
        technologies: ["Julia", "Probabilistic Circuits", "Machine Learning", "Optimization Algorithms", "Feature Selection"],
        link: "#",
        github: "#",
        date: "May 2025 - Aug 2025",
        achievements: [
          "85% predictive accuracy using only 60% of features",
          "Implemented gradient-based optimization algorithms in Julia",
          "Improved interpretability and computational efficiency"
        ]
      },
      {
        title: "SocialSense: Multi-Agent Social Media Debate Analysis & Moderation",
        description: "Developed a multi-agent debate simulation (Mediator, Opponent, Fact-Checker) using LangChain and CrewAI for social media analysis. Built an LLM-driven moderation pipeline leveraging ChromaDB vector stores, achieving 92% misinformation detection accuracy. Deployed a real-time bias monitoring engine that processed 10K+ interactions per hour with 85% agreement with human evaluators.",
        technologies: ["LangChain", "CrewAI", "ChromaDB", "LLM", "Python", "Multi-Agent Systems", "NLP"],
        link: "#",
        github: "#",
        date: "Nov 2024 - Mar 2025",
        achievements: [
          "92% misinformation detection accuracy",
          "Processed 10K+ interactions per hour",
          "85% agreement rate with human evaluators"
        ]
      },
    ],
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Quant",
    category: "quant",
    color: "text-green-500",
    projects: [
      {
        title: "Behavioral Pattern Analysis of Retail Investors",
        description: "Examined trading frequency, diversity, and performance across 500 retail investor portfolios. Identified 68% momentum-driven trades with 22% average drawdown using descriptive statistical analysis.",
        technologies: ["Python", "R", "seaborn", "Power BI", "Statistical Analysis", "Portfolio Analysis"],
        link: "#",
        github: "#",
        date: "Jun 2025 - Sept 2025",
        achievements: [
          "Analyzed 500 retail investor portfolios",
          "Identified 68% momentum-driven trades",
          "22% average drawdown analysis"
        ]
      },
      {
        title: "Market Sentiment and Asset Volatility Correlation Study",
        description: "Analyzed correlations between daily Twitter sentiment and equity volatility indices (VIX, SPY) using Pearson and Spearman tests. Found a significant negative correlation (r = -0.42, p < 0.05) indicating sentiment-driven volatility during market stress periods.",
        technologies: ["Python", "pandas", "statsmodels", "Tableau", "Time Series Analysis", "Sentiment Analysis", "Correlation Analysis"],
        link: "#",
        github: "#",
        date: "May 2025 - Aug 2025",
        achievements: [
          "Significant negative correlation (r = -0.42, p < 0.05)",
          "Analyzed Twitter sentiment vs. VIX and SPY",
          "Identified sentiment-driven volatility patterns"
        ]
      },
      {
        title: "Algorithmic Bias Detection in Loan Approval Systems",
        description: "Conducted hypothesis tests and ANOVA to evaluate fairness in lending datasets across demographic groups. Detected bias in 13% of applications and reduced false denials by 20% using logistic regression with fairness constraints.",
        technologies: ["Python", "scikit-learn", "NumPy", "Matplotlib", "Statistical Testing", "Fairness Metrics", "Machine Learning"],
        link: "#",
        github: "#",
        date: "Jan 2025 - May 2025",
        achievements: [
          "Detected bias in 13% of applications",
          "Reduced false denials by 20%",
          "Applied fairness constraints to logistic regression"
        ]
      },
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Personal Projects",
    category: "personal",
    color: "text-purple-500",
    projects: [
      {
        title: "Distributed Content Delivery Platform",
        description: "Designed and developed a scalable content delivery platform to address slow response times in content-heavy applications, enabling faster and more reliable delivery of large files to multiple users simultaneously. Implemented Redis caching layers and asynchronous task orchestration in Docker containerized AWS microservices architecture. Optimized response times by 30% through intelligent caching strategies and load balancing across distributed containers, handling thousands of concurrent requests with automated scaling capabilities.",
        technologies: ["Java", "Spring Boot", "Redis", "PostgreSQL", "Docker", "AWS EC2", "Microservices", "Load Balancing"],
        link: "#",
        github: "#",
        date: "June 2025 - Sept 2025",
        achievements: [
          "Optimized response times by 30% through intelligent caching",
          "Handled thousands of concurrent requests with auto-scaling",
          "Implemented Docker containerized microservices architecture",
          "Designed comprehensive monitoring dashboard"
        ]
      },
      {
        title: "Real-Time Study Group Platform",
        description: "Developed a comprehensive collaborative learning platform with sub-100ms latency, featuring real-time document editing, video conferencing, and interactive whiteboards using WebRTC and Canvas API. Implemented Redis session management and secure authentication protocols, achieving stable concurrent access for 50+ users. Built live document sharing capabilities with conflict resolution and real-time synchronization across multiple client connections.",
        technologies: ["React", "Node.js", "Socket.io", "PostgreSQL", "Redis", "WebRTC", "Canvas API", "Real-time Synchronization"],
        link: "#",
        github: "#",
        date: "Apr 2025 - May 2025",
        achievements: [
          "Achieved sub-100ms latency for real-time features",
          "Supported 50+ concurrent users with stable performance",
          "Implemented video chat and shared whiteboards",
          "Built live document sharing with conflict resolution"
        ]
      },
      {
        title: "SocialSense: Multi-Agent Debate Analysis System",
        description: "Built a sophisticated multi-agent system (Mediator, Opponent, Fact-Checker) to analyze debates and detect misinformation using advanced LLM technologies. Developed LLM-driven moderation pipeline leveraging ChromaDB vector stores and custom retrieval pipelines for scalable content analysis. Achieved 92% detection accuracy across 10K+ hourly interactions using LLM embeddings, vector databases, and real-time bias monitoring with 85% agreement rate compared to human moderators.",
        technologies: ["Python", "LangChain", "CrewAI", "Redis", "PostgreSQL", "ChromaDB", "LLM", "Vector Databases", "NLP"],
        link: "#",
        github: "#",
        date: "Dec 2024 - Feb 2025",
        achievements: [
          "92% misinformation detection accuracy",
          "Processed 10K+ interactions per hour",
          "85% agreement rate with human evaluators",
          "Implemented distributed agent architecture for scalability"
        ]
      },
      {
        title: "Biking Paths Finder",
        description: "Developed an intelligent route optimization platform for cyclists with personalized recommendations based on user preferences, fitness levels, and cycling history. Integrated real-time traffic data from Google Maps API and implemented social features for the cycling community including route sharing, group rides, and performance tracking. Built secure authentication using OAuth 2.0 and real-time analytics dashboard for user insights.",
        technologies: ["FastAPI", "GraphQL", "MongoDB", "Google Maps API", "OAuth 2.0", "React", "Real-time Analytics"],
        link: "#",
        github: "#",
        date: null,
        achievements: [
          "Real-time traffic integration with Google Maps",
          "Personalized route recommendations using ML algorithms",
          "Social features for cycling community engagement",
          "OAuth 2.0 security implementation"
        ]
      },
      {
        title: "AI CHALLENGE: Ethical Policy Simulation Game",
        description: "Designed and developed a browser-based simulation game where users engage with AI agents to make refugee education policy decisions within a budget constraint of 14 units. Integrated multimodal interaction supporting both voice and text input, advanced agent dialogue modeling, and real-time group voting to simulate diverse ideological deliberations and consensus-building. Automated generation and email delivery of personalized evaluation reports summarizing user choices, group consensus, and ethical reflections.",
        technologies: ["React.js", "Node.js", "API", "Tailwind CSS", "AI Agents", "Multimodal Interaction", "Voice Recognition"],
        link: "#",
        github: "#",
        date: "Apr 2025 - Apr 2025",
        achievements: [
          "Integrated multimodal interaction (voice/text)",
          "Implemented real-time group voting system",
          "Automated personalized evaluation reports via email",
          "Designed agent dialogue modeling for policy simulation"
        ]
      },
    ],
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Academic and Professional Projects",
    category: "academic",
    color: "text-orange-500",
    projects: [
      {
        title: "ASU Help System Software Engineering Project",
        description: "Engineered a secure JavaFX-based Help System enabling multi-role access control (Admin, Instructor, Student) with encrypted credentials and user data using the Bouncy Castle cryptography library. Designed and implemented a modular architecture with integrated H2 database for dynamic help article storage, retrieval, and role-based permission management. Developed backup, restore, and grouping functionalities allowing administrators to manage categorized help articles and synchronize updates across course versions.",
        technologies: ["Java", "JavaFX", "GitHub", "H2 Database", "Bouncy Castle", "JUnit", "Agile Methodology"],
        link: "#",
        github: "#",
        date: "Aug 2024 - Nov 2024",
        achievements: [
          "Implemented OTP-based authentication and access protocols",
          "Created automated test suites using JUnit",
          "Collaborated with a team of 4 using Agile sprints",
          "Ensured HIPAA-compliant secure data handling practices"
        ]
      },
      {
        title: "RaspberryPi with Python Programming",
        description: "Managed the development of a fanny pack for the blind as part of a team of four. Wrote Python code for the program and developed a comprehensive Gantt chart-based team schedule that included quality measurement for each major milestone using Microsoft Project. Applied problem-solving and time management skills to deliver the project successfully.",
        technologies: ["Python", "Project Management", "Microsoft Project", "Google Drive", "RaspberryPi"],
        link: "#",
        github: "#",
        date: "Sep 2023 - Nov 2023",
        achievements: [
          "Developed assistive technology solution for visually impaired users",
          "Created detailed project timeline with quality metrics",
          "Led team of 4 through complete development lifecycle"
        ]
      },
      {
        title: "City of Phoenix | Asset Management System",
        description: "Built a C# and SQL-based asset management system for 150+ staff at City of Phoenix, integrating Python automation scripts for workflow efficiency. Engineered a role-based desktop application supporting Admin, Distributor, and Technician interfaces with encrypted credentials. Automated system monitoring and report generation using Python scripts, cutting manual maintenance efforts by 35%. Implemented automated email alerts for 500+ request updates weekly, increasing cross-department communication speed by 40%.",
        technologies: ["C#", "MAMP", "Windows NT", "SQL", "Python", "Desktop Application", "Automation"],
        link: "#",
        github: "#",
        date: "Jan 2025 - May 2025",
        achievements: [
          "Decreased processing time by 40%",
          "Cut manual maintenance efforts by 35%",
          "Automated email alerts for 500+ weekly updates",
          "Improved cross-department communication by 40%"
        ]
      },
      {
        title: "PatientConnect360 | Scrum Master & Full Stack Developer",
        description: "Collaborated with a 5-member Agile team to develop a secure, HIPAA-compliant home-health communication and scheduling platform using React.js, TypeScript, Material UI, and React Native. Built RESTful APIs with FastAPI and PostgreSQL, implementing JWT-based authentication and exploring AI-driven reminder features to enhance user engagement. Streamlined CI/CD workflows using GitHub and Vercel while maintaining comprehensive project documentation.",
        technologies: ["React.js", "TypeScript", "Material UI", "React Native", "FastAPI", "PostgreSQL", "JWT", "GitHub", "Vercel", "CI/CD"],
        link: "#",
        github: "#",
        date: "Aug 2025 - Present",
        achievements: [
          "Developed HIPAA-compliant healthcare platform",
          "Built RESTful APIs with JWT authentication",
          "Implemented AI-driven reminder features",
          "Streamlined CI/CD workflows with automated deployment"
        ]
      },
      {
        title: "Principled Innovation Academy Intern",
        description: "Fine-tuned large language models on healthcare datasets to enhance contextual precision and robustness. Led data curation and tokenization pipelines using PyTorch and Hugging Face to optimize model training throughput. Collaborated with ML researchers to evaluate trustworthy AI metrics, focusing on bias detection and fairness consistency in healthcare AI applications.",
        technologies: ["PyTorch", "Hugging Face", "Machine Learning", "Generative AI", "NLP", "Bias Detection", "Fairness Metrics"],
        link: "#",
        github: "#",
        date: "May 2025 - Aug 2025",
        achievements: [
          "Fine-tuned LLMs for healthcare applications",
          "Optimized model training throughput",
          "Evaluated trustworthy AI metrics and bias detection",
          "Enhanced contextual precision in healthcare datasets"
        ]
      },
    ],
  },
];

function ProjectsContent() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  useEffect(() => {
    const category = searchParams.get("category");
    setSelectedCategory(category);
    
    // Scroll to the filtered section if category is provided
    if (category) {
      setTimeout(() => {
        const element = document.getElementById(`section-${category}`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 300);
    }
  }, [searchParams]);

  // Filter sections based on selected category
  const filteredSections = selectedCategory
    ? projectSections.filter((section) => section.category === selectedCategory)
    : projectSections;

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <FolderKanban className="h-8 w-8 text-primary" />
            <div>
              <h1 className="text-5xl font-bold">Projects</h1>
              {selectedCategory && (
                <p className="text-muted-foreground mt-2">
                  Showing: {projectSections.find((s) => s.category === selectedCategory)?.title}
                </p>
              )}
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-3 mb-8">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full border transition-all ${
                !selectedCategory
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-card border-border hover:border-primary/50"
              }`}
            >
              All Projects
            </motion.button>
            {projectSections.map((section) => (
              <motion.button
                key={section.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setSelectedCategory(section.category!)}
                className={`px-4 py-2 rounded-full border transition-all flex items-center gap-2 ${
                  selectedCategory === section.category
                    ? `${section.color.replace("text-", "bg-")} text-white border-transparent`
                    : "bg-card border-border hover:border-primary/50"
                }`}
              >
                <span className={selectedCategory === section.category ? "" : section.color}>
                  {section.icon}
                </span>
                {section.title}
              </motion.button>
            ))}
          </div>

          {/* Project Sections */}
          {filteredSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              id={`section-${section.category}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="mb-16 scroll-mt-32"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className={section.color}>{section.icon}</div>
                <h2 className="text-3xl font-bold">{section.title}</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.projects.map((project, projectIndex) => (
                  <motion.div
                    key={projectIndex}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: projectIndex * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 flex flex-col"
                  >
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3 className="text-xl font-bold flex-1">{project.title}</h3>
                      {(project as any).date && (
                        <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded whitespace-nowrap flex-shrink-0">
                          {(project as any).date}
                        </span>
                      )}
                    </div>
                    <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    {(project as any).achievements && (
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {((project as any).achievements as string[]).map((achievement, achIndex) => (
                            <li key={achIndex} className="text-xs text-muted-foreground flex items-start">
                              <span className="text-primary mr-2">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
}

export default function Projects() {
  return (
    <Suspense fallback={
      <main className="min-h-screen bg-background pt-32 pb-20 px-4">
        <Navigation />
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <FolderKanban className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>
          <div className="text-center text-muted-foreground">Loading...</div>
        </div>
      </main>
    }>
      <ProjectsContent />
    </Suspense>
  );
}
