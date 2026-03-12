import { brandInfo } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer" id="contacts">
      <div className="container">
        <div className="footer__top">
          <img src="/images/logo.png" alt="Meadow Shore" className="footer__logo" />
          <p className="footer__tagline">{brandInfo.tagline}</p>
          <div className="footer__divider" />
          <div className="footer__contacts">
            <a
              href={`mailto:${brandInfo.email}`}
              className="footer__contact-item"
            >
              {brandInfo.email}
            </a>
            <span className="footer__contact-item">{brandInfo.instagram}</span>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copy">© 2026 Meadow Shore. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}
