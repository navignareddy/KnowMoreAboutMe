"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Code, Database, Cloud, GitBranch, Palette, Languages } from "lucide-react";

const skillCategories = [
  {
    icon: <Code className="h-6 w-6" />,
    title: "Programming Languages",
    skills: [
      { name: "[Language 1]", level: 90 },
      { name: "[Language 2]", level: 85 },
      { name: "[Language 3]", level: 80 },
      { name: "[Language 4]", level: 75 },
    ],
  },
  {
    icon: <Database className="h-6 w-6" />,
    title: "Databases",
    skills: [
      { name: "[Database 1]", level: 85 },
      { name: "[Database 2]", level: 80 },
      { name: "[Database 3]", level: 70 },
    ],
  },
  {
    icon: <Cloud className="h-6 w-6" />,
    title: "Cloud & DevOps",
    skills: [
      { name: "[Cloud Platform 1]", level: 80 },
      { name: "[Cloud Platform 2]", level: 75 },
      { name: "[Tool 1]", level: 85 },
    ],
  },
  {
    icon: <GitBranch className="h-6 w-6" />,
    title: "Frameworks & Libraries",
    skills: [
      { name: "[Framework 1]", level: 90 },
      { name: "[Framework 2]", level: 85 },
      { name: "[Library 1]", level: 80 },
    ],
  },
  {
    icon: <Palette className="h-6 w-6" />,
    title: "Design & UI/UX",
    skills: [
      { name: "[Design Tool 1]", level: 80 },
      { name: "[Design Tool 2]", level: 75 },
    ],
  },
  {
    icon: <Languages className="h-6 w-6" />,
    title: "Languages",
    skills: [
      { name: "[Language 1]", level: 100 },
      { name: "[Language 2]", level: 95 },
      { name: "[Language 3]", level: 80 },
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={categoryIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="text-primary">{category.icon}</div>
                  <h2 className="text-2xl font-bold">{category.title}</h2>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-secondary rounded-full h-2.5">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                          className="bg-primary h-2.5 rounded-full"
                        />
                      </div>
                    </div>
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
