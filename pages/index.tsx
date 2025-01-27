import React, { useEffect, useState } from "react";
import Header from "./_home/header/Header";
import MyNavbar from 'core/components/myNavbar/MyNavbar';
import MyLinks from "./_home/myLinks/MyLinks";
import LoadingIcon from "pages/_home/loadingIcon/LoadingIcon";
import MyWork from "./_home/myWork/MyWork";
import AboutMeBanner from "../core/components/aboutMeBanner/AboutMeBanner";
import WorkExperienceSection from "@/components/workExperienceSection/workExperienceSection";

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
          <MyWork />
          <MyLinks />
        </>
      }
    </>
  );
}

export default App;
