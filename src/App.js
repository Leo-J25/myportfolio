import "./App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume"
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar className="block"></Navbar>
      <Intro className="block"></Intro>
      <Skills className="block"></Skills>
      <Projects className="block"></Projects>
      <Resume className="block"></Resume>
      <Contact className="block"></Contact>
    </div>
  );
}

export default App;
