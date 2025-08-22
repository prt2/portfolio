const Skills = () => {
  const categorizedSkills = {
    
    Languages: ["Python", "C", "C++", "JavaScript", "TypeScript", "SQL","Rust", "Haskell", "HTML/CSS", "MATLAB"],
    
    "Frameworks & Libraries": ["React", "Next.js", "TailwindCSS", "Node.js", "ShadCN", "Leaflet.js"],
    
    "Developer Tools": ["Git", "GitHub Actions", "Figma", "Docker", "Firebase", "Zod", "Sentry"],
    
    Databases: ["MongoDB", "PostgreSQL", "SQLite"],
  }

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid gap-12">
          {Object.entries(categorizedSkills).map(([category, skills]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-accent-green mb-4">{category}</h3>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-card-bg rounded-lg px-3 py-3 inline-flex items-center justify-center hover:bg-gray-800/50 transition-colors">
                    <span className="text-sm font-medium text-center">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
