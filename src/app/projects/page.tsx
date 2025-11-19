"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { BookOpen, TrendingUp, FolderKanban, ExternalLink, Github } from "lucide-react";
import { CircularGallery } from "@/components/circular-gallery";

const projectSections = [
  {
    icon: <BookOpen className="h-6 w-6" />,
    title: "Research Work",
    color: "text-blue-500",
    projects: Array.from({ length: 3 }, (_, i) => ({
      title: `[Placeholder: Research Project ${i + 1}]`,
      description: "[Placeholder: Brief description of the research project, methodology, and key findings.]",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      link: "#",
      github: "#",
    })),
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Quant Work",
    color: "text-green-500",
    projects: Array.from({ length: 3 }, (_, i) => ({
      title: `[Placeholder: Quantitative Project ${i + 1}]`,
      description: "[Placeholder: Description of quantitative analysis, models used, and results achieved.]",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      link: "#",
      github: "#",
    })),
  },
  {
    icon: <FolderKanban className="h-6 w-6" />,
    title: "Projects",
    color: "text-purple-500",
    projects: Array.from({ length: 6 }, (_, i) => ({
      title: `[Placeholder: Project ${i + 1}]`,
      description: "[Placeholder: Project description, features, and impact.]",
      technologies: ["[Tech 1]", "[Tech 2]", "[Tech 3]"],
      link: "#",
      github: "#",
    })),
  },
];

export default function Projects() {
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
            <h1 className="text-5xl font-bold">Projects</h1>
          </div>

          {/* Circular Gallery */}
          <div className="mb-16 h-[600px]">
            <CircularGallery
              items={[
                { image: "https://picsum.photos/seed/1/800/600", text: "Featured Project 1" },
                { image: "https://picsum.photos/seed/2/800/600", text: "Featured Project 2" },
                { image: "https://picsum.photos/seed/3/800/600", text: "Featured Project 3" },
              ]}
            />
          </div>

          {/* Project Sections */}
          {projectSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: sectionIndex * 0.2 }}
              className="mb-16"
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
                    className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
                  >
                    <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      <a
                        href={project.link}
                        className="flex items-center gap-2 text-primary hover:underline"
                      >
                        <ExternalLink className="h-4 w-4" />
                        View Project
                      </a>
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                      >
                        <Github className="h-4 w-4" />
                        Code
                      </a>
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
