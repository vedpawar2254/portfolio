import { useState, useEffect } from 'react'
import './App.css'
import { personalInfo, projects, experiences, skills } from './data/portfolio'

function App() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeSection, setActiveSection] = useState('all')
  const [konamiProgress, setKonamiProgress] = useState([])
  const [secretMode, setSecretMode] = useState(false)

  const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newProgress = [...konamiProgress, e.key].slice(-10)
      setKonamiProgress(newProgress)
      if (JSON.stringify(newProgress) === JSON.stringify(konamiCode)) {
        setSecretMode(true)
        setTimeout(() => setSecretMode(false), 5000)
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [konamiProgress])

  // Define sections with proper names
  const sections = [
    { id: 'all', label: 'all', title: 'All Projects' },
    { id: 'magnum_opus', label: 'magnum opus', title: 'Section 1: Magnum Opus' },
    { id: 'opensource', label: 'maintained', title: 'Section 2: Open Source - Maintained' },
    { id: 'hackathon', label: 'hackathons', title: 'Section 3: Hackathons/Unpolished' },
    { id: 'ai', label: 'AI', title: 'Section 4: AI' },
    { id: 'freelance', label: 'freelance', title: 'Section 5: Freelance' },
    { id: 'misc', label: 'misc', title: 'Section 6: Misc' }
  ]

  // Highlighted projects
  const highlightedProjects = ['dcode', 'syftly', 'ano']

  // Filter projects by search and section
  const getFilteredProjects = () => {
    let filtered = {}

    Object.entries(projects).forEach(([categoryId, projectList]) => {
      if (activeSection !== 'all' && categoryId !== activeSection) return

      const searchFiltered = searchQuery
        ? projectList.filter(p =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
        )
        : projectList

      if (searchFiltered.length > 0) {
        filtered[categoryId] = searchFiltered
      }
    })

    return filtered
  }

  const filteredProjects = getFilteredProjects()

  return (
    <div className="app">
      {/* FIXED LEFT ANIMATION */}
      <div className="animation-sidebar">
        <div className="rotating-cube">
          <div className="cube">
            <div className="face front">DEV</div>
            <div className="face back">CODE</div>
            <div className="face right">BUILD</div>
            <div className="face left">SHIP</div>
            <div className="face top">CREATE</div>
            <div className="face bottom">LEARN</div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="main-container">
        <div className="content">
          <section className="about">
            <h1>{personalInfo.name}</h1>
            <p className="title">{personalInfo.title}</p>
            <p className="bio">{personalInfo.bio}</p>
            <div className="links">
              <a href={personalInfo.links.github} target="_blank" rel="noopener noreferrer">github</a>
              <a href={personalInfo.links.linkedin} target="_blank" rel="noopener noreferrer">linkedin</a>
              <a href={`mailto:${personalInfo.email}`}>email</a>
              <a href={personalInfo.links.kaggle} target="_blank" rel="noopener noreferrer">kaggle</a>
            </div>
          </section>

          <section className="search-section">
            <input
              type="text"
              placeholder="search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search"
            />
          </section>

          <section className="projects">
            <h2>Projects</h2>

            {/* Interactive Classification Tabs */}
            <div className="classification-tabs">
              {sections.map(section => (
                <button
                  key={section.id}
                  className={`tab ${activeSection === section.id ? 'active' : ''}`}
                  onClick={() => setActiveSection(section.id)}
                >
                  [{section.label}]
                </button>
              ))}
            </div>

            {/* Display projects by section */}
            {Object.keys(filteredProjects).length > 0 ? (
              Object.entries(filteredProjects).map(([categoryId, projectList]) => {
                const sectionInfo = sections.find(s => s.id === categoryId)

                return (
                  <div key={categoryId} className="project-section">
                    <h3 className="section-title">{sectionInfo.title}</h3>

                    {projectList.map(project => {
                      const isHighlighted = highlightedProjects.includes(project.id)

                      return (
                        <div
                          key={project.id}
                          className={`project ${isHighlighted ? 'highlighted' : ''}`}
                        >
                          <div className="project-header-row">
                            <h4>{project.name}</h4>
                            {isHighlighted && <span className="featured-badge">★ featured</span>}
                          </div>
                          <p>{project.description}</p>
                          <div className="project-links">
                            {project.url && <a href={project.url} target="_blank" rel="noopener noreferrer">visit</a>}
                            {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">code</a>}
                            {project.users && <span className="users">{project.users}</span>}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                )
              })
            ) : (
              <div className="no-results">
                <p>no projects found</p>
              </div>
            )}
          </section>

          <section className="experience">
            <h2>Experience</h2>
            {experiences.map(exp => (
              <div key={exp.id} className="exp-item">
                <div className="exp-header">
                  <h3>{exp.title}</h3>
                  <span className="period">{exp.period}</span>
                </div>
                <p className="company">{exp.company} • {exp.type}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </section>

          <section className="skills">
            <h2>Skills</h2>
            <div className="skill-list">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category} className="skill-category">
                  <strong>{category}:</strong> {items.join(', ')}
                </div>
              ))}
            </div>
          </section>

          <footer>
            <p>ved pawar © 2026</p>
            {/* <p className="easter-hint">try: ↑↑↓↓←→←→BA</p> */}
          </footer>
        </div>
      </div>

      {secretMode && (
        <div className="secret-overlay">
          <h1>🎮 KONAMI CODE ACTIVATED</h1>
        </div>
      )}
    </div>
  )
}

export default App
