import Hero from "./components/Hero";
import Nav from "./components/Nav";
import FeaturedProjects from "./components/FeaturedProjects";
import ModuleGrid from "./components/ModuleGrid";
import About from "./components/About";
import Education from "./components/Education";

function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <FeaturedProjects /> 
      <ModuleGrid />
      <About />
      <Education />
    </div>
  );
}

export default App;