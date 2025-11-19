"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, ArrowRight } from "lucide-react";
import Link from "next/link";
import SphereImageGrid, { type ImageData } from "@/components/sphere-image-grid";

const sampleImages: ImageData[] = [
  { id: "1", src: "https://picsum.photos/seed/1/400/400", alt: "Project 1" },
  { id: "2", src: "https://picsum.photos/seed/2/400/400", alt: "Project 2" },
  { id: "3", src: "https://picsum.photos/seed/3/400/400", alt: "Project 3" },
  { id: "4", src: "https://picsum.photos/seed/4/400/400", alt: "Project 4" },
  { id: "5", src: "https://picsum.photos/seed/5/400/400", alt: "Project 5" },
  { id: "6", src: "https://picsum.photos/seed/6/400/400", alt: "Project 6" },
  { id: "7", src: "https://picsum.photos/seed/7/400/400", alt: "Project 7" },
  { id: "8", src: "https://picsum.photos/seed/8/400/400", alt: "Project 8" },
  { id: "9", src: "https://picsum.photos/seed/9/400/400", alt: "Project 9" },
  { id: "10", src: "https://picsum.photos/seed/10/400/400", alt: "Project 10" },
];

export default function Home() {
  const handleDownload = (file: string) => {
    // Placeholder for download functionality
    const link = document.createElement('a');
    link.href = `/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Showcasing achievements, projects, and professional experience
            </p>
            
            {/* Explore Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <Link
                href="/dashboard"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <span>Explore My Work</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>

            {/* Download Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <button
                onClick={() => handleDownload('resume.pdf')}
                className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </button>
              <button
                onClick={() => handleDownload('transcripts.pdf')}
                className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <GraduationCap className="h-5 w-5" />
                <span>Download Transcripts</span>
              </button>
            </div>
          </motion.div>

          {/* 3D Image Sphere */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-20"
          >
            <SphereImageGrid
              images={sampleImages}
              containerSize={600}
              sphereRadius={250}
              autoRotate={true}
              autoRotateSpeed={0.3}
              dragSensitivity={0.8}
            />
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            <Link href="/about" className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">About Me</h3>
              <p className="text-muted-foreground">Learn more about my background and interests</p>
            </Link>
            <Link href="/projects" className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Projects</h3>
              <p className="text-muted-foreground">Explore my research, quant work, and projects</p>
            </Link>
            <Link href="/contact" className="p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-bold mb-2">Let's Connect</h3>
              <p className="text-muted-foreground">Get in touch via LinkedIn, GitHub, or email</p>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
