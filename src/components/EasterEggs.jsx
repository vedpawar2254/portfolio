import { useEffect, useState } from 'react'
import './EasterEggs.css'

function EasterEggs({ onSecretMode }) {
  const [konamiProgress, setKonamiProgress] = useState([])
  const [showEasterEgg, setShowEasterEgg] = useState(false)
  const [clickCount, setClickCount] = useState(0)

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ]

  useEffect(() => {
    const handleKeyPress = (e) => {
      const newProgress = [...konamiProgress, e.key].slice(-10)
      setKonamiProgress(newProgress)

      // Check if Konami code is complete
      if (JSON.stringify(newProgress) === JSON.stringify(konamiCode)) {
        activateKonamiEasterEgg()
        setKonamiProgress([])
      }
    }

    // Triple click easter egg
    const handleTripleClick = () => {
      setClickCount(prev => {
        const newCount = prev + 1
        if (newCount === 3) {
          activateTripleClickEasterEgg()
          return 0
        }
        setTimeout(() => setClickCount(0), 1000)
        return newCount
      })
    }

    // Secret hover easter egg on logo
    const handleLogoHover = (e) => {
      if (e.shiftKey && e.altKey) {
        activateSecretLogoEasterEgg()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    document.addEventListener('click', handleTripleClick)
    document.addEventListener('mouseover', handleLogoHover)

    return () => {
      window.removeEventListener('keydown', handleKeyPress)
      document.removeEventListener('click', handleTripleClick)
      document.removeEventListener('mouseover', handleLogoHover)
    }
  }, [konamiProgress])

  const activateKonamiEasterEgg = () => {
    onSecretMode(true)
    setShowEasterEgg(true)
    showMessage('🎮 KONAMI CODE ACTIVATED! You found the secret!')

    // Add confetti effect
    createConfetti()

    // Add rainbow border to body
    document.body.style.animation = 'rainbow-border 3s linear infinite'
    setTimeout(() => {
      document.body.style.animation = ''
    }, 5000)
  }

  const activateTripleClickEasterEgg = () => {
    showMessage('🖱️ Triple click detected! You\'re curious!')
    createSparkles()
  }

  const activateSecretLogoEasterEgg = () => {
    showMessage('🔍 You found the secret combination! (Shift + Alt + Hover)')
    onSecretMode(true)
  }

  const showMessage = (text) => {
    const messageEl = document.createElement('div')
    messageEl.className = 'easter-egg-message'
    messageEl.textContent = text
    document.body.appendChild(messageEl)

    setTimeout(() => {
      messageEl.classList.add('fade-out')
      setTimeout(() => {
        document.body.removeChild(messageEl)
      }, 500)
    }, 3000)
  }

  const createConfetti = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
    const confettiCount = 100

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div')
      confetti.className = 'confetti'
      confetti.style.left = Math.random() * 100 + '%'
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)]
      confetti.style.animationDelay = Math.random() * 3 + 's'
      confetti.style.animationDuration = Math.random() * 3 + 2 + 's'
      document.body.appendChild(confetti)

      setTimeout(() => {
        document.body.removeChild(confetti)
      }, 5000)
    }
  }

  const createSparkles = () => {
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement('div')
      sparkle.className = 'sparkle'
      sparkle.style.left = Math.random() * window.innerWidth + 'px'
      sparkle.style.top = Math.random() * window.innerHeight + 'px'
      document.body.appendChild(sparkle)

      setTimeout(() => {
        document.body.removeChild(sparkle)
      }, 1000)
    }
  }

  return null // This component doesn't render anything visible
}

export default EasterEggs
