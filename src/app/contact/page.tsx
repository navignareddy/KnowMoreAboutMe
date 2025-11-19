"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter, Phone, MapPin, Download } from "lucide-react";

const contactLinks = [
  {
    icon: <Linkedin className="h-6 w-6" />,
    label: "LinkedIn",
    href: "#",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: <Github className="h-6 w-6" />,
    label: "GitHub",
    href: "#",
    color: "text-gray-700 dark:text-gray-300",
    bgColor: "bg-gray-500/10",
  },
  {
    icon: <Twitter className="h-6 w-6" />,
    label: "Twitter",
    href: "#",
    color: "text-blue-400",
    bgColor: "bg-blue-400/10",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    label: "Email",
    href: "mailto:placeholder@example.com",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
];

export default function Contact() {
  const handleDownload = (file: string) => {
    const link = document.createElement('a');
    link.href = `/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12 pt-8">
            <Mail className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Let's Connect</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a href="mailto:placeholder@example.com" className="hover:underline">
                      placeholder@example.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <a href="tel:+1234567890" className="hover:underline">
                      +1 (234) 567-890
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Address</p>
                    <p>[Placeholder: Street Address]</p>
                    <p>[Placeholder: City, State ZIP Code]</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Social Links</h2>
              
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

          {/* Download Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-card border border-border rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Downloads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button
                onClick={() => handleDownload('resume.pdf')}
                className="flex items-center justify-center gap-3 p-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download Resume</span>
              </button>
              
              <button
                onClick={() => handleDownload('transcripts.pdf')}
                className="flex items-center justify-center gap-3 p-4 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Download className="h-5 w-5" />
                <span>Download Transcripts</span>
              </button>
            </div>
          </motion.div>

          {/* Additional Platforms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 bg-card border border-border rounded-xl p-8"
          >
            <h2 className="text-2xl font-bold mb-4">Other Platforms</h2>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="text-primary hover:underline">Handshake</a>
              <a href="#" className="text-primary hover:underline">[Other Platform 1]</a>
              <a href="#" className="text-primary hover:underline">[Other Platform 2]</a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
