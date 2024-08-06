import React, { useEffect, useState } from "react";
import AboutMe from 'pages/components/aboutMe/AboutMe';
import Header from "./components/header/Header";
import MyNavbar from '@/components/myNavbar/MyNavbar';
import MyExperience from "./components/myExperience/MyExperience";
import MyLinks from "./components/myLinks/MyLinks";
import LoadingIcon from "pages/components/loadingIcon/LoadingIcon";
import { getGitConnectedPortfolio } from "@/lib/api";
import MyWork from "./components/myWork/MyWork";
import { useRouter } from "next/router";

type ResumeProps = {
  summary: string
  interests: string
  skillNames: string[]
}

type Props = {
  resume: ResumeProps
}

function App({ resume }: Props) {
  const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  const [resumeAbout, setResumeAbout] = useState('');
  const [resumeFun, setResumeFun] = useState('');
  const [fetchingData, setFetchingData] = useState(true);
  const [scrollingToSection, setIsScrolling] = useState(false);
  const [successfullyScrolled, setSuccessfullyScrolled] = useState(false);
  const [routeUrl, setRouteUrl] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!resume) {
      return;
    }

    const { summary, interests, skillNames } = resume;
    setResumeAbout(summary);
    setResumeFun(interests);
    setResumeSkills(skillNames);

    // allow single spin for loading icon
    setTimeout(() => setFetchingData(false), 800);
  }, [resume]);

  useEffect(() => {
    const url = router.asPath.replace('/', '').toLowerCase();
    setRouteUrl(url);
    setIsScrolling(false);
    setSuccessfullyScrolled(false);
  }, [router.asPath]);

  useEffect(() => {
    if (!routeUrl || routeUrl.includes('work')) {
      return;
    }

    const waitToScroll = () => {
      return setTimeout(() => {
        setIsScrolling(true);
        scrollToSection();
      }, 1000);
    }

    const scrollToSection = () => {
      if (successfullyScrolled) {
        return;
      }

      if (fetchingData && !scrollingToSection) {
        return waitToScroll();
      }

      const section = document.getElementById(routeUrl);

      if (!section) {
        return waitToScroll();
      }
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      // section.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
      setIsScrolling(false);
      setSuccessfullyScrolled(true);
    }

    if (routeUrl) {
      scrollToSection();
    }
  }, [routeUrl, scrollingToSection]);

  return (
    <>
      {fetchingData
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
      }
    </>
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
