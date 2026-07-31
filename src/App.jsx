import { useLenis } from './hooks/useLenis'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import CursorGlow from './components/layout/CursorGlow'
import ConstellationCanvas from './components/ui/ConstellationCanvas'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import FeaturedProjects from './components/sections/FeaturedProjects'
import OtherProjects from './components/sections/OtherProjects'
import Experience from './components/sections/Experience'
import Achievements from './components/sections/Achievements'
import Contact from './components/sections/Contact'

export default function App() {
  useLenis()

  return (
    <div className="relative min-h-screen text-starlight">
      {/* single continuous galaxy background for the whole site */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <ConstellationCanvas nodeCount={70} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-nebula/20 rounded-full blur-[130px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-aurora/20 rounded-full blur-[130px]" />
        <div className="absolute top-2/3 right-1/4 w-80 h-80 bg-nebula/10 rounded-full blur-[140px]" />
      </div>

      <CursorGlow />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <FeaturedProjects />
        <OtherProjects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}