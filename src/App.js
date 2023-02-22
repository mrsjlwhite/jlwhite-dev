import React, { useEffect } from "react";
import './App.scss';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import MyNavbar from './components/MyNavbar';
import ExperiencesGallery from "./components/ExperiencesGallery";
import MyLinks from "./components/MyLinks";

function App() {

  useEffect(() => {
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="app-container">
      <Header></Header>
      <MyNavbar></MyNavbar>
      <AboutMe></AboutMe>
      <ExperiencesGallery></ExperiencesGallery>
      <MyLinks></MyLinks>
      <footer>
        Copyright &#169; Developerd by J.L. White 🤍
      </footer>
    </div>
  );
}

export default App;
