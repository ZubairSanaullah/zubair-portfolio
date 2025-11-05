import LogoSection from "./components/sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./components/sections/FeatureCards"
import Hero from "./components/sections/Hero"
import ShowcaseSection from "./components/sections/ShowcaseSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import TechStack from "./components/sections/TechStack"
import Testimonials from "./components/sections/Testimonials"
import Contact from "./components/sections/Contact"
import Footer from "./components/sections/Footer"
const App = () => {
  return (
    <>
        <NavBar />
        <Hero />
        <ShowcaseSection />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
        <TechStack />
        <Testimonials />
        <Contact />
        <Footer />
    </>
  )
}

export default App