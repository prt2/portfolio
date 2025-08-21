const Skills = () => {
  const skills = [
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
    "Skill",
  ]

  return (
    <section id="skills" className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Technical Skills</h2>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-card-bg rounded-xl p-4 h-20 flex items-center justify-center hover:bg-gray-800/50 transition-colors"
            >
              <span className="text-sm font-medium text-center">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
