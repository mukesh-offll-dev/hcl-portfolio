"use client"

import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-primary font-medium mb-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
              Hello, I&apos;m
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-100 text-balance">
              Mukesh
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-200">
              Aspiring Software Developer
            </p>
            <p className="text-muted-foreground leading-relaxed max-w-lg mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-300 text-pretty">
              I build accessible, pixel-perfect digital experiences. 
              Passionate about creating elegant solutions to complex problems 
              through clean code and thoughtful design.
            </p>
            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500 delay-400">
              <Link
                href="#projects"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
              >
                View Projects
              </Link>
              <Link
                href="#contact"
                className="px-6 py-3 border border-border text-foreground rounded-lg font-medium hover:bg-secondary transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-in fade-in zoom-in-50 duration-700">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-card border border-border flex items-center justify-center text-muted-foreground">
                  <span className="text-sm">Your Photo</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
        
        <div className="flex justify-center mt-20 animate-bounce">
          <Link href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={24} />
          </Link>
        </div>
      </div>
    </section>
  )
}
