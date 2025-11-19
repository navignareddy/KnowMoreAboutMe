"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";

export default function Education() {
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
            <GraduationCap className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Education & Achievements</h1>
          </div>

          {/* Education Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="space-y-6">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-1">
                        [Placeholder: Degree Name]
                      </h3>
                      <p className="text-lg text-muted-foreground mb-2">
                        [Placeholder: University/Institution Name]
                      </p>
                      <p className="text-muted-foreground">
                        [Placeholder: Location]
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">
                        [Placeholder: Start Date] - [Placeholder: End Date]
                      </p>
                      <p className="text-sm font-semibold mt-1">
                        GPA: [Placeholder: GPA]
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Relevant Coursework:</h4>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                      <li>[Placeholder: Course 1]</li>
                      <li>[Placeholder: Course 2]</li>
                      <li>[Placeholder: Course 3]</li>
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-7 w-7" />
              Achievements & Honors
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <Award className="h-6 w-6 text-primary mb-3" />
                  <h3 className="text-xl font-bold mb-2">
                    [Placeholder: Achievement Title]
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    [Placeholder: Organization/Institution]
                  </p>
                  <p className="text-sm text-muted-foreground">
                    [Placeholder: Date]
                  </p>
                  <p className="text-muted-foreground mt-2">
                    [Placeholder: Description of achievement]
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
