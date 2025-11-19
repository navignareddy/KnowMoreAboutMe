"use client";

import { Navigation } from "@/components/navigation";
import { MagneticDock, DockIcon } from "@/components/ui/magnetic-dock";
import { OrbitCarousel } from "@/components/ui/orbit-carousel";
import { CircularGallery } from "@/components/circular-gallery";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, ArrowLeft } from "lucide-react";
import Link from "next/link";

const orbitImages = [
  { id: 1, url: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop", label: "Research Work" },
  { id: 2, url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop", label: "Quant Projects" },
  { id: 3, url: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop", label: "Web Development" },
  { id: 4, url: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=400&h=400&fit=crop", label: "Data Science" },
  { id: 5, url: "https://images.unsplash.com/photo-1760341332217-e6c24d1e142c?w=400&h=400&fit=crop", label: "Machine Learning" },
  { id: 6, url: "https://images.unsplash.com/photo-1495567720989-cebdbdd97913?w=400&h=400&fit=crop", label: "Innovation" },
];

const galleryItems = [
  { image: "https://picsum.photos/seed/1/800/600", text: "Featured Project 1" },
  { image: "https://picsum.photos/seed/2/800/600", text: "Featured Project 2" },
  { image: "https://picsum.photos/seed/3/800/600", text: "Featured Project 3" },
  { image: "https://picsum.photos/seed/4/800/600", text: "Featured Project 4" },
  { image: "https://picsum.photos/seed/5/800/600", text: "Featured Project 5" },
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
          <h2 className="text-3xl font-bold text-center mb-12">Project Categories</h2>
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
            <OrbitCarousel images={orbitImages} />
          </div>
        </motion.section>

        {/* Circular Gallery - Featured Projects */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="py-8"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
          <div className="bg-card border border-border rounded-2xl overflow-hidden">
            <div className="h-[600px]">
              <CircularGallery
                items={galleryItems}
                bend={3}
                borderRadius={0.05}
                scrollSpeed={2}
                scrollEase={0.05}
              />
            </div>
          </div>
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
