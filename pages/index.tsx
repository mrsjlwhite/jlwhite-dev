import React, { useEffect, useState } from "react";
import Header from "./_home/header/Header";
import MyNavbar from 'components/myNavbar/MyNavbar';
import MyLinks from "./_home/myLinks/MyLinks";
import LoadingIcon from "pages/_home/loadingIcon/LoadingIcon";
import AboutMeBanner from "components/aboutMeBanner/AboutMeBanner";
import WorkExperienceSection from "components/workExperienceSection/workExperienceSection";
import ProjectsSection from "components/projectsSection/projectsSection";

function App() {
  const [fetchingData, setFetchingData] = useState(true);

  useEffect(() => {
    // allow single spin for loading icon
    setTimeout(() => setFetchingData(false), 800);
  }, []);

  return (
    <>
      {fetchingData
        ?
        <LoadingIcon />
        :
        <>
          <Header />
          <MyNavbar />
          <AboutMeBanner />
          <WorkExperienceSection />
          <ProjectsSection />
          <MyLinks />
        </>
      }
    </>
  );
}

export default App;
