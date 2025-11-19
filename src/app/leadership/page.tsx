"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Users, Award, Calendar, MapPin } from "lucide-react";

export default function Leadership() {
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
            <Users className="h-8 w-8 text-primary" />
            <h1 className="text-5xl font-bold">Organizations & Leadership</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">
                        [Placeholder: Organization Name]
                      </h3>
                      <p className="text-muted-foreground">
                        [Placeholder: Role/Position]
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>[Placeholder: Start Date] - [Placeholder: End Date]</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>[Placeholder: Location]</span>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    <li>[Placeholder: Contribution 1]</li>
                    <li>[Placeholder: Contribution 2]</li>
                    <li>[Placeholder: Contribution 3]</li>
                  </ul>
                </div>

                {item % 2 === 0 && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary" />
                      <span className="text-sm font-semibold">Leadership Achievement:</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      [Placeholder: Achievement description]
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
