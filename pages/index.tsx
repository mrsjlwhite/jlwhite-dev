import React, { useEffect, useState } from "react";
import Header from "./_home/header/Header";
import MyNavbar from 'core/components/myNavbar/MyNavbar';
import MyExperience from "./_home/myExperience/MyExperience";
import MyLinks from "./_home/myLinks/MyLinks";
import LoadingIcon from "pages/_home/loadingIcon/LoadingIcon";
import MyWork from "./_home/myWork/MyWork";
import { useRouter } from "next/router";
import AboutMeBanner from "./_home/aboutMeBanner/AboutMeBanner";

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
          <MyExperience />
          <MyWork />
          <MyLinks />
        </>
      }
    </>
  );
}

export default App;
