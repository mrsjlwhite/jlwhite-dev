import React, { useEffect } from "react";
import './App.scss';
import AboutMeBanner from './components/AboutMeBanner';
import Header from './components/Header';
import MyNavbar from './components/MyNavbar';
import ExperiencesGallery from "./components/ExperiencesGallery";
import MyLinks from "./components/MyLinks";

function App() {

  useEffect(() => {
    let url = window.location.href.split("/");
    let target = url[url.length - 1].toLowerCase();
    let element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="app-container">
      <Header></Header>
      <MyNavbar></MyNavbar>
      <AboutMeBanner></AboutMeBanner>
      <ExperiencesGallery></ExperiencesGallery>
      <MyLinks></MyLinks>
    </div>
  );
}

export default App;
