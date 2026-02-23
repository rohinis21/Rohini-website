"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Award, GraduationCap } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-24 xl:py-28 bg-muted/20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[8%] left-[3%] w-12 h-12 lg:w-16 lg:h-16 bg-accent/8 rounded-lg rotate-[73deg] animate-float" />
        <div className="absolute top-[45%] right-[7%] w-28 h-28 lg:w-36 lg:h-36 bg-primary/6 rounded-lg -rotate-[127deg] animate-float" style={{ animationDelay: "2.1s" }} />
        <div className="absolute bottom-[18%] left-[15%] w-20 h-20 lg:w-26 lg:h-26 bg-accent/10 rounded-lg -rotate-[45deg] animate-float" style={{ animationDelay: "1.4s" }} />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">About Me</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            From building enterprise data systems to engineering ML solutions at scale
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column */}
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            <motion.div className="prose prose-lg max-w-none" whileHover={{ scale: 1.01 }} transition={{ duration: 0.3 }}>
              <motion.p className="text-muted-foreground text-justify leading-relaxed hover:text-foreground/90 transition-colors duration-300 mb-6" whileHover={{ x: 5 }}>
                With 6+ years of experience in data engineering and machine learning, I specialize in building 
                cloud-scale data platforms that power analytics, ML systems, and real-time decisioning. My journey spans 
                from <span className="text-foreground font-medium hover:text-primary transition-colors duration-200">Tata Consultancy Services</span> to 
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200"> Cybage Software</span>, and now as an ML Engineering Intern at 
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200"> Cisco</span>.
              </motion.p>
              <motion.p className="text-muted-foreground text-justify leading-relaxed hover:text-foreground/90 transition-colors duration-300" whileHover={{ x: 5 }}>
                Currently pursuing my MS in Business Analytics at 
                <span className="text-foreground font-medium hover:text-primary transition-colors duration-200"> UT Austin McCombs School of Business</span>, 
                I serve as an MSBA Student Ambassador. I thrive at the intersection of data engineering and applied ML — 
                building distributed systems, data warehouses, and production ML pipelines that deliver measurable business impact.
              </motion.p>
            </motion.div>

            {/* Current Focus */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10"><Target className="h-5 w-5 text-primary" /></div>
                    <h3 className="text-xl font-semibold text-foreground">Current Focus</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Data Engineering", "ML Systems", "Cloud Architecture", "MLOps", "GenAI & LLMs", "System Design", "Distributed Systems"].map((item) => (
                      <Badge key={item} variant="secondary" className="hover:bg-primary/20 hover:text-primary hover:scale-105 transition-all duration-200 cursor-pointer">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="space-y-6">
            {/* Education */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10"><GraduationCap className="h-5 w-5 text-primary" /></div>
                    <h3 className="text-lg font-semibold text-foreground">Education</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-foreground">Master of Science in Business Analytics</h4>
                      <p className="text-muted-foreground">The University of Texas at Austin — McCombs School of Business</p>
                      <p className="text-sm text-muted-foreground">Jul 2025 – May 2026 · MSBA Student Ambassador</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">Bachelor of Technology in Computer Technology</h4>
                      <p className="text-muted-foreground">Yeshwantrao Chavan College of Engineering, Nagpur, India</p>
                      <p className="text-sm text-muted-foreground">Jul 2014 – May 2018</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Certifications */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10"><Award className="h-5 w-5 text-primary" /></div>
                    <h3 className="text-lg font-semibold text-foreground">Certifications</h3>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground text-sm">Cloud</h4>
                      <p className="text-sm text-muted-foreground">Microsoft Certified: Azure Data Engineer Associate · Snowflake Data Warehousing · Databricks</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground text-sm">AI & ML</h4>
                      <p className="text-sm text-muted-foreground">Generative AI Leader Certification · AWS Certified AI Practitioner · IBM: Python for Data Science, AI & Development</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Data Governance Specialization */}
            <motion.div whileHover={{ scale: 1.02, y: -5 }} whileTap={{ scale: 0.98 }}>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">Specializations</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Data Validation", "Data Quality", "Lake Formation", "Data Lineage", "Data Cataloging", "Data Lake", "Medallion Architecture"].map((item) => (
                      <Badge key={item} variant="secondary" className="hover:bg-primary/20 hover:text-primary transition-all duration-200 cursor-pointer text-xs">{item}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
