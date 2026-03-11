import { brandInfo } from '../data/content'

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero__content">
        <p className="hero__eyebrow">Forest Collection · 2026</p>
        <h1 className="hero__title">Meadow Shore</h1>
        <p className="hero__tagline">{brandInfo.tagline}</p>
        <a href="#collections" className="btn btn--light">
          Explore Collection
        </a>
      </div>
      <div className="hero__scroll">
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
