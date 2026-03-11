export default function TShirtIcon({ fill, size = 130 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="product-card__tshirt"
    >
      {/* T-shirt silhouette */}
      <path
        d="M 32 16 C 37 8 63 8 68 16 L 88 26 L 99 50 L 82 55 L 82 88 L 18 88 L 18 55 L 1 50 L 12 26 Z"
        fill={fill}
        fillOpacity="0.82"
        stroke="rgba(74,59,47,0.12)"
        strokeWidth="0.8"
      />
    </svg>
  )
}
