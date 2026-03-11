import TShirtIcon from './TShirtIcon'

// Card background per color — ivory gets a slightly darker tint to stand out
function cardBg(hex) {
  if (hex === '#F3EFE6') return '#DDD9CF'
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return `rgba(${r}, ${g}, ${b}, 0.12)`
}

export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div
        className="product-card__image"
        style={{ backgroundColor: cardBg(product.colorHex) }}
      >
        <TShirtIcon fill={product.colorHex} size={140} />
        <div className="product-card__overlay">
          <span className="product-card__quick-view">Смотреть</span>
        </div>
      </div>
      <p className="product-card__collection">{product.collection}</p>
      <h3 className="product-card__name">{product.name}</h3>
      <p className="product-card__print">{product.print}</p>
      <p className="product-card__price">{product.price}</p>
    </div>
  )
}
