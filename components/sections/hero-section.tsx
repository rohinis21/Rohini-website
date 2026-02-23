"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, MapPin, Download } from "lucide-react"
import { motion, useAnimation, useInView } from "framer-motion"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: false })
  const controls = useAnimation()

  const roles = [
    'Data Engineer',
    'ML Engineer',
    'Cloud Architect',
    'Analytics Engineer',
    'Platform Engineer',
  ]

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    const currentText = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting && displayText !== currentText) {
        setDisplayText(currentText.slice(0, displayText.length + 1))
      } else if (isDeleting && displayText !== '') {
        setDisplayText(currentText.slice(0, displayText.length - 1))
      } else if (!isDeleting && displayText === currentText) {
        setTimeout(() => setIsDeleting(true), 1200)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setCurrentRole((prev) => (prev + 1) % roles.length)
      }
    }, isDeleting ? 60 : 100)
    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  useEffect(() => {
    if (isInView) controls.start('visible')
  }, [isInView, controls])

  if (!mounted) return null

  return (
    <section ref={sectionRef} className="min-h-screen flex items-center justify-center relative overflow-hidden pt-24 pb-16 bg-background" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 animate-pulse" />

      {/* Particle system */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </div>

      {/* Floating shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div className="absolute top-20 left-10 w-24 h-24 lg:w-28 lg:h-28 bg-primary/10 rounded-lg rotate-12"
          animate={{ y: [0, -20, 0], rotate: [12, 25, 12], scale: [1, 1.1, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div className="absolute top-40 right-20 w-20 h-20 lg:w-24 lg:h-24 bg-accent/15 rounded-lg -rotate-12"
          animate={{ y: [0, 25, 0], rotate: [-12, -30, -12] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        <motion.div className="absolute bottom-40 left-20 w-16 h-16 lg:w-20 lg:h-20 bg-muted/30 rounded-lg rotate-45"
          animate={{ y: [0, -30, 0], rotate: [45, 90, 45] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8">
        <div className="max-w-3xl mx-auto text-center lg:text-left lg:max-w-none">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-10 lg:space-y-12">
            <div className="space-y-6 lg:space-y-8">
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}
                className="text-foreground text-xl lg:text-2xl xl:text-3xl font-semibold mb-3"
              >
                Hi, I&apos;m
              </motion.p>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-tight"
              >
                Rohini Sondole
              </motion.h1>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}
                className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-muted-foreground font-medium min-h-[60px] flex items-center lg:justify-start justify-center"
              >
                <span className="text-primary">{displayText}</span>
                <motion.span animate={{ opacity: [1, 0] }} transition={{ duration: 0.8, repeat: Infinity }} className="text-primary ml-1">|</motion.span>
              </motion.div>
            </div>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}
              className="text-muted-foreground text-lg lg:text-xl max-w-2xl leading-relaxed lg:text-left text-center"
            >
              6+ years delivering cloud-scale data platforms and production ML systems across AWS & Azure. 
              From $6M infrastructure optimizations at Cisco to 99.5% SLA pipelines — I engineer solutions that deliver measurable impact.
            </motion.p>

            {/* Stats */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-10 pt-6 border-t border-border/50"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">6+</div>
                <div className="text-sm text-muted-foreground mt-1">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">$6M</div>
                <div className="text-sm text-muted-foreground mt-1">Cost Savings</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">99.5%</div>
                <div className="text-sm text-muted-foreground mt-1">Pipeline SLA</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl lg:text-3xl font-bold text-primary">2B+</div>
                <div className="text-sm text-muted-foreground mt-1">Events/Week</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button size="lg" className="h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" asChild>
                  <a href="https://linkedin.com/in/rohini-sondole" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="hover:bg-primary/20 hover:text-foreground hover:border-primary transition-all duration-300 h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" asChild>
                  <a href="https://github.com/rohini-sondole" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="font-medium">GitHub</span>
                  </a>
                </Button>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline" size="lg" className="hover:bg-primary/20 hover:text-foreground hover:border-primary transition-all duration-300 h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg" asChild>
                  <a href="mailto:rsondole21@gmail.com">
                    <Mail className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                    <span className="font-medium">Email</span>
                  </a>
                </Button>
              </motion.div>

              <div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" size="lg"
                      className="hover:bg-primary/20 hover:text-foreground hover:border-primary transition-all duration-300 h-12 lg:h-14 px-6 lg:px-8 text-base lg:text-lg hover:scale-105 active:scale-95"
                    >
                      <Download className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
                      <span className="font-medium">Resume</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-56 bg-background/95 backdrop-blur-md border-border/50">
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
                      <a href="/resumes/Data_Engineering_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="font-medium">Data Engineering Resume</span>
                      </a>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild className="cursor-pointer hover:bg-primary/10">
                      <a href="/resumes/ML_Engineering_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <span className="font-medium">ML Engineering Resume</span>
                      </a>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </motion.div>

            {/* Location Badge */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}
              className="flex items-center gap-2 text-muted-foreground justify-center lg:justify-start"
            >
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm">Austin, TX · Open to full-time roles starting May 2026</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
