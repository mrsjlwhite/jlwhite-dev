import React, { useEffect, useState } from "react";
import MyNavbar from 'components/myNavbar/MyNavbar';
import MyLinks from "../components/myLinks/MyLinks";
import AboutMeBanner from "components/aboutMeBanner/AboutMeBanner";
import WorkExperienceSection from "components/workExperienceSection/workExperienceSection";
import ProjectsSection from "components/projectsSection/projectsSection";

function App() {

  return (
    <>
      {/* <Header /> */}
      <MyNavbar />
      <AboutMeBanner />
      <WorkExperienceSection />
      <ProjectsSection />
      <MyLinks />
    </>
  );
}

export default App;
