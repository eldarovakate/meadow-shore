import { useState, useEffect } from 'react'
import { brandInfo } from '../data/content'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header__inner">
          <a href="#hero" className="header__logo">
            <img src="/images/logo.png" alt="Meadow Shore" className="header__logo-img" />
          </a>
          <a href={`mailto:${brandInfo.email}`} className="header__email">
            {brandInfo.email}
          </a>
        </div>
      </div>
    </header>
  )
}
