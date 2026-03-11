import { useScrollReveal } from '../hooks/useScrollReveal'
import ProductCard from './ProductCard'
import { products } from '../data/content'

export default function ProductGrid() {
  const ref = useScrollReveal()

  return (
    <section className="products" id="products">
      <div className="container">
        <div className="products__header reveal" ref={ref}>
          <div>
            <span className="eyebrow">Forest Collection</span>
            <h2 className="products__title">Все модели</h2>
          </div>
          <button className="btn">Все товары</button>
        </div>

        <div className="products__grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
