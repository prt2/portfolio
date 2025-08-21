"use client"

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-accent-green">xyz.dev</div>

        <ul className="flex space-x-8 text-sm">
          <li>
            <button
              onClick={() => scrollToSection("about")}
              className="hover:text-accent-green transition-colors cursor-pointer"
            >
              About me
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("projects")}
              className="hover:text-accent-green transition-colors cursor-pointer"
            >
              Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection("skills")}
              className="hover:text-accent-green transition-colors cursor-pointer"
            >
              Skills
            </button>
          </li>
          <li>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors"
            >
              my resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
