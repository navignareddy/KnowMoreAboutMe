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
            {[
              {
                organization: "Undergraduate Student Government Tempe",
                role: "Appropriations Chair - Travel and Professional Development",
                date: "May 2025 - Present",
                location: "Tempe, Arizona, United States",
                contributions: [
                  "Chaired the USG-T Travel & Professional Development Funding Subcommittee, overseeing grant applications for student advancement",
                  "Ensured compliance with fiscal policies and university regulations in collaboration with the Business Office",
                  "Managed over $120K in funding requests, improving request turnaround by 25% through transparent procedures"
                ],
                technologies: ["Finance", "Budgeting", "Communication", "Critical Thinking", "Statistical Data Analysis"],
                achievement: null
              },
              {
                organization: "Connecting International Communities",
                role: "Marketing Associate",
                date: "Aug 2025 - Present",
                location: "Arizona State University",
                contributions: [
                  "Promoted club initiatives by engaging with students and building cross-cultural connections",
                  "Assisted in organising events, outreach campaigns, and collaborations to strengthen community presence",
                  "Supported marketing strategies through social media, communications, and student engagement"
                ],
                achievement: null
              },
              {
                organization: "Connecting International Communities",
                role: "Treasurer",
                date: "Dec 2024 - May 2025",
                location: "Arizona State University",
                contributions: [
                  "Managed CIC's financial operations, including budgeting, expense tracking, and fund allocation",
                  "Collaborated with executive members to plan and fund events effectively",
                  "Oversaw fundraising initiatives and ensured compliance with financial regulations",
                  "Maintained accurate financial records to promote transparency and support organizational goals"
                ],
                achievement: null
              },
              {
                organization: "Connecting International Communities",
                role: "Secretary",
                date: "Jun 2024 - May 2025",
                location: "Arizona State University",
                contributions: [
                  "Facilitated communication and collaboration between international communities, promoting cultural exchange and mutual understanding",
                  "Organized and coordinated in-person events, fostering global networking opportunities for community members",
                  "Managed administrative tasks, including scheduling, correspondence, and record-keeping to ensure smooth operations and engagement"
                ],
                achievement: null
              },
              {
                organization: "Indian Student Association",
                role: "Officer - Public Relations/Technology",
                date: "Aug 2023 - Dec 2023",
                location: "Arizona State University",
                contributions: [
                  "Developed strategic communication plans to enhance organization visibility",
                  "Leveraged technology for efficient communication and event management",
                  "Orchestrated social media campaigns to boost community engagement",
                  "Established partnerships and liaised with external stakeholders"
                ],
                achievement: null
              },
              {
                organization: "Rotary Club",
                role: "Director - Community Service",
                date: "Apr 2018 - Feb 2019",
                location: "St. Michael's School, Alwal",
                contributions: [
                  "Initiated and oversaw diverse community service projects, including food drives and environmental clean-ups, fostering a culture of social responsibility within the Rotary Club",
                  "Collaborated with local organizations to identify and address pressing community needs, strategically allocating resources for maximum impact",
                  "Mobilized and motivated club members to volunteer their time and skills, leading by example to cultivate a spirit of service and empathy",
                  "Established and maintained strong relationships with community leaders and stakeholders, facilitating ongoing partnerships to support sustainable change and positive outcomes"
                ],
                achievement: "Received the Rotary Youth Leadership Award (RYLA) for all round excellence as an Interactor"
              },
              {
                organization: "St. Michael's School",
                role: "Student Council Representative",
                date: "Jun 2018 - Feb 2019",
                location: "St. Michael's School, Alwal",
                contributions: [
                  "Acted as a voice for fellow students, advocating for their needs and concerns within the school community",
                  "Initiated and organized student-led initiatives and events to promote school spirit, unity, and inclusivity",
                  "Facilitated communication between students, faculty, and administration, fostering collaboration and constructive dialogue",
                  "Collaborated with other student council members to develop and implement policies and programs that address student interests and enhance the overall school experience"
                ],
                achievement: null
              },
              {
                organization: "Rotary Club",
                role: "Treasurer",
                date: "Apr 2017 - Feb 2018",
                location: "St. Michael's School, Alwal",
                contributions: [
                  "Managed club finances, including budgeting, tracking expenses, and financial reporting, ensuring transparency and accountability in all financial transactions",
                  "Developed and implemented fundraising strategies to support club activities and community service projects, maximizing revenue generation while adhering to ethical guidelines",
                  "Collaborated with club officers to create and monitor budgets for events and initiatives, optimizing resource allocation to achieve financial sustainability",
                  "Maintained accurate records of club financial transactions and presented comprehensive financial reports at club meetings, providing members with clear insights into the club's financial health and performance"
                ],
                achievement: null
              },
            ].map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all hover:scale-105 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3 flex-1">
                    <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-xl font-bold mb-1">
                        {experience.organization}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {experience.role}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 flex-shrink-0" />
                    <span>{experience.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 flex-shrink-0" />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h4 className="font-semibold mb-2">Key Contributions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                    {experience.contributions.map((contribution, contribIndex) => (
                      <li key={contribIndex}>{contribution}</li>
                    ))}
                  </ul>
                </div>

                {(experience as any).technologies && (
                  <div className="mt-4 pt-4 border-t border-border">
                    <h4 className="font-semibold mb-2">Technologies & Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {((experience as any).technologies as string[]).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {experience.achievement && (
                  <div className={`mt-4 pt-4 border-t border-border ${(experience as any).technologies ? '' : 'mt-4'}`}>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-primary flex-shrink-0" />
                      <span className="text-sm font-semibold">Leadership Achievement:</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {experience.achievement}
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
