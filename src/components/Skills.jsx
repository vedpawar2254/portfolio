import { skills } from '../data/portfolio'
import './Skills.css'

function Skills() {
  const skillCategories = [
    { id: 'languages', label: 'Languages', icon: '💻', items: skills.languages },
    { id: 'backend', label: 'Backend & Systems', icon: '⚙️', items: skills.backend },
    { id: 'frontend', label: 'Frontend', icon: '🎨', items: skills.frontend },
    { id: 'ai', label: 'AI / ML', icon: '🤖', items: skills.ai },
    { id: 'devops', label: 'Dev & Infra', icon: '🚀', items: skills.devops },
    { id: 'leadership', label: 'Leadership', icon: '👥', items: skills.leadership }
  ]

  return (
    <div className="skills">
      <div className="skills-header">
        <h2 className="section-title">Skills & Technologies</h2>
        <p className="section-subtitle">
          Full-stack development with a focus on backend systems and AI
        </p>
      </div>

      <div className="skills-grid">
        {skillCategories.map((category, index) => (
          <div
            key={category.id}
            className="skill-category"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="skill-category-header">
              <span className="skill-icon">{category.icon}</span>
              <h3 className="skill-category-label">{category.label}</h3>
            </div>
            <div className="skill-items">
              {category.items.map((skill, i) => (
                <div key={i} className="skill-item">
                  <span className="skill-name">{skill}</span>
                  <div className="skill-bar">
                    <div className="skill-progress"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="skills-footer">
        <p>Always learning, always building</p>
      </div>
    </div>
  )
}

export default Skills
