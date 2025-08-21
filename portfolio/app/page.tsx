import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />
      </main>
    </div>
  )
}
