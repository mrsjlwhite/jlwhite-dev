import React, { useEffect, useState } from "react";
import './App.scss';
import AboutMe from './components/AboutMe';
import Header from './components/Header';
import MyNavbar from './components/MyNavbar';
import ExperiencesGallery from "./components/ExperiencesGallery";
import MyLinks from "./components/MyLinks";
import LoadingIcon from "./components/LoadingIcon";
import { Container } from "react-bootstrap";
import jobTechIcons from "./data/jobTechIcons";

function App() {
  const [resumeJobs, setResumeJobs] = useState([]);
  const [resumeSkills, setResumeSkills] = useState([]);
  const [resumeAbout, setResumeAbout] = useState('');
  const [resumeFun, setResumeFun] = useState('');
  const [fetchingData, setFetchingData] = useState(true);

  const buildExperienceCard = (work) => {
    const startDate = new Date(work.startDate).toLocaleDateString('en-us', { year: "numeric", month: "short" });
    const endDate = new Date(work.endDate).toLocaleDateString('en-us', { year: "numeric", month: "short" });

    const techStack = work.highlights[work.highlights.length - 1];
    const techStackNames = techStack.replace('Technologies used: ', '').split(',');

    const jobIcons = jobTechIcons.get(work.name);
    const icons = jobIcons ? jobIcons : [];

    return {
      name: work.company,
      time: `${startDate} to ${endDate}`,
      title: work.position,
      description: work.summary,
      fullDescription: work.highlights.splice(0, work.highlights.length - 1),
      tech: techStackNames,
      techIcons: icons
    }
  };

  useEffect(() => {
    fetch('https://gitconnected.com/v1/portfolio/mrsjlwhite')
      .then(res => res.json())
      .then(resume => {
        setResumeAbout(resume.basics.summary);

        setResumeFun(resume.interests[resume.interests.length - 1].name);

        const jobs = resume.work.map(buildExperienceCard);
        setResumeJobs(jobs);

        const skillNames = resume.skills.map((skillset) => skillset.name);
        setResumeSkills(skillNames);

        setFetchingData(false);
      });
  }, []);

  useEffect(() => {
    const url = window.location.href.split("/");
    const target = url[url.length - 1].toLowerCase();
    const element = document.getElementById(target);
    element && element.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="app-container">
      {fetchingData
        ?
        <Container className="loading-container">
          <LoadingIcon></LoadingIcon>
        </Container>
        :
        <>
          <Header></Header>
          <MyNavbar></MyNavbar>
          <AboutMe aboutBlurb={resumeAbout} funBlurb={resumeFun} skillset={resumeSkills}></AboutMe>
          <ExperiencesGallery experiences={resumeJobs}></ExperiencesGallery>
          <MyLinks></MyLinks>
        </>
      }
      <footer>
        Copyright &#169; Developerd by J.L. White 🤍
      </footer>
    </div>
  );
}

export default App;
