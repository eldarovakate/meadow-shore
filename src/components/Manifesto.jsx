import { useScrollReveal } from '../hooks/useScrollReveal'
import { brandInfo } from '../data/content'

export default function Manifesto() {
  const ref = useScrollReveal()

  return (
    <section className="manifesto">
      <div className="container">
        <div className="reveal" ref={ref}>
          <p className="manifesto__quote">"{brandInfo.manifesto}"</p>
          <div className="manifesto__dash" />
          <p className="manifesto__brand">Meadow Shore</p>
        </div>
      </div>
    </section>
  )
}
