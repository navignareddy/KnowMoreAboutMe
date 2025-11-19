"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { User } from "lucide-react";

export default function About() {
  return (
    <main className="min-h-screen bg-background pt-32 pb-20 px-4">
      <Navigation />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-6">
            <User className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">About Me</h1>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Biography</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                [Placeholder: Your biography text here. Describe your background, education, 
                professional journey, and what drives you. Include your passions, values, and 
                what makes you unique.]
              </p>
              <p className="text-muted-foreground leading-relaxed">
                [Continue with more details about your personal and professional story, 
                your goals, and what you're looking to achieve in your career.]
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 mb-8">
              <h2 className="text-3xl font-bold mb-4">Interests & Hobbies</h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>[Placeholder: Interest or hobby 1]</li>
                <li>[Placeholder: Interest or hobby 2]</li>
                <li>[Placeholder: Interest or hobby 3]</li>
                <li>[Placeholder: Interest or hobby 4]</li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h2 className="text-3xl font-bold mb-4">Values & Philosophy</h2>
              <p className="text-muted-foreground leading-relaxed">
                [Placeholder: Describe your core values, work philosophy, and what principles 
                guide your decisions and actions in both personal and professional life.]
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
