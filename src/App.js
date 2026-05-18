import Hero from "./components/Hero";
import Nav from "./components/Nav";
import FeaturedProjects from "./components/FeaturedProjects";
import ModuleGrid from "./components/ModuleGrid";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <FeaturedProjects /> 
      <ModuleGrid />
      <About />
      <Education />
      <Certificates />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;