"use client"

import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

const projects = [
  {
    title: "Project One",
    description:
      "A full-stack web application built with React and Flask. Features user authentication, real-time data updates, and responsive design.",
    tags: ["React", "Flask", "MySQL", "Python"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Two",
    description:
      "Machine learning project that predicts outcomes using various algorithms. Includes data visualization and model comparison.",
    tags: ["Python", "ML", "Pandas", "Matplotlib"],
    github: "#",
    live: "#",
  },
  {
    title: "Project Three",
    description:
      "A command-line tool built in C for file management and automation. Efficient and lightweight with comprehensive documentation.",
    tags: ["C", "Linux", "Shell"],
    github: "#",
  },
  {
    title: "Project Four",
    description:
      "Interactive web portfolio showcasing cinematography and video editing work. Built with modern web technologies.",
    tags: ["JavaScript", "HTML", "CSS", "Video"],
    github: "#",
    live: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={20} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink size={20} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed text-pretty">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
