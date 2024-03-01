import About from "./components/About/About"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Portfolio from "./components/Portfolio/Portfolio"

function App() {

  return (
    <>
      <div className="h-screen snap-y snap-mandatory overflow-scroll z-0 scroll-smooth">

      <section id='hero' className="snap-start">
        <Hero />
      </section>

      <section id='about' className="snap-start">
        <About />
      </section>

      <section id='portfolio' className="snap-center">
        <Portfolio />
      </section>

      <section id='footer' className="snap-end">
        <Footer />
      </section>
      </div>
    </>
  )
}

export default App
