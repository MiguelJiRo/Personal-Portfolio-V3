import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-hangar font-sans text-hielo">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-sm focus:bg-fosforo focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-semibold focus:uppercase focus:tracking-instrument focus:text-tinta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
      >
        Saltar al contenido
      </a>
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 bg-reticle" />
      <Navbar />
      <main id="main-content">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
