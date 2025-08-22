"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const Experience = () => {
  const scrollContainerRef = useRef(null)
  const [showLeftArrow, setShowLeftArrow] = useState(false)
  const [showRightArrow, setShowRightArrow] = useState(true)

  const experiences = [
    {
      role: "Software Developer",
      company: "SFU Robot Soccer",
      date: "May 2025 - Present",
      description: "blah blah blah",
      logo: "/assets/SFURS.png"
    },
    {
      role: "Mentor",
      company: "SFU Women in Computing Science",
      date: "Aug 2025 - Present",
      description: "blah blah blah",
      logo: "/assets/wics-logo.jpeg"
    },
    {
      role: "Calc Connect Peer Mentor",
      company: "Simon Fraser University",
      date: "Sept 2024 - Dec 2024",
      description: "blah blah blah",
      logo: "/assets/SFU-FS-logo.jpg"
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

  return (
    <section className="py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold">Experience</h2>
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
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-card-bg rounded-xl p-6 hover:bg-gray-800/50 transition-colors flex-shrink-0 w-96"
              >
                <div className="h-40 rounded-lg mb-2 flex items-center justify-center overflow-hidden">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="object-contain h-full w-full p-4"
                  />
                </div>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-white">{exp.role}</h3>
                  </div>
                  <div className="flex justify-between items-start">
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                  </div>
                  <div className="flex justify-between items-start">
                    <span className="text-gray-500 text-sm">{exp.date}</span>
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

export default Experience
