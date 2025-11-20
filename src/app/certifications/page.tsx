"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Award, FileText, ExternalLink, Eye, Download } from "lucide-react";

export default function Certifications() {
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
            <Award className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Certifications & Licenses</h1>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-7 w-7" />
              Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* AWS Certified Solutions Architect - Associate */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  AWS Certified Solutions Architect - Associate
                </h3>
                <p className="text-muted-foreground mb-3">
                  Amazon Web Services (AWS)
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Jun 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Expires: Jun 2028
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/AWSsolution.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/AWSsolution.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* AWS Certified Cloud Practitioner */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  AWS Certified Cloud Practitioner
                </h3>
                <p className="text-muted-foreground mb-3">
                  Amazon Web Services (AWS)
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: May 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Expires: May 2028
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/AWSCloud.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/AWSCloud.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* ASU/ AZNext Full-Stack Developer Certification */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  ASU/ AZNext Full-Stack Developer Certification with Cognizant
                </h3>
                <p className="text-muted-foreground mb-3">
                  Cognizant
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Sep 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Frontend, Backend & API Skills
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/full-stack.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/full-stack.jpeg"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* MATLAB Onramp */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  MATLAB Onramp
                </h3>
                <p className="text-muted-foreground mb-3">
                  MathWorks
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Mar 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/matlab.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/matlab.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* Human Research (IRB) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  Human Research (IRB - Social & Behavioral Research, Group 2)
                </h3>
                <p className="text-muted-foreground mb-3">
                  CITI Program
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Jan 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Credential ID: 67326417 · Expires: Jan 2029
                </p>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/citi.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/citi.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* ASU Information Security Fundamentals Training 2024 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  ASU Information Security Fundamentals Training 2024 Completion
                </h3>
                <p className="text-muted-foreground mb-3">
                  Arizona State University
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Aug 2024</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/sec2024.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/sec2024.jpeg"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* ASU Information Security Fundamentals Training 2023 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  ASU Information Security Fundamentals Training
                </h3>
                <p className="text-muted-foreground mb-3">
                  Arizona State University
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Issued: Oct 2023</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/sec2023.jpeg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/sec2023.jpeg"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>

              {/* PI Academy Spring 2025 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <Award className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-2">
                  PI Academy Spring 2025
                </h3>
                <p className="text-muted-foreground mb-3">
                  Arizona State University
                </p>
                <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                  <span>Spring 2025</span>
                  <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                    Valid
                  </span>
                </div>
                <div className="flex gap-2 mt-4">
                  <a
                    href="/certifications/pia.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors text-sm"
                  >
                    <Eye className="h-4 w-4" />
                    View
                  </a>
                  <a
                    href="/certifications/pia.pdf"
                    download
                    className="flex items-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm"
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
