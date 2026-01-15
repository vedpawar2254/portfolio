import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setEmail('')
      }, 3000)
    }
  }

  return (
    <div className="container">
      <div className="content">
        <div className="badge">Coming Soon</div>

        <h1 className="title">
          Something Amazing<br />
          Is On Its Way
        </h1>

        <p className="description">
          My portfolio is currently under construction. Sign up to be the first to know when it launches.
        </p>

        <form onSubmit={handleSubmit} className="email-form">
          <div className="input-wrapper">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="email-input"
              required
            />
            <button type="submit" className="submit-btn">
              Notify Me
            </button>
          </div>
          {submitted && (
            <p className="success-message">Thanks! We'll keep you posted.</p>
          )}
        </form>

        <div className="social-links">
          <a href="#" className="social-link">Twitter</a>
          <span className="separator">•</span>
          <a href="#" className="social-link">LinkedIn</a>
          <span className="separator">•</span>
          <a href="#" className="social-link">GitHub</a>
        </div>
      </div>

      <div className="circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  )
}

export default App
