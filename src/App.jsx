import Header from './components/Header'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Social from './components/Social'
import Footer from './components/Footer'
import FaultyTerminal from './components/FaultyTerminal'

function App() {
  return (
    <>
      <div className="background">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#6366f1"
          mouseReact
          mouseStrength={0.5}
          pageLoadAnimation
          brightness={0.4}
        />
      </div>
      <div className="container">
        <Header />
        <About />
        <Portfolio />
        <Contact />
        <Social />
        <Footer />
      </div>
    </>
  )
}

export default App
