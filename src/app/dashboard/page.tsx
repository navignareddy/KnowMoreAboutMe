"use client";

import { Navigation } from "@/components/navigation";
import { MagneticDock, DockIcon } from "@/components/ui/magnetic-dock";
import { OrbitCarousel } from "@/components/ui/orbit-carousel";
import { CircularGallery } from "@/components/circular-gallery";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

/**
 * PROJECT CATEGORIES (Orbit Carousel)
 * 
 * Four main categories of work:
 * - Research: Academic research, papers, studies
 * - Quant: Quantitative projects, financial models, algorithmic trading
 * - Personal Projects: Personal web/app development projects
 * - Academic Projects: Coursework, academic assignments, university projects
 */
const orbitImages = [
  { 
    id: 1, 
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=400&fit=crop&q=80", 
    label: "Research", // Academic research, papers, studies
    category: "research"
  },
  { 
    id: 2, 
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=400&fit=crop&q=80", 
    label: "Quant", // Financial modeling, algorithmic trading, quantitative analysis
    category: "quant"
  },
  { 
    id: 3, 
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=400&fit=crop&q=80", 
    label: "Personal Projects", // Personal web/app development, side projects
    category: "personal"
  },
  { 
    id: 4, 
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=400&fit=crop&q=80", 
    label: "Academic Projects", // Coursework, university assignments, academic projects
    category: "academic"
  },
];

/**
 * FEATURED PROJECTS (Circular Gallery)
 * 
 * Specific projects with GitHub links.
 * Each item should have:
 * - image: Screenshot or visual representation of the project
 * - text: Project name
 * - githubUrl: GitHub repository URL (will open on click)
 */
const galleryItems = [
  { 
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop", 
    text: "[Replace: Project Name 1]",
    githubUrl: "https://github.com/yourusername/project1" // Replace with actual GitHub URL
  },
  { 
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop", 
    text: "[Replace: Project Name 2]",
    githubUrl: "https://github.com/yourusername/project2" // Replace with actual GitHub URL
  },
  { 
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop", 
    text: "[Replace: Project Name 3]",
    githubUrl: "https://github.com/yourusername/project3" // Replace with actual GitHub URL
  },
  { 
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop", 
    text: "[Replace: Project Name 4]",
    githubUrl: "https://github.com/yourusername/project4" // Replace with actual GitHub URL
  },
  { 
    image: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=800&h=600&fit=crop", 
    text: "[Replace: Project Name 5]",
    githubUrl: "https://github.com/yourusername/project5" // Replace with actual GitHub URL
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-12 pt-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Explore My Work
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Interactive portfolio showcasing projects, skills, and achievements
          </p>
        </motion.section>

        {/* Orbit Carousel - Project Categories */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Project Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Broad types of work I do - Each category represents a different area of expertise
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <OrbitCarousel 
              images={orbitImages}
              speed={0.3}
              imageSize={200}
            />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            💡 Tip: Click on any category to explore related projects
          </p>
        </motion.section>

        {/* Circular Gallery - Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-8"
        >
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Specific projects I've completed - Real work with actual results and screenshots
            </p>
          </div>
          <div className="bg-gradient-to-br from-background via-card/30 to-background border border-border/50 rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Decorative gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/10 to-transparent pointer-events-none z-10" />
            
            <div className="h-[600px] relative z-0">
              <CircularGallery
                items={galleryItems}
                bend={3}
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
                className="relative"
              />
            </div>
            
            {/* Subtle border glow effect */}
            <div className="absolute inset-0 rounded-2xl border border-white/5 pointer-events-none z-10" />
          </div>
          <p className="text-sm text-muted-foreground text-center mt-4 italic">
            💡 Tip: Click on any project to view it on GitHub • Scroll horizontally to browse
          </p>
        </motion.section>

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8"
        >
          {[
            { title: "Projects", value: "50+", description: "Completed projects" },
            { title: "Technologies", value: "20+", description: "Skills mastered" },
            { title: "Experience", value: "5+", description: "Years of expertise" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="bg-card border border-border rounded-xl p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-xl font-semibold mb-1">{stat.title}</div>
              <div className="text-muted-foreground text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Magnetic Dock - Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-12"
        >
          <div className="text-center space-y-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold">Connect With Me</h2>
            <div className="flex justify-center items-center pt-4">
              <MagneticDock>
                <DockIcon
                  icon={<Github className="h-5 w-5" />}
                  href="https://github.com"
                />
                <DockIcon
                  icon={<Linkedin className="h-5 w-5" />}
                  href="https://linkedin.com"
                />
                <DockIcon
                  icon={<Twitter className="h-5 w-5" />}
                  href="https://twitter.com"
                />
                <DockIcon
                  icon={<Mail className="h-5 w-5" />}
                  href="mailto:placeholder@example.com"
                />
              </MagneticDock>
            </div>
          </div>
        </motion.section>
      </div>
    </main>
  );
}
