import { IWorkProject } from "@/interfaces/workProject";

export const projects: IWorkProject[] = [
    {
        name: 'Heyyo Kimba',
        description: `
        A tech & lifestyle blog, utilizing responsive design and a static application for performance. 
        Includes integration with SendGrid for sending emails to the blogger, with reCAPTCHA validation to prevent spams.
        `,
        tech: ['react', 'next.js', 'typescript', 'sass'],
        githubLink: 'https://github.com/mrsjlwhite/heyyo-kimba',
        liveLink: 'https://heyyokimba.com',
        date: 'September 4, 2022',
        slug: 'heyyo-kimba'
    },
    {
        name: 'HundekeyCreeates',
        description: `
        An art portfolio for a graphic designer, displaying a plethora of art samples with a custom photo & video viewer.
        Has responsive design and hosted for free with GitHub Pages
        `,
        tech: ['react', 'javascript', 'sass'],
        githubLink: 'https://github.com/mrsjlwhite/hundekeycreeates',
        liveLink: 'https://hundekeycreeates.com/',
        date: 'December 10, 2022',
        slug: 'hundekey-creeates'
    },
    {
        name: 'Poke Quiz',
        description: `
        For a tech interview, I was tasked to work with an external API while only using vanilla JavaScript.
        Hence this project is using an open source Pokémon API to randomly provide you a pocket monster based on your selections.
        `,
        tech: ['html', 'css', 'javascript'],
        githubLink: 'https://github.com/mrsjlwhite/poke-quiz',
        liveLink: 'https://mrsjlwhite.github.io/poke-quiz/',
        date: 'March 27, 2023',
        slug: 'poke-quiz'
    }
]