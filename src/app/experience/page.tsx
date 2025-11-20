"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, Building2 } from "lucide-react";

export default function Experience() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <Navigation />
      
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <Briefcase className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Work Experience</h1>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-5 md:left-8 top-0 bottom-0 w-0.5 bg-border"></div>

            <div className="space-y-12">
              {[
                {
                  title: "XR Experience Supervisor",
                  company: "Dreamscape Learn",
                  location: "Tempe, Arizona, United States",
                  date: "Nov 2025 - Present",
                  type: "On-site",
                  responsibilities: [
                    "Led VR pod operations and system troubleshooting at Dreamscape Learn, enhancing guest flow through data-driven analysis",
                    "Developed technical documentation and standard operating procedures, improving onboarding efficiency for new operators",
                    "Trained and mentored new pod operators on VR system usage and troubleshooting techniques, ensuring high-quality immersive experiences"
                  ],
                  technologies: ["Virtual Reality (VR) Systems", "System Operations", "Performance Monitoring", "Hardware Configuration", "Team Training & Mentorship", "Data Analysis", "Excel", "Power BI", "Software Testing", "Quality Assurance"]
                },
                {
                  title: "Adobe Student Ambassador",
                  company: "Adobe",
                  location: "Remote",
                  date: "Aug 2025 - Present",
                  type: "Part-time",
                  responsibilities: [
                    "Organized and facilitated workshops to promote Adobe Creative Cloud tools among students",
                    "Engaged over 200 students in creative workshops, fostering digital skill development",
                    "Empowered peers through hands-on training, enhancing their creative and professional skills",
                    "Strengthened community engagement, showcasing leadership and communication abilities"
                  ],
                  technologies: ["Communication", "Adobe Creative Cloud", "Adobe Acrobat", "Marketing"]
                },
                {
                  title: "Appropriations Chair - Travel and Professional Development",
                  company: "Undergraduate Student Government Tempe",
                  location: "Tempe, Arizona, United States",
                  date: "May 2025 - Present",
                  type: "On-site",
                  responsibilities: [
                    "Chaired the USG-T Travel & Professional Development Funding Subcommittee, overseeing grant applications for student advancement",
                    "Ensured compliance with fiscal policies and university regulations in collaboration with the Business Office",
                    "Managed over $120K in funding requests, improving request turnaround by 25% through transparent procedures"
                  ],
                  technologies: ["Finance", "Budgeting", "Communication", "Critical Thinking", "Statistical Data Analysis"]
                },
                {
                  title: "Software Engineering Teaching Assistant",
                  company: "Arizona State University",
                  location: "Tempe, Arizona, United States",
                  date: "May 2025 - Aug 2025",
                  type: "On-site",
                  responsibilities: [
                    "Delivered over 10 lectures on Agile methodologies, Test-Driven Development (TDD), and software design principles to more than 200 students",
                    "Mentored multiple team projects, fostering collaboration and enhancing project quality through hands-on guidance",
                    "Designed lab assignments utilizing JUnit and GitHub PR reviews, significantly improving student engagement and learning outcomes"
                  ],
                  technologies: ["Java", "JUnit", "Software Development", "H2", "JavaFX", "GitHub", "Agile Methodologies", "TDD"]
                },
                {
                  title: "Principled Innovation Academy Intern",
                  company: "Arizona State University",
                  location: "Tempe, Arizona, United States",
                  date: "May 2025 - Aug 2025",
                  type: "On-site",
                  responsibilities: [
                    "Fine-tuned large language models on healthcare datasets to enhance contextual precision and robustness",
                    "Led data curation and tokenization pipelines using PyTorch and Hugging Face to optimize model training throughput",
                    "Collaborated with ML researchers to evaluate trustworthy AI metrics, focusing on bias detection and fairness consistency"
                  ],
                  technologies: ["PyTorch", "Hugging Face", "Machine Learning", "Generative AI", "NLP", "Bias Detection", "Fairness Metrics"]
                },
                {
                  title: "XR Experience POD Operator",
                  company: "Dreamscape Learn",
                  location: "Tempe, Arizona, United States",
                  date: "Feb 2024 - Nov 2025",
                  type: "Part-time",
                  responsibilities: [
                    "Developed Unity3D VR simulations for STEM and humanities, driving 7,000+ weekly user sessions and capturing 10,000+ logs for Python-powered analytics and content optimisations",
                    "Calibrated and maintained six haptic pod clusters (6-29 stations each), sustaining >99% hardware uptime and seamless VR performance",
                    "Delivered technical demos and hands-on training to 50+ VIPs and student groups, translating complex XR concepts into engaging educational experiences"
                  ],
                  technologies: ["Unity", "Virtual Reality Development", "Vuforia Augmented Reality SDK", "Python", "Problem Solving", "Troubleshooting", "Safety Regulations", "Hardware Maintenance", "Communication"]
                },
                {
                  title: "Application and Infrastructure Intern",
                  company: "City of Phoenix Water Services",
                  location: "Phoenix, Arizona, United States",
                  date: "Jan 2025 - Apr 2025",
                  type: "Part-time",
                  responsibilities: [
                    "Developed a C# and SQL desktop asset-management application for over 150 staff, enhancing role-based access",
                    "Automated IT workflows for 200+ Windows NT devices, reducing hardware downtime by 35%",
                    "Resolved 120+ technical tickets through reimaging, deployment, and troubleshooting to maintain reliable IT operations"
                  ],
                  technologies: ["C#", "SQL", "Oracle Database", "Tableau", "Windows NT", "API", "Full-Stack Development", "IT Management", "Java Development"]
                },
                {
                  title: "ASU 101- Section Leader",
                  company: "Ira A. Fulton Schools of Engineering at Arizona State University",
                  location: "Tempe, Arizona, United States",
                  date: "Aug 2023 - Dec 2023",
                  type: "On-site",
                  responsibilities: [
                    "Assisted in creating course materials such as lecture notes, quizzes, and exams for ASU 101 at Ira A. Fulton Schools of Engineering",
                    "Guided students on lab tasks, safety regulations, and proper techniques",
                    "Graded coursework, quizzes, and exams, and responded to student inquiries promptly",
                    "Collaborated with the lecturer to ensure a smooth learning experience for students"
                  ],
                  technologies: ["Interpersonal Skills", "Tutoring", "Professional Development", "Time Management", "Communication", "Assistant Teaching"]
                },
              ].map((experience, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative pl-14 sm:pl-16 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 sm:left-5 md:left-6 top-6 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full border-2 sm:border-4 border-background"></div>

                  <div className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow">
                    <div className="flex flex-wrap items-start justify-between mb-4 gap-2">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <Building2 className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
                          <h3 className="text-lg sm:text-xl md:text-2xl font-bold break-words">
                            {experience.title}
                          </h3>
                          {experience.type && (
                            <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded whitespace-nowrap">
                              {experience.type}
                            </span>
                          )}
                        </div>
                        <p className="text-base sm:text-lg text-primary font-semibold mb-2 break-words">
                          {experience.company}
                        </p>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground mb-4">
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{experience.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{experience.date}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-semibold mb-2 sm:mb-3">Key Responsibilities & Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm md:text-base text-muted-foreground">
                        {experience.responsibilities.map((responsibility, respIndex) => (
                          <li key={respIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-3 sm:mt-4">
                      <h4 className="text-sm sm:text-base font-semibold mb-2">Technologies & Skills:</h4>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs sm:text-sm"
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
