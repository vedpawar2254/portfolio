import { useState, useEffect, useRef } from 'react'
import './App.css'
import Hero from './components/Hero'
import SearchBar from './components/SearchBar'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Navigation from './components/Navigation'
import EasterEggs from './components/EasterEggs'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('home')
  const [showSecretMode, setShowSecretMode] = useState(false)

  const sectionsRef = useRef({
    home: null,
    projects: null,
    experience: null,
    skills: null,
    contact: null
  })

  // Scroll spy - update active section based on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(sectionsRef.current)
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = sectionsRef.current[section]
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = sectionsRef.current[sectionId]
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="app">
      <Navigation
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      <EasterEggs onSecretMode={setShowSecretMode} />

      <div className="main-content">
        <section
          ref={el => sectionsRef.current.home = el}
          id="home"
          className="section"
        >
          <Hero />
          <SearchBar
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onSecretMode={setShowSecretMode}
          />
        </section>

        <section
          ref={el => sectionsRef.current.projects = el}
          id="projects"
          className="section"
        >
          <Projects searchQuery={searchQuery} secretMode={showSecretMode} />
        </section>

        <section
          ref={el => sectionsRef.current.experience = el}
          id="experience"
          className="section"
        >
          <Experience searchQuery={searchQuery} />
        </section>

        <section
          ref={el => sectionsRef.current.skills = el}
          id="skills"
          className="section"
        >
          <Skills />
        </section>

        <section
          ref={el => sectionsRef.current.contact = el}
          id="contact"
          className="section"
        >
          <Contact />
        </section>
      </div>

      {showSecretMode && (
        <div className="secret-badge">
          <span>🎉 Secret Mode Activated</span>
        </div>
      )}
    </div>
  )
}

export default App
