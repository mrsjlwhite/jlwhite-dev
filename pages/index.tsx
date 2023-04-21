import React, { useEffect, useState } from "react";
import AboutMe from '@/components/aboutMe/AboutMe';
import Header from '@/components/Header';
import MyNavbar from '@/components/navbars/MyNavbar';
import ExperiencesGallery from "@/components/experiencesGallery/ExperiencesGallery";
import MyLinks from "@/components/MyLinks";
import LoadingIcon from "@/components/shared/LoadingIcon";
import jobTechIcons from "@/data/jobTechIcons";
import Experience from "@/interfaces/experience";
import GitConnectedPortfolio from "@/interfaces/gitConnected";
import GitConnectedWork from "@/interfaces/gitConnectedWork";

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

      const jobIcons = jobTechIcons.get(work.name);
      const icons = jobIcons ? jobIcons : [];

      return {
        name: work.company,
        time: timeResults,
        title: work.position,
        description: work.summary,
        fullDescription: work.highlights.splice(0, work.highlights.length - 1),
        tech: techStackNames,
        techIcons: icons
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
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    if (!element) {
      return;
    }
    element.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
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
          <AboutMe aboutBlurb={resumeAbout} funBlurb={resumeFun} skillset={resumeSkills} />
          <ExperiencesGallery experiences={resumeJobs} />
          <MyLinks />
        </>
      }
    </>
  );
}

export async function getServerSideProps() {
  const data: GitConnectedPortfolio = await fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite')
    .then(res => res.json())
    .catch((err) => console.error(`🚨Issue getting resume data: ${err}`));

  if (!data) {
    return {
      notFound: true,
    }
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
