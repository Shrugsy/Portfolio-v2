import React from "react";
import About from "./views/About";
import Projects from "./views/Projects";
import Skills from "./views/Skills";
import Education from "./views/Education";
import Contact from "./views/Contact";
import Landing from "./views/Landing";
import Nav from "./components/Nav";
import Experience from "./views/experience/Experience";

function App() {
  return (
    <div className="App">
      <Nav />
      <div>
        <Landing />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
    </div>
  );
}

export default App;
