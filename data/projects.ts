import { IWorkProject } from "@/lib/interfaces/workProject";
import { ProjectTypes, ProjectNames } from 'lib/constants';
import { next, react, typescript, bootstrap, sass, html, css, javascript } from "./languages";

export const projects: IWorkProject[] = [
    {
        name: ProjectNames.MusicianWebsite,
        summary: "Singer-Songwriter's Aura Website",
        preview: "A high visual, aura aesthetic musician website featuring an aesthetic UI and dynamic content management.",
        description: `
        Helped co-develop a musician website for a singer-songwriter to showcase her music, announcements, accreditations, and accolades.
        Features included;
        : Youthful aura aesthetic with an aura-moving background.
        : Headless CMS with Notion for easy content updates by the client.
        : Responsive design for optimal viewing on all devices.
        : Integration with social media platforms for easy sharing.
        : Custom audio player for streaming the artist's music.
        : SEO optimization for better search engine visibility.
        `,
        tech: [react, next, typescript, sass],
        projectType: ProjectTypes.Client,
        githubLink: '',
        liveLink: '',
        date: 'May 5, 2024',
        slug: 'musician-website',
        imageCover: '/imgs/workSamples/musicianWebsite/musician0.png',
        images: ['/imgs/workSamples/musicianWebsite/musician1.png', '/imgs/workSamples/musicianWebsite/musician2.png', '/imgs/workSamples/musicianWebsite/musician3.png'],
        previewOnHomepage: false
    },
    {
        name: ProjectNames.DigitalResume,
        summary: "A Neurologist's Digital Resume",
        preview: "A sleek, professional digital resume platform tailored for a neurologist PhD candidate, featuring a modern UI and dynamic content management.",
        description: `
        Developed a digital resume for a neurologist PhD candidate to showcase diverse resumes, accreditations, and accolades.
        Features included;
        : Clean, professional UI/UX with a retro color palette.
        : Seamless homepage with endless scroll and fade-in informational cards.
        : Client-controlled content updates via Markdown.
        : Document downloads for user accessibility.
        : Detailed sections for publications, research, and academic achievements.
        `,
        tech: [react, next, typescript, bootstrap, sass],
        projectType: ProjectTypes.Client,
        githubLink: '',
        liveLink: '',
        date: 'September 18, 2023',
        slug: 'digital-resume',
        imageCover: '/imgs/workSamples/digitalResume/resume0.png',
        images: ['/imgs/workSamples/digitalResume/resume1.png', '/imgs/workSamples/digitalResume/resume2.png', '/imgs/workSamples/digitalResume/resume3.png'],
        previewOnHomepage: true
    },
    {
        name: ProjectNames.Entourage,
        summary: "Bridesmaids Dashboard",
        preview: "A fun, interactive dashboard for bridesmaids to stay connected and organized throughout wedding planning.",
        description: `
        Built a personalized website for a bride to share key wedding details with her bridesmaids.
        Features included;
        : Post-it style notes for sharing messages.
        : Event calendar for important dates.
        : Live countdown timers for upcoming events.
        : Curated links from the bride.
        : Photo gallery to share special moments.
        `,
        tech: [react, next, typescript, sass],
        projectType: ProjectTypes.Client,
        githubLink: '',
        liveLink: '',
        date: 'May 16, 2023',
        slug: 'bride-entourage',
        imageCover: '/imgs/workSamples/brideEntourage/entourage0.png',
        images: ['/imgs/workSamples/brideEntourage/entourage1.png', '/imgs/workSamples/brideEntourage/entourage2.png', '/imgs/workSamples/brideEntourage/entourage3.png'],
        previewOnHomepage: true
    },
    {
        name: ProjectNames.PokeQuiz,
        summary: "Pokémon Quiz",
        preview: "A fun, interactive Pokémon quiz built with vanilla JavaScript, integrating external APIs for dynamic content.",
        description: `
        Created for a technical interview challenge using only vanilla JavaScript and an open-source Pokémon API.
        Features included;
        : Randomly generates Pokémon based on user selections.
        : Clean, simple interface for easy interaction.
        : Uses a PokéAPI to update the UI based on the user's selected Pokémon type.
        : Fully vanilla project to practice JavaScript without frameworks.
        `,
        tech: [html, css, javascript],
        projectType: ProjectTypes.Interview,
        githubLink: 'https://github.com/mrsjlwhite/poke-quiz',
        liveLink: 'https://mrsjlwhite.github.io/poke-quiz/',
        date: 'March 27, 2023',
        slug: 'poke-quiz',
        imageCover: '/imgs/workSamples/poke/poke0.png',
        images: ['/imgs/workSamples/poke/poke1.png', '/imgs/workSamples/poke/poke2.png'],
        previewOnHomepage: false
    },
    {
        name: ProjectNames.Kimba,
        summary: "Tech & Lifestyle Blog",
        preview: "A modern, responsive tech and lifestyle blog optimized for performance with secure contact integrations.",
        description: `
        Designed and developed a static blog site focusing on tech and lifestyle topics.
        Features included;
        : Fully responsive design for all devices.
        : Integrated SendGrid for email communication, secured with reCAPTCHA validation.
        : Uses static markdown files for the blog posts, ensuring high performance.
        : Clean and modern UI for an optimal reading experience.
        `,
        tech: [react, next, typescript, sass],
        projectType: ProjectTypes.Personal,
        githubLink: 'https://github.com/mrsjlwhite/heyyo-kimba',
        liveLink: 'https://heyyokimba.com',
        date: 'September 4, 2022',
        slug: 'heyyo-kimba',
        imageCover: '/imgs/workSamples/kimba/kimba0.png',
        images: ['/imgs/workSamples/kimba/kimba1.png', '/imgs/workSamples/kimba/kimba2.png', '/imgs/workSamples/kimba/kimba3.png'],
        previewOnHomepage: true
    },
    {
        name: ProjectNames.Hundekey,
        summary: "Art Portfolio",
        preview: "A vibrant, custom art portfolio showcasing a graphic designer's work with a unique photo and video viewer.",
        description: `
        Created an art portfolio for a graphic designer, featuring a diverse array of artwork.
        Features included;
        : Custom photo and video viewer for enhanced artwork display.
        : Fully responsive design, hosted via GitHub Pages.
        `,
        tech: [react, javascript, sass],
        projectType: ProjectTypes.Client,
        githubLink: 'https://github.com/mrsjlwhite/hundekeycreeates',
        liveLink: 'https://hundekeycreeates.com/',
        date: 'December 10, 2022',
        slug: 'hundekey-creeates',
        imageCover: '/imgs/workSamples/hundekey/hundekey0.png',
        images: ['/imgs/workSamples/hundekey/hundekey1.png', '/imgs/workSamples/hundekey/hundekey2.png'],
        previewOnHomepage: true
    }
]
