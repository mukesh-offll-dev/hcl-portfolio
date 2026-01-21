"use client"

import { Code2, Lightbulb, Target } from "lucide-react"

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Writing maintainable, readable code is my priority.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "I love tackling complex challenges with creative solutions.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering impactful results and continuous learning.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            About Me
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <p className="text-muted-foreground leading-relaxed text-pretty">
              I&apos;m a passionate student and aspiring software developer with a strong 
              foundation in programming languages and web technologies. My journey in 
              tech started with curiosity about how things work, which evolved into a 
              deep love for creating digital solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Currently, I&apos;m focused on expanding my skills in full-stack development, 
              machine learning, and building projects that make a difference. I believe 
              in writing clean, efficient code and continuously learning new technologies.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              When I&apos;m not coding, you can find me exploring new technologies, 
              working on personal projects, or creating video content. I&apos;m always 
              open to collaborating on interesting projects and learning from others.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
