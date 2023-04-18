import React, { useEffect, useState } from "react";
import AboutMe from '@/components/aboutMe/AboutMe';
import Header from '@/components/Header';
import MyNavbar from '@/components/navbars/MyNavbar';
import ExperiencesGallery from "@/components/experiencesGallery/ExperiencesGallery";
import MyLinks from "@/components/MyLinks";
import LoadingIcon from "@/components/shared/LoadingIcon";
import jobTechIcons from "@/data/jobTechIcons";
import useWindowDimensions from "@/hooks/useWindowDimensions";
import Experience from "@/interfaces/experience";

function App() {
  const [resumeJobs, setResumeJobs] = useState<Experience[]>([]);
  const [resumeSkills, setResumeSkills] = useState<string[]>([]);
  const [resumeAbout, setResumeAbout] = useState('');
  const [resumeFun, setResumeFun] = useState('');
  const [fetchingData, setFetchingData] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const { width } = useWindowDimensions();

  useEffect(() => {
    if (!width) {
      return;
    }
    const mobile = width <= 650;
    const tablet = width <= 768;
    const results = mobile || tablet ? true : false;
    // const results = width <= tabletWidth ? false : true;
    // console.log({mobile})
    // console.log({tablet})
    setIsMobile(results);
  }, [width])

  useEffect(() => {
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

    fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite')
      .then(res => res.json())
      .then(resume => {
        const { basics, interests, work, skills } = resume;
        setResumeAbout(basics.summary);

        setResumeFun(interests[0].name);

        const jobs = work.map(buildExperienceCard);
        setResumeJobs(jobs);

        const skillNames = skills.map((skillset) => skillset.name);
        setResumeSkills(skillNames);

        setFetchingData(false);
      })
      .catch((err) => console.error(`🚨Issue getting resume data: ${err}`));
  }, []);

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
          <MyNavbar isMobile={isMobile} />
          <AboutMe aboutBlurb={resumeAbout} funBlurb={resumeFun} skillset={resumeSkills} />
          <ExperiencesGallery experiences={resumeJobs} isMobile={isMobile} />
          <MyLinks />
        </>
      }
    </>
  );
}

export default App;
