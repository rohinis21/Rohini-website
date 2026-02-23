"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const experiences = [
  {
    title: "Machine Learning Engineer Intern",
    company: "Cisco",
    location: "Austin, TX",
    period: "Jan 2026 – Present",
    type: "Internship",
    achievements: [
      "Architected data platform analyzing 2B+ weekly telemetry events across 120+ Kubernetes clusters, delivering $6M/year in projected savings",
      "Deployed predictive autoscaling models with 50+ engineered features, improving demand forecasting by ~25%",
      "Optimized TensorFlow deep learning models for real-time inference, reducing scaling latency by 30%",
      "Identified 30% capacity waste from fragmented telemetry ingestion by designing 5+ production-grade AWS pipelines",
      "Participated in architecture and code reviews, documenting solutions with technical specs and presentations",
    ],
    technologies: ["Kubernetes", "Python", "TensorFlow", "AWS", "Predictive Modeling", "MLOps", "Docker"],
  },
  {
    title: "Data & Machine Learning Engineer",
    company: "Cybage Software",
    location: "Pune, India",
    period: "Sep 2022 – Feb 2025",
    type: "Full-time",
    achievements: [
      "Owned cloud-native Azure data architecture replacing legacy batch reporting with 48-hr delays using Databricks, Delta Lake, and Power BI for 50+ users",
      "Built 30+ ETL/ELT pipelines with Apache Airflow and Azure Data Factory, reducing processing time by 90%",
      "Led 4-engineer team migrating 10TB+ to Snowflake with Delta Lake and Iceberg, completing 25% ahead of schedule",
      "Implemented MLOps with automated model validation, CI/CD pipelines, and unit testing, boosting reliability by 20%",
      "Launched Power BI visualizations serving 50+ users, accelerating decision-making by 40%",
      "Mentored 3 engineers via pair programming and code reviews, reducing code defects by 40%",
    ],
    technologies: ["Azure", "Databricks", "Snowflake", "Delta Lake", "Apache Airflow", "Power BI", "Python", "MLflow"],
  },
  {
    title: "Data Engineer",
    company: "Tata Consultancy Services",
    location: "Pune, India",
    period: "Sep 2018 – Sep 2022",
    type: "Full-time",
    achievements: [
      "Led cloud migration from IBM DataStage to Azure using Lift-and-Shift and Azure Migrate, cutting operational costs by 40%",
      "Re-engineered SLA-breaching pipelines across 10+ sources using AWS Glue and Lambda, achieving 500GB+ daily processing at 99.5% SLA",
      "Reduced query costs by 60% by restructuring S3 storage with medallion layers and Parquet optimization",
      "Built Power BI dashboards tracking supply chain KPIs for 30+ stakeholders, reducing reporting turnaround from days to hours",
      "Collaborated with data scientists to build 20+ validated datasets, enabling 3 predictive models to reach production",
      "Built PySpark Transformations in Palantir Foundry, automating ingestion across multiple source systems",
    ],
    technologies: ["AWS Glue", "Lambda", "Azure", "PySpark", "S3", "Power BI", "Palantir Foundry", "SQL"],
  },
]

export function ExperienceSection() {
  const [expandedCards, setExpandedCards] = useState<Record<number, boolean>>({})
  const [expandedTech, setExpandedTech] = useState<Record<number, boolean>>({})

  const toggleExpanded = (index: number) => {
    setExpandedCards(prev => ({ ...prev, [index]: !prev[index] }))
  }

  const toggleTech = (index: number) => {
    setExpandedTech(prev => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <section id="experience" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-20 h-20 lg:w-28 lg:h-28 bg-primary/5 rounded-lg rotate-[45deg] animate-float" />
        <div className="absolute bottom-[20%] left-[8%] w-16 h-16 lg:w-20 lg:h-20 bg-accent/8 rounded-lg -rotate-[30deg] animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Experience</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            From enterprise data engineering to production ML systems
          </p>
        </motion.div>

        <div className="grid gap-6 lg:gap-8">
          {experiences.map((exp, index) => (
            <motion.div key={exp.company} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} className="group"
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/20 hover:border-primary/40 hover:scale-[1.01] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex flex-col gap-3">
                      <div>
                        <CardTitle className="text-lg xl:text-xl text-foreground mb-2 group-hover:text-primary transition-colors duration-300">{exp.title}</CardTitle>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-muted-foreground text-sm">
                          <span className="font-medium text-foreground group-hover:text-primary transition-colors">{exp.company}</span>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                        <div className="flex items-center gap-1 text-muted-foreground text-sm">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <Badge variant="outline" className="self-start sm:self-auto group-hover:bg-primary/10 group-hover:border-primary/50 group-hover:text-primary transition-all duration-300">{exp.type}</Badge>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3 text-sm group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                      <ul className="space-y-2">
                        {exp.achievements.slice(0, expandedCards[index] ? exp.achievements.length : 3).map((a, i) => (
                          <motion.li key={i} className="flex items-start gap-2 hover:bg-primary/5 rounded-lg p-2 -m-2 transition-all duration-300 group/item" whileHover={{ x: 4 }}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-all duration-300" />
                            <p className="text-muted-foreground leading-relaxed text-sm group-hover/item:text-foreground transition-colors duration-300">{a}</p>
                          </motion.li>
                        ))}
                        {exp.achievements.length > 3 && (
                          <li className="mt-2">
                            <button onClick={() => toggleExpanded(index)}
                              className="flex items-center gap-2 text-primary hover:text-primary/80 hover:bg-primary/10 px-3 py-1 rounded-lg transition-all duration-300 text-sm font-medium border border-transparent hover:border-primary/30"
                            >
                              {expandedCards[index] ? (
                                <><ChevronUp className="h-4 w-4" /> Show Less</>
                              ) : (
                                <><ChevronDown className="h-4 w-4" /> +{exp.achievements.length - 3} more...</>
                              )}
                            </button>
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors duration-300">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.slice(0, expandedTech[index] ? exp.technologies.length : 6).map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1, y: -2 }}>
                            <Badge variant="secondary" className="text-xs px-2 py-1 hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer">{tech}</Badge>
                          </motion.div>
                        ))}
                        {exp.technologies.length > 6 && (
                          <Badge variant="outline" className="text-xs px-2 py-1 hover:bg-accent/20 cursor-pointer" onClick={() => toggleTech(index)}>
                            {expandedTech[index] ? "Show less" : `+${exp.technologies.length - 6}`}
                          </Badge>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-muted/50 rounded-full border border-border/50 hover:bg-muted/70 hover:border-primary/30 transition-all duration-300">
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground">Seeking full-time opportunities starting May 2026</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
