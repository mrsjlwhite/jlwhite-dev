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

  useEffect(() => {
    const buildExperienceCard = (work) => {
      const dateOptions = { year: "numeric", month: "short" };
      const startDate = new Date(work.startDate).toLocaleDateString('en-us', dateOptions);
      const endDate = new Date(work.endDate).toLocaleDateString('en-us', dateOptions);

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
