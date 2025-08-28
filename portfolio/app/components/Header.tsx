"use client"

import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const Header = () => {
  const [open, setOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }

  // lock page scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  // close with Esc
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  const closeAndScroll = (id: string) => {
    setOpen(false)
    scrollToSection(id)
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-sm border-b border-gray-800">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex justify-between items-center">
        <div className="text-xl font-bold text-accent-green">prt2.dev</div>

        {/* Desktop nav */}
        <ul className="hidden md:flex space-x-8 text-sm">
          <li>
            <button onClick={() => scrollToSection("about")} className="hover:text-accent-green transition-colors">
              About me
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")} className="hover:text-accent-green transition-colors">
              Projects
            </button>
          </li>
          <li>
            <button onClick={() => scrollToSection("skills")} className="hover:text-accent-green transition-colors">
              Skills
            </button>
          </li>
          <li>
            <a
              href="/assets/Resumexyz3.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent-green transition-colors"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(v => !v)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Backdrop (fades) */}
      <button
        aria-hidden
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 md:hidden bg-black/50 transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Mobile dropdown (slides down) */}
      <div
        id="mobile-menu"
        role="menu"
        className={`md:hidden absolute right-4 top-16 z-50 w-60 rounded-xl border border-gray-800 bg-card-bg shadow-xl p-2
          transition-[opacity,transform] duration-200 ease-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"}`}
      >
        <button
          onClick={() => closeAndScroll("about")}
          className="block w-full text-left px-3 py-2 rounded-lg hover:bg-pink-500/20"
        >
          About me
        </button>
        <button
          onClick={() => closeAndScroll("projects")}
          className="block w-full text-left px-3 py-2 rounded-lg hover:bg-pink-500/20"
        >
          Projects
        </button>
        <button
          onClick={() => closeAndScroll("skills")}
          className="block w-full text-left px-3 py-2 rounded-lg hover:bg-pink-500/20"
        >
          Skills
        </button>
        <a
          href="/assets/ResumeZ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
          className="block w-full text-left px-3 py-2 rounded-lg hover:bg-pink-500/20"
        >
          Resume ↗
        </a>
      </div>
    </header>
  )
}

export default Header
