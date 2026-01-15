import { useState, useMemo } from 'react'
import { projects } from '../data/portfolio'
import './Projects.css'

function Projects({ searchQuery, secretMode }) {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = [
    { id: 'all', label: 'All Projects', count: Object.values(projects).flat().length },
    { id: 'flagship', label: 'Flagship', count: projects.flagship.length },
    { id: 'opensource', label: 'Open Source', count: projects.opensource.length },
    { id: 'ai', label: 'AI / Experimental', count: projects.ai.length },
    { id: 'hackathon', label: 'Hackathons', count: projects.hackathon.length },
    { id: 'freelance', label: 'Freelance', count: projects.freelance.length }
  ]

  const filteredProjects = useMemo(() => {
    let allProjects = activeCategory === 'all'
      ? Object.values(projects).flat()
      : projects[activeCategory] || []

    if (searchQuery) {
      allProjects = allProjects.filter(project =>
        project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }

    return allProjects
  }, [activeCategory, searchQuery])

  return (
    <div className="projects">
      <div className="projects-header">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">
          Building systems that scale, ship, and matter
        </p>
      </div>

      <div className="projects-categories">
        {categories.map(category => (
          <button
            key={category.id}
            className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
            <span className="category-count">{category.count}</span>
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              secretMode={secretMode}
            />
          ))
        ) : (
          <div className="no-results">
            <p>No projects found matching "{searchQuery}"</p>
            <button
              className="reset-btn"
              onClick={() => setActiveCategory('all')}
            >
              View all projects
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ project, index, secretMode }) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div
      className={`project-card ${secretMode ? 'secret-mode' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="project-header">
        <div className="project-title-row">
          <h3 className="project-name">{project.name}</h3>
          {project.status && (
            <span className={`project-status status-${project.status.toLowerCase()}`}>
              {project.status}
            </span>
          )}
        </div>
        {project.users && (
          <div className="project-users">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
            {project.users}
          </div>
        )}
      </div>

      <p className="project-description">{project.description}</p>

      <div className="project-tags">
        {project.tags.map(tag => (
          <span key={tag} className="project-tag">{tag}</span>
        ))}
      </div>

      {isExpanded && (
        <div className="project-expanded">
          <div className="project-links">
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
                Visit Site
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                GitHub
              </a>
            )}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                onClick={(e) => e.stopPropagation()}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
                Demo
              </a>
            )}
          </div>
        </div>
      )}

      <div className="project-expand-hint">
        {isExpanded ? 'Click to collapse' : 'Click for more'}
      </div>
    </div>
  )
}

export default Projects
