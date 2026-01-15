import { useState, useEffect, useRef } from 'react'
import './SearchBar.css'

function SearchBar({ searchQuery, setSearchQuery, onSecretMode }) {
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [secretCommand, setSecretCommand] = useState('')
  const inputRef = useRef(null)

  const secretCommands = {
    '/secret': () => {
      onSecretMode(true)
      return 'Secret mode activated! 🎉'
    },
    '/matrix': () => {
      startMatrixRain()
      return 'Entering the Matrix...'
    },
    '/hack': () => {
      hackEffect()
      return 'Hacking in progress... 💻'
    },
    '/credits': () => {
      showCredits()
      return 'Built with React + Vite by Ved Pawar'
    },
    '/stats': () => {
      return `Portfolio stats:\n- Projects: 20+\n- Lines of code: 10,000+\n- Coffee consumed: ∞`
    },
    '/konami': () => {
      return 'Try the Konami Code: ↑↑↓↓←→←→BA'
    },
    '/easter': () => {
      return 'You found an easter egg! Try /secret, /matrix, /hack, /credits, /stats'
    }
  }

  const allSearchableTerms = [
    'Projects', 'Experience', 'Skills', 'Contact',
    'DCODE', 'NXTUP', 'Treeview', 'RippleX',
    'React', 'Python', 'Backend', 'AI',
    'Open Source', 'Freelance', 'DevClub',
    ...Object.keys(secretCommands)
  ]

  useEffect(() => {
    if (searchQuery) {
      const filtered = allSearchableTerms.filter(term =>
        term.toLowerCase().includes(searchQuery.toLowerCase())
      ).slice(0, 5)
      setSuggestions(filtered)
      setShowSuggestions(filtered.length > 0)
    } else {
      setSuggestions([])
      setShowSuggestions(false)
    }
  }, [searchQuery])

  const handleSearch = (value) => {
    setSearchQuery(value)

    // Check for secret commands
    if (secretCommands[value]) {
      const message = secretCommands[value]()
      setSecretCommand(message)
      setTimeout(() => setSecretCommand(''), 3000)
      setSearchQuery('')
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchQuery) {
      handleSearch(searchQuery)
    }
    if (e.key === 'Escape') {
      setSearchQuery('')
      setShowSuggestions(false)
    }
  }

  const startMatrixRain = () => {
    const canvas = document.createElement('canvas')
    canvas.style.position = 'fixed'
    canvas.style.top = '0'
    canvas.style.left = '0'
    canvas.style.width = '100%'
    canvas.style.height = '100%'
    canvas.style.zIndex = '9999'
    canvas.style.pointerEvents = 'none'
    document.body.appendChild(canvas)

    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const matrix = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%'
    const fontSize = 16
    const columns = canvas.width / fontSize
    const drops = []

    for (let i = 0; i < columns; i++) {
      drops[i] = 1
    }

    let frameCount = 0
    const maxFrames = 200

    function draw() {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      ctx.fillStyle = '#0F0'
      ctx.font = fontSize + 'px monospace'

      for (let i = 0; i < drops.length; i++) {
        const text = matrix[Math.floor(Math.random() * matrix.length)]
        ctx.fillText(text, i * fontSize, drops[i] * fontSize)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        drops[i]++
      }

      frameCount++
      if (frameCount < maxFrames) {
        requestAnimationFrame(draw)
      } else {
        document.body.removeChild(canvas)
      }
    }

    draw()
  }

  const hackEffect = () => {
    const originalText = document.body.innerText
    const chars = '!<>-_\\/[]{}—=+*^?#________'
    let iterations = 0

    const interval = setInterval(() => {
      document.body.style.fontFamily = 'monospace'
      document.body.style.color = '#00ff00'

      if (iterations > 20) {
        clearInterval(interval)
        setTimeout(() => {
          document.body.style.fontFamily = ''
          document.body.style.color = ''
        }, 1000)
      }
      iterations++
    }, 50)
  }

  const showCredits = () => {
    const modal = document.createElement('div')
    modal.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(15, 23, 42, 0.95);
      backdrop-filter: blur(20px);
      color: white;
      padding: 2rem;
      border-radius: 16px;
      z-index: 10000;
      text-align: center;
      font-family: monospace;
      box-shadow: 0 20px 60px rgba(0,0,0,0.5);
    `
    modal.innerHTML = `
      <h2 style="margin-bottom: 1rem;">Portfolio Credits</h2>
      <p>Designed & Built by Ved Pawar</p>
      <p style="margin-top: 0.5rem; color: #94a3b8;">React + Vite</p>
      <p style="margin-top: 1rem; font-size: 0.875rem; color: #64748b;">With lots of ☕ and 💻</p>
    `
    document.body.appendChild(modal)
    setTimeout(() => document.body.removeChild(modal), 3000)
  }

  return (
    <div className="search-container">
      <div className="search-bar">
        <svg className="search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="8"/>
          <path d="M21 21l-4.35-4.35"/>
        </svg>
        <input
          ref={inputRef}
          type="text"
          className="search-input"
          placeholder="Search projects, skills, or try /secret..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setShowSuggestions(suggestions.length > 0)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        />
        {searchQuery && (
          <button
            className="search-clear"
            onClick={() => setSearchQuery('')}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
      </div>

      {showSuggestions && (
        <div className="search-suggestions">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              className="suggestion-item"
              onClick={() => {
                handleSearch(suggestion)
                setShowSuggestions(false)
              }}
            >
              {suggestion.startsWith('/') ? '🔮 ' : '🔍 '}
              {suggestion}
            </button>
          ))}
        </div>
      )}

      {secretCommand && (
        <div className="secret-message">
          {secretCommand}
        </div>
      )}

      <div className="search-hint">
        Press <kbd>/</kbd> for commands
      </div>
    </div>
  )
}

export default SearchBar
