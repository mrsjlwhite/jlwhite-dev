import Experience from "@/interfaces/experience";
import jobTechIcons from "./jobTechIcons";

export const tldr: Experience = {
    name: 'TL;DR',
    time: '2017 to Present',
    title: 'Fullstack Software Developer',
    description: `
    I've enjoyed working in both backend and frontend development for web and mobile applications.
    I've worked on projects solo as well as in a team setting, where I strive to be a great team player.
    `,
    fullDescription: [
        "Gathered requirements from client, designed and developed UX/UI mockups based on clientele requirements.",
        "Built a modern and seamless user experience for cross-browser-compatible, on iOS and Andriod.",
        "Expanded and improved upon existing APIs, and internal and third-party systems.",
        "Contributed to building enterprise-level, multi-tiered, MVC web applications, utilizing object-oriented programming.",
        "Full Stack development, building features from the data layer up to the presentation layer.",
        "Built RESTful APIs using WebAPI, on top of MVC frameworks, with back-end data validation using test-driven development."
    ],
    tech: [
        "React",
        "React Native",
        "Vue.js",
        "TypeScript",
        "JavaScript",
        "C#",
        "Entity Framework",
        "MySQL",
        "Bootstrap",
        "CSS3",
        "HTML5",
        "GitHub"
    ],
    techIcons: jobTechIcons.get('TL;DR')
}