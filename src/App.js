import Hero from "./components/Hero";
import Nav from "./components/Nav";
import FeaturedProjects from "./components/FeaturedProjects";
import ModuleGrid from "./components/ModuleGrid";
import About from "./components/About";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Skills from "./components/Skills";
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
      <Footer />
     {/* <Contact /> */}
    </div>
  );
}

export default App;