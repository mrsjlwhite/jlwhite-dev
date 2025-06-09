import { IExperienceJob } from "@/lib/interfaces/experienceJob";
import { angular, javascript, typescript, csharp, dotNet, entityFramework, nodejs, vuejs, html, css, sqlServer, reactnative, mySql, esri } from "./languages";

export const experiences: IExperienceJob[] = [
    {
        name: 'Sun Ridge Systems',
        title: 'Full Stack Developer',
        dates: 'May 2025 to Present',
        techStack: [angular, typescript, csharp, dotNet, sqlServer, nodejs, esri],
        description: `At Sun Ridge Systems, I contribute to the development of public safety software used by law enforcement agencies. 
        I focus on building intuitive, user-friendly map features using Esri tools, ensuring a smooth and responsive experience across both desktop and mobile platforms. 
        My work helps support mission-critical workflows for emergency dispatch and situational awareness.`
    },
    {
        name: 'Synergy',
        title: 'Full Stack Engineer',
        dates: 'Jan 2024 to May 2025',
        techStack: [angular, javascript, typescript, csharp, dotNet, entityFramework, nodejs],
        description: `As a Full Stack Engineer at Synergy, I spearheaded critical projects supporting the U.S. Department of Agriculture's Forest Service. 
        From rewriting legacy applications to enhancing geospatial tools and mobile platforms, I delivered high-impact solutions under tight deadlines, ensuring performance, security, and usability across the board.
        `
    },
    {
        name: 'Tech Quarry Sato',
        title: 'Full Stack Developer',
        dates: 'May 2023 to Sep 2023',
        techStack: [vuejs, javascript, typescript, html, css, sqlServer],
        description: `For Xerox, I independently led the development of a robust ticketing system and collaborated on enhancing APIs and modular architectures. 
        My contributions improved efficiency, reduced processing time by 80%, and empowered stakeholders with optimized reporting tools.`
    },
    {
        name: 'Tresta',
        title: 'Software Developer',
        dates: 'Aug 2021 to Jan 2023',
        techStack: [reactnative, javascript, typescript, html, css, nodejs, csharp, entityFramework, mySql],
        description: `As part of Tresta, I built mobile and web application features that transformed how users communicate, including introducing GIF support and designing intuitive management interfaces. 
        I thrived on creating seamless full-stack solutions while fostering a collaborative and agile team environment.`
    },
    {
        name: 'I.A.P.M.O.',
        title: 'Applications & Web Developer',
        dates: 'Apr 2018 to Aug 2021',
        techStack: [angular, javascript, html, css, csharp, entityFramework, sqlServer],
        description: `At I.A.P.M.O., I helped lay the groundwork for a multi-tiered .NET enterprise application, streamlining business processes with custom scheduling and reporting tools. 
        As a founding team member, I set architectural standards and delivered scalable, user-centric solutions.`
    }
];