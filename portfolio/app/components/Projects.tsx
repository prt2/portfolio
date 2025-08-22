"use client"

import { ChevronLeft, ChevronRight, X, ExternalLink, Github, Play } from "lucide-react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null)
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const projects = [
    {
      name: "InterviewAI",
      tech: "React | TailwindCSS | TypeScript | Firebase | ShadCN | Next.js",
      date: "July-2025",
      description:
        "Description",
      fullDescription:
        "An AI-powered prep tool that helps users practice interviews using their resume and job description.",
      image: "assets/interviewAI.png",
      techStack: [
        "React",
        "TailwindCSS",
        "Firebase",
        "ShadCN",
        "TypeScript",
        "Next.js"
      ],
      liveDemo: "https://interview-ai-prt2.vercel.app/",
      sourceCode: "https://github.com/prt2/interviewAI",
    },
    {
      name: "SkyFare",
      tech: "React | TailwindCSS | JavaScript | Next.js",
      date: "Jan-2025 - Apr 2025",
      description:
        "Description",
      fullDescription:
        "A flight search web app that integrates Amadeus API to let users find and save flights with ease.",
      image: "assets/skyfare1.png",
      techStack: [
        "React",
        "TailwindCSS",
        "JavaScript",
        "Next.js",
        "GitHub Actions",
        "Sentry",
      ],
      liveDemo: "https://skyfare19.netlify.app/",
      sourceCode: "https://github.com/prt2/SkyFare",
    },
    {
      name: "ReportVan",
      tech: "React | TailwindCSS | TypeScript | ShadCN | Next.js | Zod",
      date: "Nov-2024",
      description:
        "Description",
      fullDescription:
        "An emergency reporting platform built for quick response and efficient communication.",
      image: "assets/reportVan.png",
      techStack: [
        "React",
        "TailwindCSS",
        "TypeScript",
        "ShadCN",
        "Next.js",
        "Zod",
      ],
      liveDemo: "",
      sourceCode: "https://github.com/prt2/ReportVan",
    },
  ]

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
      setShowLeftArrow(scrollLeft > 0)
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollPosition)
      checkScrollPosition() // Initial check
      return () => container.removeEventListener("scroll", checkScrollPosition)
    }
  }, [])

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -480, behavior: "smooth" })
    }
  }

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 480, behavior: "smooth" })
    }
  }

  const openModal = (project) => {
    setSelectedProject(project)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setSelectedProject(null)
    document.body.style.overflow = "unset"
  }

  return (
    <>
      <section id="projects" className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">My Projects</h2>
          </div>

          <div className="relative">
            {showLeftArrow && (
              <button
                onClick={scrollLeft}
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors opacity-80 hover:opacity-100"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
            )}

            {showRightArrow && (
              <button
                onClick={scrollRight}
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 bg-gray-800/80 hover:bg-gray-700 rounded-full transition-colors opacity-80 hover:opacity-100"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            )}

            <div
              ref={scrollContainerRef}
              className="flex gap-6 overflow-x-auto pb-4 scroll-smooth scrollbar-hide"
              style={{ width: "100%", maxWidth: "1000px" }}
            >
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 12px rgba(255, 105, 180, 0.3)",
                  }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="bg-card-bg rounded-xl p-6 transition-all cursor-pointer flex-shrink-0 w-96"
                  onClick={() => openModal(project)}
                >
                  <div className="h-40 bg-gray-600 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.name}
                      className={`w-full h-full object-cover`}
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-white">{project.name}</h3>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-400 text-sm">{project.tech}</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">{project.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blurred backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal content */}
          <div className="relative bg-gray-950 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-gray-800">
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 hover:bg-gray-700 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Scrollable content */}
            <div className="overflow-y-auto max-h-[90vh] custom-scrollbar">
              {/* Project preview image */}
              <div className="relative h-64 md:h-80 bg-gray-900 overflow-hidden">
                <img
                  src={selectedProject.image || "/placeholder.svg"}
                  alt={selectedProject.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project details */}
              <div className="p-8">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{selectedProject.name}</h2>

                <p className="text-gray-300 text-lg leading-relaxed mb-8">{selectedProject.fullDescription}</p>

                {/* Tech stack */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Tech Stack</h3>
                  <div className="flex flex-wrap gap-3">
                    {selectedProject.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 bg-gray-800 text-gray-300 rounded-full text-sm font-medium border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  {selectedProject.liveDemo && (
                    <a
                      href={selectedProject.liveDemo}
                      className="flex items-center justify-center gap-3 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      LIVE DEMO
                    </a>
                  )}

                  <a
                    href={selectedProject.sourceCode}
                    className="flex items-center justify-center gap-3 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    SOURCE CODE
                  </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Projects
