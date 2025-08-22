"use client"

import { motion } from "framer-motion"

const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "SFU Robot Soccer",
      date: "May 2025 - Present",
      description:
        "Built and debugged AI path-planning and obstacle avoidance features for autonomous soccer robots.",
      logo: "/assets/SFURS-logo.png",
    },
    {
      role: "Mentor",
      company: "SFU Women in Computing Science",
      date: "Aug 2025 - Present",
      description:
        "Guided first-year students in computing, offering support with coursework and career paths through WiCS.",
      logo: "/assets/sfu_wics_logo.jpeg",
    },
    {
      role: "Calc Connect Peer Mentor",
      company: "Simon Fraser University",
      date: "Sept 2024 - Dec 2024",
      description:
        "Hosted problem-solving sessions for over 40 students, improving performance in introductory calculus courses.",
      logo: "/assets/sfu-logo.png",
    },
  ]

  return (
    <section id="experience" className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Experience</h2>

        <div className="grid gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{
              scale: 1.03,
              boxShadow: "0 0 12px rgba(255, 105, 180, 0.3)"
              }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              className="bg-card-bg rounded-xl p-6 transition-all flex flex-col sm:flex-row items-start gap-6"
              >
              <div className="flex-shrink-0 bg-white rounded-lg overflow-hidden">
                <img
                  src={exp.logo}
                  alt={`${exp.company} logo`}
                  className="object-contain w-28 h-28 sm:w-32 sm:h-32"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                <p className="text-gray-400 text-sm">{exp.company}</p>
                <p className="text-gray-500 text-sm mb-2">{exp.date}</p>
                <p className="text-gray-300 text-sm">{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
