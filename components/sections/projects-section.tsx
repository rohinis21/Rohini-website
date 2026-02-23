"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Trophy } from "lucide-react"

const featuredProjects = [
  {
    title: "Kubernetes Infrastructure Optimization",
    subtitle: "Predictive Autoscaling & Cost Optimization",
    description:
      "Architected data platform analyzing 2B+ weekly telemetry events across 120+ Kubernetes clusters, deploying predictive autoscaling models with 50+ engineered features for demand forecasting.",
    achievements: [
      "Projected $6M/year in infrastructure cost savings",
      "Identified 30% capacity waste from fragmented telemetry ingestion",
      "Improved demand forecasting accuracy by ~25% with predictive models",
      "Designed 5+ production-grade AWS pipelines for resource optimization",
    ],
    technologies: ["Kubernetes", "Python", "TensorFlow", "AWS", "Predictive Modeling", "MLOps"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: "Cisco Capstone",
  },
  {
    title: "Deepfake AI Image Detection",
    subtitle: "Multi-Architecture Deep Learning System",
    description:
      "Developed and evaluated 3 deep learning architectures on a 140,000+ image dataset with explainable AI (Grad-CAM) for model interpretability and transparency.",
    achievements: [
      "87% validation accuracy and 0.92 AUC on deepfake classification",
      "Compared ResNet-50, ConvNeXt-Tiny, and MobileNetV3 architectures",
      "Implemented Grad-CAM for explainable AI interpretability",
      "Published findings in academic article",
    ],
    technologies: ["PyTorch", "ResNet-50", "ConvNeXt", "MobileNetV3", "Grad-CAM", "Computer Vision"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: "Published Research",
  },
  {
    title: "AI Data Insights Agent",
    subtitle: "Natural Language to SQL with GenAI",
    description:
      "Engineered full-stack GenAI application with LangChain and OpenAI GPT enabling non-technical stakeholders to generate SQL queries via natural language, accelerating insights delivery from 15+ minutes to under 10 seconds.",
    achievements: [
      "Reduced insights delivery time from 15+ min to <10 seconds",
      "LangChain orchestration with RAG pipeline",
      "Natural language to SQL for intuitive database exploration",
      "Championed data literacy for non-technical stakeholders",
    ],
    technologies: ["LangChain", "OpenAI", "RAG", "Python", "SQL", "Flask"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "YouTube Channel Intelligence Platform",
    subtitle: "Snowflake Cortex AI Analytics",
    description:
      "Built scalable NLP analytics platform on Snowflake processing 15K+ channels with Medallion Architecture, Cortex AI for sentiment analysis, semantic search, and Streamlit dashboards.",
    achievements: [
      "Processed 15K+ YouTube channels with Medallion Architecture",
      "Cortex AI integration for sentiment analysis",
      "Cortex Search for semantic discovery",
      "Real-time insights via Streamlit dashboards",
    ],
    technologies: ["Snowflake", "Cortex AI", "Streamlit", "Python", "SQL", "NLP"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "Connect 4 ML Game Engine",
    subtitle: "Multi-Model AI with RESTful Serving",
    description:
      "Deployed RESTful ML serving API using Flask handling 500+ concurrent sessions with sub-second latency, benchmarking CNN, Transformer, and MCTS architectures.",
    achievements: [
      "500+ concurrent game sessions with sub-second latency",
      "Benchmarked CNN, Transformer, and MCTS architectures",
      "Improved move prediction precision by ~18% via hyperparameter tuning",
      "RESTful API with Flask for real-time model serving",
    ],
    technologies: ["Flask", "Python", "CNN", "Transformer", "MCTS", "GridSearchCV"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: null,
  },
  {
    title: "Enterprise Data Pipeline Modernization",
    subtitle: "Cloud Migration & Optimization at Scale",
    description:
      "Led cloud migration from IBM DataStage to Azure and re-engineered SLA-breaching pipelines across 10+ sources using AWS Glue and Lambda, achieving production-grade reliability.",
    achievements: [
      "99.5% SLA with 500GB+ daily processing via AWS Glue & Lambda",
      "40% operational cost reduction through cloud migration",
      "60% query cost reduction via medallion architecture & Parquet optimization",
      "Built Power BI dashboards for 30+ stakeholders",
    ],
    technologies: ["Azure", "AWS Glue", "Lambda", "S3", "Power BI", "PySpark", "Parquet"],
    githubUrl: null,
    liveUrl: null,
    featured: true,
    award: null,
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[5%] w-20 h-20 lg:w-28 lg:h-28 bg-primary/5 rounded-lg rotate-[30deg] animate-float" />
        <div className="absolute top-[60%] right-[8%] w-16 h-16 lg:w-24 lg:h-24 bg-accent/8 rounded-lg -rotate-[20deg] animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute bottom-[10%] left-[40%] w-12 h-12 lg:w-16 lg:h-16 bg-muted/10 rounded-lg rotate-[60deg] animate-float" style={{ animationDelay: "4s" }} />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Featured Projects</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Solutions engineered to solve real-world problems at scale
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/80 hover:shadow-2xl hover:shadow-primary/15 hover:border-primary/30 hover:scale-[1.02] transition-all duration-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      {project.award && (
                        <Badge className="bg-primary/10 text-primary border-primary/30 text-xs">
                          <Trophy className="h-3 w-3 mr-1" />
                          {project.award}
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-lg xl:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground font-medium">{project.subtitle}</p>
                    <div className="mt-3">
                      <p className="text-muted-foreground text-sm leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                        {project.description}
                      </p>
                    </div>
                    {(project.githubUrl || project.liveUrl) && (
                      <div className="flex gap-2 mt-3">
                        {project.githubUrl && (
                          <Button variant="outline" size="sm" asChild className="hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all duration-300">
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" /> Code
                            </a>
                          </Button>
                        )}
                        {project.liveUrl && (
                          <Button variant="outline" size="sm" asChild className="hover:bg-accent/10 hover:border-accent/50 hover:text-accent transition-all duration-300">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" /> Live
                            </a>
                          </Button>
                        )}
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors duration-300">Key Achievements</h4>
                      <ul className="space-y-1.5">
                        {project.achievements.map((achievement, i) => (
                          <motion.li key={i} className="flex items-start gap-2 group/item" whileHover={{ x: 4 }}>
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 group-hover/item:scale-125 transition-all duration-300" />
                            <p className="text-muted-foreground text-xs leading-relaxed group-hover/item:text-foreground transition-colors duration-300">{achievement}</p>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-2 text-sm group-hover:text-primary transition-colors duration-300">Technologies</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <motion.div key={tech} whileHover={{ scale: 1.1, y: -2 }}>
                            <Badge variant="secondary" className="text-xs hover:bg-primary/20 hover:text-primary transition-all duration-300 cursor-pointer">
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* GitHub CTA */}
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mt-16">
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-muted/50 rounded-2xl border border-border/50 hover:bg-muted/70 hover:border-primary/30 hover:shadow-lg transition-all duration-400 group">
            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">Explore More Projects</h4>
            <p className="text-muted-foreground text-sm max-w-md">Check out my GitHub profile for more projects, contributions, and open-source work.</p>
            <Button asChild className="hover:scale-110 transition-transform duration-300">
              <a href="https://github.com/rohini-sondole" target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-2" /> View GitHub Profile
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
