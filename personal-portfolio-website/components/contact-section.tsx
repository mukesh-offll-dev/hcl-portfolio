"use client"

import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    href: "mailto:your.email@example.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (234) 567-8900",
    href: "tel:+12345678900",
  },
]

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourusername",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "https://twitter.com/yourusername",
  },
]

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Get In Touch
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <p className="text-muted-foreground mb-10 leading-relaxed text-pretty">
            I&apos;m currently looking for new opportunities and my inbox is always open. 
            Whether you have a question, want to collaborate, or just want to say hi, 
            I&apos;ll try my best to get back to you!
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {contactInfo.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 p-4 rounded-lg bg-background border border-border hover:border-primary/50 transition-colors group"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <item.icon size={20} />
                </div>
                <div className="text-left">
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="text-foreground font-medium">{item.value}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <Link
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-background border border-border text-muted-foreground hover:text-primary hover:border-primary/50 transition-colors"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
