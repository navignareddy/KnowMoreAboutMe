"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain, BarChart3, Layers, Palette, Briefcase, FileCode } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Programming Languages",
    color: "text-blue-500",
    skills: [
      "Python", "Java", "C++", "JavaScript", "SQL", "Julia", 
      "C#", "Kotlin", "Go (Beginner)", "Bash", "HTML", "CSS"
    ],
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Machine Learning & AI",
    color: "text-purple-500",
    skills: [
      "PyTorch", "TensorFlow", "scikit-learn", "LLMs", "LangChain", 
      "Time Series Forecasting", "NLP", "Generative Models", 
      "Data Preprocessing", "Feature Engineering", "Cross-Validation", 
      "Model Evaluation"
    ],
  },
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Data Science & Analytics",
    color: "text-green-500",
    skills: [
      "NumPy", "pandas", "SciPy", "statsmodels", "Probability", 
      "Hypothesis Testing", "Regression", "Time Series (ARIMA/GARCH)", 
      "Optimization", "Linear Algebra", "R", "Data Visualization", 
      "Forecasting", "KPI Analysis"
    ],
  },
  {
    icon: <Layers className="h-6 w-6" />,
    title: "Frameworks & Libraries",
    color: "text-orange-500",
    skills: [
      "FastAPI", "Spring Boot", "Node.js", "React", "Flask", 
      "JavaFX", "Django"
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    color: "text-cyan-500",
    skills: [
      "AWS (EC2, S3, Lambda)", "GCP", "Docker", "Kubernetes", 
      "Jenkins", "CI/CD", "REST APIs", "Linux", "Git/GitHub", 
      "Hadoop", "Spark", "Parallel Computing"
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Databases & Storage",
    color: "text-pink-500",
    skills: [
      "PostgreSQL", "MySQL", "MongoDB", "Redis", "H2", 
      "Firebase", "ChromaDB"
    ],
  },
  {
    icon: <FileCode className="h-6 w-6" />,
    title: "Data & Visualization Tools",
    color: "text-yellow-500",
    skills: [
      "Jupyter", "JupyterLab", "Matplotlib", "Plotly", 
      "Tableau", "Power BI"
    ],
  },
  {
    icon: <Briefcase className="h-6 w-6" />,
    title: "Business & Management Tools",
    color: "text-indigo-500",
    skills: [
      "Excel (Advanced)", "Salesforce", "QuickBooks", "Asana", 
      "Trello", "Google Analytics", "SEO", "Budgeting", 
      "Operations Management", "Market Research", "Risk Assessment", 
      "Product Roadmapping", "UX Research"
    ],
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Research & Development Tools",
    color: "text-red-500",
    skills: [
      "LaTeX", "UML", "Agile Methodology", "OAuth 2.0", 
      "Microservice Architecture"
    ],
  },
];

export default function Skills() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Technical Skills</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={category.color || "text-primary"}>{category.icon}</div>
                  <h2 className="text-xl font-bold">{category.title}</h2>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: categoryIndex * 0.1 + skillIndex * 0.02 }}
                      className="px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
