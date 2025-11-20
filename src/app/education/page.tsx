"use client";

import { Navigation } from "@/components/navigation";
import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy, Sparkles, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <main className="min-h-screen bg-background pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6">
      <Navigation />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
            <GraduationCap className="h-6 w-6 sm:h-8 sm:w-8 text-primary flex-shrink-0" />
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Education & Achievements</h1>
          </div>

          {/* Education Section */}
          <div className="mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Education</h2>
            <div className="space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-3 sm:gap-0">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-bold mb-1">
                      Bachelor of Science, Computer Science
                    </h3>
                    <p className="text-base sm:text-lg text-primary font-semibold mb-2 break-words">
                      Ira A. Fulton Schools of Engineering at Arizona State University
                    </p>
                    <p className="text-sm sm:text-base text-muted-foreground mb-2">
                      Minor, Business
                    </p>
                    <p className="text-xs sm:text-sm text-muted-foreground break-words">
                      W. P. Carey School of Business – Arizona State University
                    </p>
                  </div>
                  <div className="text-left sm:text-right flex-shrink-0">
                    <p className="text-xs sm:text-sm text-muted-foreground">
                      Jan 2023 - Present
                    </p>
                    <p className="text-xs sm:text-sm font-semibold mt-1 text-primary">
                      CGPA: 4.00
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Achievements Section */}
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 sm:h-7 sm:w-7 flex-shrink-0" />
              <span>Achievements & Honors</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-5 w-5 sm:h-6 sm:w-6 text-primary mb-2 sm:mb-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-bold mb-2">
                  New American University Scholarship (NAMU)
                </h3>
                <p className="text-muted-foreground mb-2">
                  Ira A. Fulton Schools of Engineering at Arizona State University
                </p>
                <p className="text-muted-foreground mt-2">
                  Worth $14,500 for every year of the Bachelor's program
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Garmin Scholarship Award
                </h3>
                <p className="text-muted-foreground mb-2">
                  Ira A. Fulton Schools of Engineering at Arizona State University
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  2024-2026
                </p>
                <p className="text-muted-foreground mt-2">
                  Worth $8,000 per year in recognition of achievements and academic excellence
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Officer of the Year
                </h3>
                <p className="text-muted-foreground mb-2">
                  Connecting International Communities
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  May 2025
                </p>
                <p className="text-muted-foreground mt-2">
                  Awarded for outstanding leadership and service
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Travel and Professional Development Chair
                </h3>
                <p className="text-muted-foreground mb-2">
                  Undergraduate Student Government, Arizona State University
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  2025–2026
                </p>
                <p className="text-muted-foreground mt-2">
                  Leading initiatives for student professional development and travel opportunities
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Dean's List
                </h3>
                <p className="text-muted-foreground mb-2">
                  Ira A. Fulton Schools of Engineering at Arizona State University
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  Spring 2023, Fall 2023, Spring 2024, Spring 2025
                </p>
                <p className="text-muted-foreground mt-2">
                  Recognized for outstanding academic achievement in multiple semesters
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <Award className="h-6 w-6 text-primary mb-3" />
                <h3 className="text-xl font-bold mb-2">
                  Bal Puraskar '2019
                </h3>
                <p className="text-muted-foreground mb-2">
                  Rotary Club of Cantonment Secunderabad
                </p>
                <p className="text-sm text-muted-foreground mb-2">
                  January 2019
                </p>
                <p className="text-muted-foreground mt-2">
                  All Round Excellence as an Interactor at St. Michael's School, Alwal
                </p>
              </motion.div>
            </div>
          </div>

          {/* Coursework Section */}
          <div className="mb-12">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <BookOpen className="h-6 w-6 sm:h-7 sm:w-7 text-primary flex-shrink-0" />
              <h2 className="text-2xl sm:text-3xl font-bold">Relevant Coursework</h2>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Spring 2023 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Spring 2023</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "ASU 101-CAI", name: "The ASU Experience", credits: 1, grade: "A+" },
                    { code: "CSE 110", name: "Principles of Programming", credits: 3, grade: "A+" },
                    { code: "ENG 107", name: "First-Year Composition", credits: 3, grade: "A+" },
                    { code: "FSE 100", name: "Introduction to Engineering", credits: 2, grade: "A+" },
                    { code: "MAT 265", name: "Calculus for Engineers I", credits: 3, grade: "A" },
                    { code: "PUP 190", name: "Sustainable Cities", credits: 3, grade: "A+" },
                    { code: "SWU 171", name: "Introduction to Social Work", credits: 3, grade: "A" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00 • Dean's List</p>
              </motion.div>

              {/* Fall 2023 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Fall 2023</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "CSE 120", name: "Digital Design Fundamentals", credits: 3, grade: "A+" },
                    { code: "CSE 205", name: "Object-Oriented Program & Data", credits: 3, grade: "A" },
                    { code: "ENG 108", name: "First-Year Composition", credits: 3, grade: "A" },
                    { code: "GPH 111", name: "Intro to Physical Geography", credits: 3, grade: "A+" },
                    { code: "GPH 112", name: "Intro to Phys Geography Lab", credits: 1, grade: "A+" },
                    { code: "MAT 266", name: "Calculus for Engineers II", credits: 3, grade: "A+" },
                    { code: "SWU 250", name: "Stress Management Tools I", credits: 3, grade: "A+" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00 • Dean's List</p>
              </motion.div>

              {/* Spring 2024 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Spring 2024</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "APA 200", name: "Intro/Asian Pacif Amer Studies", credits: 3, grade: "A" },
                    { code: "BIO 100", name: "The Living World", credits: 4, grade: "A+" },
                    { code: "CSE 230", name: "Computer Org/Assemb Lang Prog", credits: 3, grade: "A+" },
                    { code: "CSE 240", name: "Intro to Programming Languages", credits: 3, grade: "B+" },
                    { code: "MAT 243", name: "Discrete Math Structures", credits: 3, grade: "A-" },
                    { code: "MAT 267", name: "Calculus for Engineers III", credits: 3, grade: "A" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 3.96 • Dean's List</p>
              </motion.div>

              {/* Fall 2024 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Fall 2024</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "CSE 301", name: "Computing Ethics", credits: 1, grade: "A+" },
                    { code: "CSE 310", name: "Data Structures and Algorithms", credits: 3, grade: "A+" },
                    { code: "CSE 360", name: "Intro to Software Engineering", credits: 3, grade: "A-" },
                    { code: "CSE 365", name: "Information Assurance", credits: 3, grade: "A+" },
                    { code: "DAT 301", name: "Exploring Data in R and Python", credits: 4, grade: "A+" },
                    { code: "IEE 380", name: "Prob & Stats Engr Prob Solving", credits: 3, grade: "B" },
                    { code: "MUS 347", name: "Jazz in America", credits: 3, grade: "A+" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00 • Dean's List</p>
              </motion.div>

              {/* Spring 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Spring 2025</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "BIO 130", name: "Intro to Environmental Science", credits: 4, grade: "A+" },
                    { code: "CIS 300", name: "Web Design and Development", credits: 3, grade: "A+" },
                    { code: "CSE 294", name: "Special Topics: Professional Learning Experience", credits: 1, grade: "Y" },
                    { code: "CSE 330", name: "Operating Systems", credits: 3, grade: "A+" },
                    { code: "CSE 340", name: "Principles of Programming Lang", credits: 3, grade: "A+" },
                    { code: "CSE 463", name: "Intro Human Computer Interactn", credits: 3, grade: "A+" },
                    { code: "FSE 301", name: "Entrepreneur & Value Creation", credits: 3, grade: "A+" },
                    { code: "MAT 343", name: "Applied Linear Algebra", credits: 3, grade: "A+" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00 • Dean's List</p>
              </motion.div>

              {/* Summer 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Summer 2025</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "CSE 355", name: "Intro Theoretical Computer Sci", credits: 3, grade: "A" },
                  ].map((course, index) => (
                    <div key={index} className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg">
                      <div className="min-w-0 flex-1">
                        <span className="font-semibold text-foreground text-xs sm:text-sm">{course.code}</span>
                        <span className="text-muted-foreground ml-1 sm:ml-2 text-xs sm:text-sm break-words">{course.name}</span>
                      </div>
                      <div className="text-left sm:text-right flex-shrink-0">
                        <span className="text-xs sm:text-sm text-primary font-medium">{course.grade}</span>
                        <span className="text-xs text-muted-foreground ml-1 sm:ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00</p>
              </motion.div>

              {/* Fall 2025 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="bg-card border border-border rounded-xl p-4 sm:p-5 md:p-6"
              >
                <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Fall 2025</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-3">
                  {[
                    { code: "ACC 382", name: "Accnting & Financial Analysis", credits: 3, grade: "A+" },
                    { code: "CSE 464", name: "Software QA and Testing", credits: 3, grade: "NR" },
                    { code: "CSE 478", name: "Foundations Data Visualization", credits: 3, grade: "NR" },
                    { code: "CSE 485", name: "Computer Sci Capstone Proj I", credits: 3, grade: "NR" },
                    { code: "MGT 380", name: "Management and Strategy", credits: 3, grade: "NR" },
                    { code: "MKT 390", name: "Essentials of Marketing", credits: 3, grade: "A+" },
                  ].map((course, index) => (
                    <div key={index} className={`flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-2 p-2 sm:p-3 bg-muted/30 rounded-lg ${course.grade === "NR" ? "opacity-60" : ""}`}>
                      <div>
                        <span className="font-semibold text-foreground">{course.code}</span>
                        <span className="text-muted-foreground ml-2">{course.name}</span>
                      </div>
                      <div className="text-right">
                        <span className={`text-sm font-medium ${course.grade === "NR" ? "text-muted-foreground" : "text-primary"}`}>
                          {course.grade}
                        </span>
                        <span className="text-xs text-muted-foreground ml-2">({course.credits} cr)</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-4">Term GPA: 4.00 • In Progress</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
