import React, { useEffect, useState } from "react";
import AboutMe from 'pages/_home/aboutMe/AboutMe';
import Header from "./_home/header/Header";
import MyNavbar from 'core/components/myNavbar/MyNavbar';
import MyExperience from "./_home/myExperience/MyExperience";
import MyLinks from "./_home/myLinks/MyLinks";
import LoadingIcon from "pages/_home/loadingIcon/LoadingIcon";
import { getGitConnectedPortfolio } from "core/lib/api";
import MyWork from "./_home/myWork/MyWork";
import { useRouter } from "next/router";
import styles from '../styles/index.module.scss';

type ResumeProps = {
  summary: string
  interests: string
  skillNames: string[]
}

type Props = {
  resume: ResumeProps
}

function App({ resume }: Props) {
  // const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  // const [resumeAbout, setResumeAbout] = useState('');
  // const [resumeFun, setResumeFun] = useState('');
  const [fetchingData, setFetchingData] = useState(true);
  // const [scrollingToSection, setIsScrolling] = useState(false);
  // const [successfullyScrolled, setSuccessfullyScrolled] = useState(false);
  const [routeUrl, setRouteUrl] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    // allow single spin for loading icon
    setTimeout(() => setFetchingData(false), 800);
  }, []);


  return (
    <div className={styles.gridOverlay}>
      {/* {fetchingData
        ?
        <LoadingIcon />
        :
        <>
          <Header />
          <MyNavbar />
          <AboutMe aboutBlurb={resumeAbout} funBlurb={resumeFun} skillset={resumeSkills} />
          <MyExperience />
          <MyWork />
          <MyLinks />
        </>
      } */}
    </div>
  );
}

export async function getServerSideProps() {
  const data = await getGitConnectedPortfolio();

  if (!data) {
    return { notFound: true }
  }

  const { basics, interests, skills } = data;

  const resume: ResumeProps = {
    summary: basics.summary,
    interests: interests[0].name,
    skillNames: skills.map((skillset) => skillset.name)
  }

  return {
    props: {
      resume: resume
    }
  }
}

export default App;
