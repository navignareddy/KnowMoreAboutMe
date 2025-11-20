"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { User, Mail, Briefcase } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-10 md:mb-12"
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <User className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">About Me</h1>
          </div>

          {/* Profile Picture Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center mb-8 sm:mb-10 md:mb-12"
          >
            <div className="relative">
              <div className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300 hover:scale-105">
                <img
                  src="/profile.jpg"
                  alt="Profile Picture"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    (e.target as HTMLImageElement).src = "https://picsum.photos/seed/profile/400/400";
                  }}
                />
              </div>
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-primary rounded-full border-4 border-background flex items-center justify-center shadow-lg">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
            </div>
          </motion.div>
          
          <div className="prose prose-sm sm:prose-base md:prose-lg dark:prose-invert max-w-none">
            {/* Biography Section */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">About</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I'm <strong className="text-foreground">Navigna Reddy Gangumalla</strong>, a rising senior at Arizona State University, majoring in Computer Science with a minor in Business (4.0 GPA). My background spans software engineering, cloud infrastructure, data analytics, and research in ML/NLP.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                I've built full-stack and cloud-native applications, designed secure Java/JavaFX systems as a Software Engineering TA, developed a C# asset-management portal as an IT Intern with the City of Phoenix, and contributed to research in probabilistic circuits and LLM-based misinformation detection. I was also a <strong className="text-foreground">co-winner of the OpenAI x ASU Student Success Spark Challenge</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm open to opportunities in <strong className="text-foreground">Software Development, Research, Cloud Engineering, Quant, Data Analytics, Finance, and Marketing</strong>, intending to apply technology and strategy to create scalable, real-world impact.
              </p>
              <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-border">
                <p className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Let's connect!</p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <a 
                    href="mailto:nagnguma@asu.edu" 
                    className="flex items-center gap-2 text-sm sm:text-base text-primary hover:underline break-all sm:break-normal"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>nagnguma@asu.edu</span>
                  </a>
                  <a 
                    href="mailto:nagnguma@asu.edu" 
                    className="flex items-center gap-2 text-sm sm:text-base text-primary hover:underline break-all sm:break-normal"
                  >
                    <Mail className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
                    <span>nagnguma@asu.edu</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Areas of Interest */}
            <div className="bg-card border border-border rounded-xl p-4 sm:p-6 md:p-8">
              <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <Briefcase className="h-5 w-5 sm:h-6 sm:w-6 text-primary flex-shrink-0" />
                <h2 className="text-2xl sm:text-3xl font-bold">Areas of Interest</h2>
              </div>
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {[
                  "Software Development",
                  "Research",
                  "Cloud Engineering",
                  "Quantitative Analysis",
                  "Data Analytics",
                  "Finance",
                  "Marketing"
                ].map((area, index) => (
                  <span
                    key={index}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm bg-primary/10 text-primary border border-primary/20 rounded-lg font-medium"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
