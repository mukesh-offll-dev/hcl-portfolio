"use client"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "C", "Java", "JavaScript", "TypeScript"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Flask", "Node.js"],
  },
  {
    title: "Database & Tools",
    skills: ["MySQL", "Git", "GitHub", "VS Code", "Linux"],
  },
  {
    title: "Other Skills",
    skills: ["Basic ML", "Video Editing", "Cinematography", "Problem Solving"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Skills
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="p-6 rounded-lg bg-background border border-border"
              style={{ animationDelay: `${categoryIndex * 100}ms` }}
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
