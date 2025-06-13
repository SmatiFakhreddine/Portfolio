import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import  NavBar  from "./NavBar";
import  Banner  from "./Banner";
import  Skills  from "./Skills";
import  Projects  from "./Projects";
import  Contact  from "./Contact";
import  Footer  from "./Footer";

function App() {

  const [mood, setMood] = useState("dark");
  const root = document.querySelector(":root");
  
  useEffect(() => {
      if (localStorage.mood == "light") {
        setMood("light");
        root.classList.add("light-root");
      }
  }, []);

  function handleClick () {
      if (mood == "dark"){
        root.classList.add("light-root");
        setMood("light");
        localStorage.setItem("mood", "light");
      } else {
        root.classList.remove("light-root");
        setMood("dark");
        localStorage.setItem("mood", "dark");
      }
    };

  return (
    <div className="App">
      <NavBar handleClick={handleClick} mood={mood} />
      <Banner mood={mood} />
      <Skills mood={mood} />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
