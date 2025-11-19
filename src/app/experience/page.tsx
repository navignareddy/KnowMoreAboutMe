"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Work Experience</h1>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {[1, 2, 3, 4].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

                  <div className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Building2 className="h-5 w-5 text-primary" />
                          <h3 className="text-2xl font-bold">
                            [Placeholder: Job Title]
                          </h3>
                        </div>
                        <p className="text-lg text-primary font-semibold mb-2">
                          [Placeholder: Company Name]
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>[Placeholder: Location]</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>[Placeholder: Start Date] - [Placeholder: End Date]</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold mb-3">Key Responsibilities & Achievements:</h4>
                      <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                        <li>[Placeholder: Responsibility or achievement 1]</li>
                        <li>[Placeholder: Responsibility or achievement 2]</li>
                        <li>[Placeholder: Responsibility or achievement 3]</li>
                        <li>[Placeholder: Responsibility or achievement 4]</li>
                      </ul>
                    </div>

                    <div className="mt-4">
                      <h4 className="font-semibold mb-2">Technologies Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {["[Tech 1]", "[Tech 2]", "[Tech 3]", "[Tech 4]"].map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
