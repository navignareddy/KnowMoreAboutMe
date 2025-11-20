"use client";

import { motion } from "framer-motion";
import { Download, GraduationCap, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import SphereImageGrid, { type ImageData } from "@/components/sphere-image-grid";
import { CursorHint } from "@/components/cursor-hint";

const sampleImages: ImageData[] = [
  { id: "1", src: "https://picsum.photos/seed/1/400/400", alt: "Home", href: "/", label: "Home" },
  { id: "2", src: "https://picsum.photos/seed/2/400/400", alt: "About", href: "/about", label: "About" },
  { id: "3", src: "https://picsum.photos/seed/3/400/400", alt: "Projects", href: "/projects", label: "Projects" },
  { id: "4", src: "https://picsum.photos/seed/4/400/400", alt: "Experience", href: "/experience", label: "Experience" },
  { id: "5", src: "https://picsum.photos/seed/5/400/400", alt: "Research", href: "/projects", label: "Research" },
  { id: "6", src: "https://picsum.photos/seed/6/400/400", alt: "Education", href: "/education", label: "Education" },
  { id: "7", src: "https://picsum.photos/seed/7/400/400", alt: "Skills", href: "/skills", label: "Skills" },
  { id: "8", src: "https://picsum.photos/seed/8/400/400", alt: "Certifications", href: "/certifications", label: "Certifications" },
  { id: "9", src: "https://picsum.photos/seed/9/400/400", alt: "Leadership", href: "/leadership", label: "Leadership" },
  { id: "10", src: "https://picsum.photos/seed/10/400/400", alt: "Contact", href: "/contact", label: "Contact" },
];

export default function Home() {
  const handleDownload = (file: string) => {
    const link = document.createElement('a');
    link.href = `/${file}`;
    link.download = file;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePreview = (file: string) => {
    window.open(`/${file}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <main className="min-h-screen bg-background relative">
      {/* Cursor Hint */}
      <CursorHint 
        message="Click on the bubbles to explore sections" 
        showDelay={2000}
        hideAfterClick={true}
      />
      
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

            {/* Resume & Transcripts Section */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {/* Resume */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handlePreview('resume.pdf')}
                  className="flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <Eye className="h-5 w-5" />
                  <span>Preview Resume</span>
                </button>
                <button
                  onClick={() => handleDownload('resume.pdf')}
                  className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-5 w-5" />
                  <span>Download Resume</span>
                </button>
              </div>
              
              {/* Transcripts */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handlePreview('transcripts.pdf')}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg hover:bg-secondary/20 transition-colors"
                >
                  <Eye className="h-5 w-5" />
                  <span>Preview Transcripts</span>
                </button>
                <button
                  onClick={() => handleDownload('transcripts.pdf')}
                  className="flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Download Transcripts</span>
                </button>
              </div>
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
