import { IWorkProject } from "@/interfaces/workProject";
import { ProjectNames } from "constants/projectNames";

export const projects: IWorkProject[] = [
    {
        name: ProjectNames.DigitalResume,
        description: `
        A digital resume for a neurologist with a diverse set of resumes and accreditations & accolades to present.
        Features included
        : Clean UI/UX professional design with a retro colorway.
        : A seamless homepage with "endless" scroll, with clean informational cards that fade in on scroll.
        : Ability for client to update content on site with Markdown syntax.
        : Users can download client-provided documents.
        `,
        tech: ['react', 'next.js', 'typescript', 'bootstrap', 'sass'],
        projectType: 'Client Work',
        githubLink: '',
        liveLink: '',
        date: 'September 18, 2023',
        slug: 'digital-resume'
    },
    {
        name: ProjectNames.Entourage,
        description: `
        A website for a bride to share with her bridesmaids. 
        Features included
        : Post-it like notes to share.
        : Calendar to post events to be aware of.
        : Live countdowns for upcoming events.
        : Links the bride needed to share.
        : A photo gallery.
        `,
        tech: ['react', 'next.js', 'sass'],
        projectType: 'Client Work',
        githubLink: '',
        liveLink: '',
        date: 'May 16, 2023',
        slug: 'bride-entourage'
    },
    {
        name: ProjectNames.PokeQuiz,
        description: `
        For a tech interview, I was tasked to work with an external API while only using vanilla JavaScript.
        Hence this project is using an open source Pokémon API to randomly provide you a pocket monster based on your selections.
        `,
        tech: ['html', 'css', 'javascript'],
        projectType: 'Tech Interview',
        githubLink: 'https://github.com/mrsjlwhite/poke-quiz',
        liveLink: 'https://mrsjlwhite.github.io/poke-quiz/',
        date: 'March 27, 2023',
        slug: 'poke-quiz'
    },
    {
        name: ProjectNames.Kimba,
        description: `
        A tech & lifestyle blog, utilizing responsive design and a static application for performance. 
        Includes integration with SendGrid for sending emails to the blogger, with reCAPTCHA validation to prevent spams.
        `,
        tech: ['react', 'next.js', 'typescript', 'sass'],
        projectType: 'Personal Project',
        githubLink: 'https://github.com/mrsjlwhite/heyyo-kimba',
        liveLink: 'https://heyyokimba.com',
        date: 'September 4, 2022',
        slug: 'heyyo-kimba'
    },
    {
        name: ProjectNames.Hundekey,
        description: `
        An art portfolio for a graphic designer, displaying a plethora of art samples with a custom photo & video viewer.
        Has responsive design and hosted for free with GitHub Pages
        `,
        tech: ['react', 'javascript', 'sass'],
        projectType: 'Client Work',
        githubLink: 'https://github.com/mrsjlwhite/hundekeycreeates',
        liveLink: 'https://hundekeycreeates.com/',
        date: 'December 10, 2022',
        slug: 'hundekey-creeates'
    }
]