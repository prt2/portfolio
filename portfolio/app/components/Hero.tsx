import Image from "next/image"

const Hero = () => {
  return (
    <section id="about" className="pt-24 pb-16 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card-bg rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
            <div className="flex-1">
              <h1 className="text-2xl md:text-4xl font-bold mb-4 mt-4">
                Hey, I'm <span className="text-accent-green">{"Pal"}</span>!
              </h1>

              <p className="text-gray-300 text-sm md:text-sm mb-6 leading-relaxed">
                I’m a third-year Computer Science student at Simon Fraser University,
                 passionate about full-stack development and building projects that make an impact.
                  Lately, I’ve been exploring AI-powered apps and modern web tools.
                  I love learning new things, meeting people,
                 and working on projects where I can grow and help others too.
              </p>

              <div className="flex items-center gap-4">
                <a
                  href="mailto:paltilva2005@gmail.com"
                  className="bg-accent-green text-black p-3 rounded-lg hover:bg-pink-400 transition-colors"
                  aria-label="Send email"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/pal-tilva"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent-green text-black p-3 rounded-lg hover:bg-pink-400 transition-colors"
                  aria-label="LinkedIn profile"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="flex-shrink-0">
              <div className="w-40 h-40 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <Image
                  src="assets/me.JPG"
                  alt="Pal Tilva"
                  width={160}
                  height={160}
                  className="object-cover object-[60%_10%] w-full h-full scale-110"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
