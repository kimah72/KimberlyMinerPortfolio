import Hero from "./components/Hero";
import Nav from "./components/Nav";
import FeaturedProjects from "./components/FeaturedProjects";
import ModuleGrid from "./components/ModuleGrid";

function App() {
  return (
    <div className="App">
      <Hero />
      <Nav />
      <FeaturedProjects /> 
      <ModuleGrid />
    </div>
  );
}

export default App;