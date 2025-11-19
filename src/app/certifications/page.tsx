"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Award, FileText, ExternalLink } from "lucide-react";

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
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
                >
                  <Award className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">
                    [Placeholder: Certification Name]
                  </h3>
                  <p className="text-muted-foreground mb-3">
                    [Placeholder: Issuing Organization]
                  </p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                    <span>Issued: [Placeholder: Date]</span>
                    {item % 3 === 0 && (
                      <span className="px-2 py-1 bg-green-500/20 text-green-600 dark:text-green-400 rounded">
                        Valid
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    [Placeholder: Credential ID or Verification Link]
                  </p>
                  <a
                    href="#"
                    className="flex items-center gap-2 text-primary hover:underline text-sm"
                  >
                    Verify <ExternalLink className="h-4 w-4" />
                  </a>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Licenses */}
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
              <FileText className="h-7 w-7" />
              Professional Licenses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2, 3, 4].map((item) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: item * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-4">
                    <FileText className="h-6 w-6 text-primary" />
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded text-sm">
                      Active
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">
                    [Placeholder: License Name]
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    [Placeholder: Issuing Authority]
                  </p>
                  <p className="text-sm text-muted-foreground mb-2">
                    License Number: [Placeholder: Number]
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <p>Issued: [Placeholder: Issue Date]</p>
                    <p>Expires: [Placeholder: Expiry Date]</p>
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
