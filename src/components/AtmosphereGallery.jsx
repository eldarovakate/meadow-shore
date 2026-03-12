import { useScrollReveal } from '../hooks/useScrollReveal'

const items = [
  { label: 'Ткань крупно', bg: '#4A3B2F',   textColor: 'rgba(243,239,230,0.45)', img: '/images/forest-silence.png' },
  { label: 'Принт',        bg: '#6F7B52',   textColor: 'rgba(243,239,230,0.45)' },
  { label: 'Ветви',        bg: '#2c3a22',   textColor: 'rgba(243,239,230,0.35)' },
  { label: 'Лес',          bg: '#C96A4A',   textColor: 'rgba(243,239,230,0.45)' },
  { label: 'Детали',       bg: '#DDD9CF',   textColor: 'rgba(74,59,47,0.4)'    },
]

export default function AtmosphereGallery() {
  const ref = useScrollReveal()

  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="gallery__header reveal" ref={ref}>
          <span className="eyebrow">Атмосфера</span>
          <h2 className="gallery__title">Тишина леса</h2>
        </div>

        <div className="gallery__grid">
          {items.map((item, i) => (
            <div key={i} className="gallery__item">
              <div
                className="gallery__placeholder"
                style={{
                  backgroundColor: item.bg,
                  backgroundImage: item.img ? `url(${item.img})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {!item.img && (
                  <span
                    className="gallery__placeholder-label"
                    style={{ color: item.textColor }}
                  >
                    {item.label}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
