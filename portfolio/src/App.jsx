import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import CodeIcon from "./components/CodeIcon"

function App() {
  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Header />
      <main className="relative">
        <Hero />
        <Experience />
        <Projects />
        <Skills />

        {/* Decorative code icons */}
        <CodeIcon className="fixed top-80 right-8 opacity-60" />
        <CodeIcon className="fixed bottom-32 right-8 opacity-60" />
      </main>
    </div>
  )
}

export default App
