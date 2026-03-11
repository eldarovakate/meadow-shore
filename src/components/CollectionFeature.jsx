import { useScrollReveal } from '../hooks/useScrollReveal'
import { collections } from '../data/content'

export default function CollectionFeature() {
  const ref = useScrollReveal()
  const collection = collections[0]

  return (
    <section className="collection-feature" id="collections">
      <div className="container">
        <div className="collection-feature__inner">
          <div className="collection-feature__image">
            <span className="collection-feature__image-tag">
              Forest Collection
            </span>
            <div className="collection-feature__image-hint">
              <span>птица</span>
              <span>·</span>
              <span>хвоя</span>
              <span>·</span>
              <span>шишки</span>
            </div>
          </div>

          <div className="reveal" ref={ref}>
            <span className="eyebrow collection-feature__eyebrow">
              Коллекция · 2026
            </span>
            <h2 className="collection-feature__title">{collection.name}</h2>
            <p className="collection-feature__text">{collection.description}</p>
            <a href="#products" className="btn">{collection.cta}</a>
          </div>
        </div>
      </div>
    </section>
  )
}
