"use client";

import { Navigation } from "@/components/navigation";
import { MagneticDock, DockIcon } from "@/components/ui/magnetic-dock";
import { OrbitCarousel } from "@/components/ui/orbit-carousel";
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

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <Navigation />

      {/* Back to Home Button */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto mb-8 sm:mb-10 md:mb-12 pt-2 sm:pt-4"
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base bg-card border border-border rounded-lg hover:bg-accent transition-colors"
        >
          <ArrowLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          <span>Back to Home</span>
        </Link>
      </motion.div>

      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16 md:space-y-20">
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 sm:space-y-6"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent px-2">
            Explore My Work
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto px-2">
            Interactive portfolio showcasing projects, skills, and achievements
          </p>
        </motion.section>

        {/* Orbit Carousel - Project Categories */}
        <motion.section
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="py-6 sm:py-8"
        >
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3">Project Categories</h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-2">
              Broad types of work I do - Each category represents a different area of expertise
            </p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-4 sm:p-6 md:p-8 lg:p-12">
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

        {/* Quick Stats */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 py-6 sm:py-8"
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
              className="bg-card border border-border rounded-xl p-6 sm:p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-lg sm:text-xl font-semibold mb-1">{stat.title}</div>
              <div className="text-muted-foreground text-xs sm:text-sm">{stat.description}</div>
            </motion.div>
          ))}
        </motion.section>

        {/* Magnetic Dock - Connect Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="py-8 sm:py-10 md:py-12"
        >
          <div className="text-center space-y-6 sm:space-y-8 max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Connect With Me</h2>
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
