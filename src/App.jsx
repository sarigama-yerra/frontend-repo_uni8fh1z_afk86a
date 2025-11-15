import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Section from './components/Section'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-white text-gray-900 dark:bg-slate-950 dark:text-slate-100 transition-colors">
      <Navbar />
      <main>
        <Hero />

        <Section id="about" title="About Me" subtitle="Perkenalan singkat tentang saya.">
          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p>
              Saya Ahmad Chikal, Fresh Graduate S1 Informatika dari Universitas Teknokrat Indonesia. 
              Tertarik pada Web Development, Data Processing, IT Support, dan Desain 3D. Saya cepat belajar, 
              senang memecahkan masalah, mampu bekerja dalam tim, dan kreatif dalam mencari solusi.
            </p>
          </div>
        </Section>

        <Section id="skills" title="Skills" subtitle="Kemampuan teknis utama yang saya miliki.">
          <Skills />
        </Section>

        <Section id="experience" title="Experience" subtitle="Pengalaman relevan yang pernah saya jalani.">
          <Experience />
        </Section>

        <Section id="projects" title="Projects" subtitle="Beberapa karya dan eksplorasi yang pernah saya buat.">
          <Projects />
        </Section>

        <Section id="contact" title="Contact" subtitle="Tertarik bekerjasama? Silakan hubungi saya.">
          <Contact />
        </Section>
      </main>
      <footer className="py-10 border-t border-gray-200 dark:border-slate-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-sm text-gray-600 dark:text-slate-400">
          © {new Date().getFullYear()} Ahmad Chikal. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
