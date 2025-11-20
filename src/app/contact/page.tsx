"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Download, Eye } from "lucide-react";

const contactLinks = [
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/navignareddy/",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    href: "https://github.com/navignareddy",
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-500/10",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    label: "Twitter",
    href: "https://twitter.com/navignareddy",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    href: "mailto:nagnguma@asu.edu",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export default function Contact() {
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
    <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12 pt-4 sm:pt-6 md:pt-8">
            <Mail className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Let's Connect</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-10 md:mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div className="min-w-0 flex-1">
                    <p className="text-xs sm:text-sm text-muted-foreground">Email</p>
                      <a href="mailto:nagnguma@asu.edu" className="text-sm sm:text-base hover:underline break-all sm:break-normal">
                        nagnguma@asu.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">School Email</p>
                      <a href="mailto:nagnguma@asu.edu" className="hover:underline">
                        nagnguma@asu.edu
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+16232837804" className="hover:underline">
                      +1 (623) 283-7804
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p>Phoenix, AZ, 85280</p>
                    <p>United States</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8"
            >
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Social Links</h2>
              
              <div className="space-y-4">
                {contactLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className={`flex items-center gap-4 p-4 ${link.bgColor} rounded-lg hover:scale-105 transition-transform`}
                  >
                    <div className={link.color}>{link.icon}</div>
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Resume & Transcripts Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Resume & Transcripts</h2>
            
            <div className="space-y-4">
              {/* Resume */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Resume</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handlePreview('resume.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary border border-primary/20 rounded-lg hover:bg-primary/20 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => handleDownload('resume.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
              
              {/* Transcripts */}
              <div className="p-4 bg-muted/30 rounded-lg">
                <h3 className="text-lg font-semibold mb-3">Transcripts</h3>
                <div className="flex flex-wrap gap-3">
                  <button
                    onClick={() => handlePreview('transcripts.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary/10 text-secondary-foreground border border-secondary/20 rounded-lg hover:bg-secondary/20 transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                    <span>Preview</span>
                  </button>
                  <button
                    onClick={() => handleDownload('transcripts.pdf')}
                    className="flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
                  >
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Additional Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-6 sm:mt-8 bg-card border border-border rounded-xl p-5 sm:p-6 md:p-8"
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Other Platforms</h2>
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://app.joinhandshake.com/profiles/acxdqr" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 rounded-lg font-medium transition-all hover:scale-105 hover:shadow-lg"
              >
                <span>Handshake</span>
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
