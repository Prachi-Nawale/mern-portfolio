import CursorGlow from "./components/CursorGlow";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectList from "./components/ProjectList";
import Skills from "./components/Skills";
import CertificateList from "./components/CertificateList";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <CursorGlow />
      <Navbar />

      <div id="about">
        <Hero />
      </div>

      <div id="projects">
        <ProjectList />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="certificates">
        <CertificateList />
      </div>

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
