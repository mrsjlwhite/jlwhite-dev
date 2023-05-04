import React, { useEffect, useState } from "react";
import AboutMe from '@/components/aboutMe/AboutMe';
import Header from '@/components/Header';
import MyNavbar from '@/components/navbars/MyNavbar';
import MyExperience from "@/components/MyExperience";
import MyLinks from "@/components/MyLinks";
import LoadingIcon from "@/components/shared/LoadingIcon";
import Experience from "@/interfaces/experience";
import GitConnectedWork from "@/interfaces/gitConnectedWork";
import { getGitConnectedPortfolio } from "@/lib/api";
import { getTechIconsByJobName } from "@/lib/utils";
import MyWork from "@/components/MyWork";
import { useRouter } from "next/router";

type ResumeProps = {
  summary: string
  interests: string
  work: GitConnectedWork[]
  skillNames: string[]
}

type Props = {
  resume: ResumeProps
}

function App({ resume }: Props) {
  const [resumeJobs, setResumeJobs] = useState<Experience[]>([]);
  const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  const [resumeAbout, setResumeAbout] = useState('');
  const [resumeFun, setResumeFun] = useState('');
  const [fetchingData, setFetchingData] = useState(true);
  const [scrollingToSection, setIsScrolling] = useState(false);
  const [routeUrl, setRouteUrl] = useState(undefined);
  const router = useRouter();

  useEffect(() => {
    if (!resume) {
      return;
    }

    const buildExperienceCard = (work): Experience => {
      const dateOptions: any = { year: "numeric", month: "short" };
      const startDate = new Date(work.startDate).toLocaleDateString('en-us', dateOptions);
      const endDate = new Date(work.endDate).toLocaleDateString('en-us', dateOptions);
      const timeResults = endDate === 'Invalid Date' ? `${startDate} to Present` : `${startDate} to ${endDate}`;

      const techStack = work.highlights[work.highlights.length - 1];
      const techStackNames = techStack.replace('Technologies used: ', '').split(',');

      return {
        name: work.company,
        time: timeResults,
        title: work.position,
        description: work.summary,
        fullDescription: work.highlights.splice(0, work.highlights.length - 1),
        tech: techStackNames,
        techIcons: getTechIconsByJobName(work.name)
      }
    };

    const { summary, interests, work, skillNames } = resume;
    const jobs = work.map(buildExperienceCard);
    setResumeJobs(jobs);
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
          <MyExperience experiences={resumeJobs} />
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

  const { basics, interests, work, skills } = data;

  const resume: ResumeProps = {
    summary: basics.summary,
    interests: interests[0].name,
    work: work,
    skillNames: skills.map((skillset) => skillset.name)
  }

  return {
    props: {
      resume: resume
    }
  }
}

export default App;
