import { experiences } from '../data/portfolio'
import './Experience.css'

function Experience({ searchQuery }) {
  const filteredExperiences = experiences.filter(exp =>
    !searchQuery ||
    exp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="experience">
      <div className="experience-header">
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          Building products, leading teams, shipping code
        </p>
      </div>

      <div className="timeline">
        {filteredExperiences.map((exp, index) => (
          <div
            key={exp.id}
            className="timeline-item"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="timeline-marker">
              {exp.current && <div className="pulse-ring"></div>}
              <div className="timeline-dot"></div>
            </div>

            <div className="timeline-content">
              <div className="experience-meta">
                <span className="experience-period">{exp.period}</span>
                {exp.current && (
                  <span className="current-badge">Current</span>
                )}
              </div>

              <h3 className="experience-title">{exp.title}</h3>
              <div className="experience-company">
                {exp.company}
                <span className="experience-type">{exp.type}</span>
                {exp.location && (
                  <span className="experience-location">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {exp.location}
                  </span>
                )}
              </div>

              <p className="experience-description">{exp.description}</p>

              {exp.highlights && (
                <ul className="experience-highlights">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience
