import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function Subscribe() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const ref = useScrollReveal()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) setSubmitted(true)
  }

  return (
    <section className="subscribe" id="subscribe">
      <div className="container">
        <div className="subscribe__inner reveal" ref={ref}>
          <span className="eyebrow">Рассылка</span>
          <h2 className="subscribe__title">Узнать о новых коллекциях</h2>
          <p className="subscribe__subtitle">
            Первыми узнавайте о новинках и специальных предложениях
          </p>

          {submitted ? (
            <p className="subscribe__success">Спасибо — будем на связи.</p>
          ) : (
            <form className="subscribe__form" onSubmit={handleSubmit}>
              <input
                type="email"
                className="subscribe__input"
                placeholder="ваш email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="subscribe__button">
                Подписаться
              </button>
            </form>
          )}

          <p className="subscribe__note">Без спама. Только новости бренда.</p>
        </div>
      </div>
    </section>
  )
}
