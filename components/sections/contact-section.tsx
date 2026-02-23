"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react"

const contactLinks = [
  { icon: Mail, label: "rsondole21@gmail.com", href: "mailto:rsondole21@gmail.com" },
  { icon: Phone, label: "(512) 815-0990", href: "tel:+15128150990" },
  { icon: Linkedin, label: "LinkedIn Profile", href: "https://linkedin.com/in/rohini-sondole" },
  { icon: Github, label: "GitHub Profile", href: "https://github.com/rohini-sondole" },
  { icon: MapPin, label: "Austin, TX", href: null },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-24 xl:py-28 bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-primary/5 rounded-lg rotate-[30deg] animate-float" />
        <div className="absolute bottom-[15%] right-[10%] w-24 h-24 bg-accent/8 rounded-lg -rotate-[45deg] animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 lg:mb-6">Get In Touch</h2>
          <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl lg:max-w-3xl mx-auto">
            Open to full-time Data Engineering, ML Engineering, and Platform Engineering roles starting May 2026
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/70 hover:border-primary/30 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-foreground mb-6 text-center">Contact Information</h3>
                <div className="space-y-4">
                  {contactLinks.map((link, index) => (
                    <motion.div key={link.label} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }} viewport={{ once: true }}
                    >
                      {link.href ? (
                        <a href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="flex items-center gap-4 p-4 rounded-xl border border-border/50 hover:bg-primary/5 hover:border-primary/30 transition-all duration-300 group"
                        >
                          <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                            <link.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground group-hover:text-primary transition-colors">{link.label}</span>
                        </a>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl border border-border/50">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <link.icon className="h-5 w-5 text-primary" />
                          </div>
                          <span className="text-foreground">{link.label}</span>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                    <a href="mailto:rsondole21@gmail.com">
                      <Mail className="h-5 w-5 mr-2" />
                      Send Me an Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }} viewport={{ once: true }}
          className="mt-16 text-center text-sm text-muted-foreground border-t border-border/50 pt-8"
        >
          <p>© 2026 Rohini Sondole. Built with Next.js, Tailwind CSS & Framer Motion.</p>
        </motion.div>
      </div>
    </section>
  )
}
