import { useScrollReveal } from '../hooks/useScrollReveal'
import { brandInfo } from '../data/content'

export default function About() {
  const ref = useScrollReveal()

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="about__inner reveal" ref={ref}>
          <span className="about__label">О бренде</span>
          <div>
            <h2 className="about__title">
              Одежда,<br />вдохновлённая природой
            </h2>
            <div className="about__divider" />
            <p className="about__text">{brandInfo.about.text}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
