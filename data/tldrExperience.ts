import Experience from "@/interfaces/experience";
import jobTechIcons from "./jobTechIcons";

export const tldr: Experience = {
    name: 'TL;DR',
    time: '2017 to Present',
    title: 'Fullstack Software Developer',
    description: `
    I've enjoyed working in both backend and frontend development for web and mobile applications.
    Hence my experience has always been full stack, even if a role focused on one developement, my next role would focus on the opposite.
    I've worked on projects solo as well as in a team setting, where I strive to be a great team player.
    `,
    fullDescription: [
        "Gathered requirements from client, providing workflow improvements.",
        "Built a modern and seamless user experience.",
        "Built new and improved upon existing APIs, and internal and third-party systems.",
        "Full Stack development, building features from the data layer up to the presentation layer."
    ],
    tech: [
        "Angular",
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