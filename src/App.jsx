import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import CollectionFeature from './components/CollectionFeature'
import AtmosphereGallery from './components/AtmosphereGallery'
import ProductGrid from './components/ProductGrid'
import Manifesto from './components/Manifesto'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <CollectionFeature />
        <AtmosphereGallery />
        <ProductGrid />
        <Manifesto />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
