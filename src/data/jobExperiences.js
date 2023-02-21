// programmer icon names
const react = 'react-original';
const typescript = 'typescript-plain';
const javascript = 'javascript-plain';
const csharp = 'csharp-plain';
const mysql = 'mysql-plain';
const atlassian = 'matlab-plain';
const jira = 'jira-plain';
const confluence = 'confluence-original';
const github = 'github-original';
const angular = 'angularjs-plain';
const bootstrap = 'bootstrap-plain';
const css = 'css3-plain';
const html5 = 'html5-plain';
const mongo = 'mongodb-plain';
const express = 'express-original';
const node = 'nodejs-plain';
const net = 'dotnetcore-plain';
const bitbucket = 'bitbucket-original';
const trello = 'trello-plain';

const JobExperiences = [
    {
        name: 'Tresta',
        time: 'Aug 2021 to Jan 2023',
        title: 'Software Developer',
        description: 'Tresta is a powerful virtual phone application that helps businesses create and fully manage their business phone numbers, auto-assistants, and team communication, all from any device.',
        fullDescription: [
            'Developed closely aligning with UX/UI design from mockups, building mobile applications for both iOS and Android devices by utilizing React Native.',
            'Utilized HTML, SASS, and Javascript to build a modern and seamless user experience that was cross-browser-compatible.',
            'Contributed to building new features and functionality, for an online SMS messaging web app. Expanded and improved upon existing APIs, internal and third-party systems, and user interfaces for both web and mobile applications, utilizing C# and Entity Framework.',
            'On regular on-call rotation, for one day a week, accessible should there be a system emergency, minor reboot needed on a server, or assisting in customer support related-tickets.',
            'Updated existing relational databases in AWS MySQL Server using Entity Framework migrations.',
            'Working closely with QA teammates in ensuring stable and consistent UI/UX experience across multiple browsers and devices.',
            'Write and update documentation as needed, for developer processes, team standards, and general how-to articles.',
            'Following scrum processes, participating in sprint planning and daily stand-ups. Rotating between peer code reviews, ensuring consistency throughout the project, and utilizing team documentation on code standards.'
        ],
        tech: [
            'React Native',
            'TypeScript',
            'JavaScript',
            'C#',
            'Entity Framework',
            'MySQL',
            'Atlassian Suite',
            'GitHub'
        ],
        techIcons: [
            react,
            typescript,
            javascript,
            csharp,
            net,
            mysql,
            atlassian,
            jira,
            confluence,
            github
        ]
    },
    {
        name: 'IAPMO',
        time: 'Apr 2018 to Aug 2021',
        title: 'Applications & Web Developer',
        description: 'Founded in 1926, IAPMO coordinates the development and adaptation of plumbing, mechanical, swimming pool and solar energy codes to meet the specific needs of individual jurisdictions across North America and abroad.',
        fullDescription: [
            'Contributed in building a .NET enterprise-level, multi-tiered, MVC web application, utilizing object-oriented-programming, to support the business systems and processes. Full Stack development, building features from the data layer up to the presentation layer.',
            'Built RESTful APIs using WebAPI, on top of MVC frameworks, with back-end data validation and processing in C#, all returning JSON responses. These responses would be delivered to dynamic AngularJS components with generic implementations for reusability, with views dependent upon user’s permission level.',
            'Implemented Microsoft Office Interop and ClosedXML for automated Excel generation, Excel importing and processing, displaying and styling the data per the specifications along with multiple document layouts. All developed with test driven development, resulting in a testable and maintainable isolated implementation.',
            'Developed scheduled background jobs with SignalR, implemented data snapshots with JSON serialization and deserialization, dynamic server-side DataTable, hidden user notes, with validation in both JavaScript and C#, data pre-population, and accompanying unit tests.',
            'Built relational databases with SQL Server using Entity Framework\'s Code First Approach to capture data entry, and used LINQ for data access and AutoMapper for object-to-object mapping.',
            'Collaborated with team for design and development, participated in Agile Scrum methodology and related meetings, adhered to team patterns, and debugged arisen issues.'
        ],
        tech: [
            'SQL',
            'Entity Framework',
            'C#',
            'JavaScript',
            'AngularJS',
            'Angular DataTables',
            'Bootstrap',
            'CSS3',
            'HTML5',
            'Jira',
            'Confluence',
            'GitHub'
        ],
        techIcons: [
            csharp,
            javascript,
            angular,
            net,
            bootstrap,
            css,
            html5,
            github,
            atlassian,
            jira,
            confluence
        ]
    },
    {
        name: 'Freelance',
        time: 'Jan 2018 to Apr 2018',
        title: 'Web Developer',
        description: 'Working closely with remote clients to provide their web-app dreams.',
        fullDescription: [
            'Built MVC applications for clients using AngularJS, Node.js, and Express.js with third-party API integrations.',
            'Analyzed and gathered requirements, designed and created UI mockups.',
            'Developed custom UIs, with HTML5, CSS3, Bootstrap, JavaScript. Built front-end with AngularJS in MVC application.'
        ],
        tech: [
            'MongoDB',
            'Express.js',
            'AngularJS',
            'Node',
            'Bootstrap',
            'CSS3',
            'HTML5',
            'BitBucket'
        ],
        techIcons: [
            mongo,
            express,
            angular,
            javascript,
            node,
            bootstrap,
            css,
            html5,
            bitbucket
        ]
    },
    {
        name: 'Laso Concepts',
        time: 'Jul 2017 to Jan 2018',
        title: 'Full Stack Developer',
        description: 'Laso Concepts is a platform for connecting healthcare institutions, patients, and support teams. The MVP was built as a mobile responsive single page application. It featured thorough user onboarding; multiple profile support; hierarchical group messaging; direct messaging; on-site and email notifications; blogging and content management system; and content moderation.',
        fullDescription: [
            'Used MongoDB aggregation pipelines to join denormalized data from multiple collections to reduce server round trips.',
            'Leveraged Express.js routing stacks to cleanly enforce authentication, model validation, and authorization.',
            'Rapidly prototyped a variety of full-stack features, using RESTful APIs.',
            'Built administrative data management interface for manually adjusting or removing user accounts and user-generated content.',
            'Adhered to team, industry standards with respect to API design, ES6 coding style, CSS conventions, Promise handling, and security.',
            'Participated in daily scrum meetings, weekly client demos and feedback meetings, strict peer code review process, technical presentations to development team, and technical and product ideation.'
        ],
        tech: [
            'MongoDB',
            'Express.js',
            'AngularJS',
            'Node',
            'Bootstrap',
            'CSS3',
            'HTML5',
            'Trello',
            'GitHub'
        ],
        techIcons: [
            mongo,
            express,
            angular,
            javascript,
            node,
            bootstrap,
            css,
            html5,
            trello,
            github
        ]
    },
    {
        name: 'Prime Healthcare',
        time: 'Feb 2016 to Jul 2017',
        title: 'Marketing Internal Communications Coordinator',
        description: 'Prime Healthcare is an award-winning health system operating 45 hospitals and more than 300 outpatient locations in 14 states, providing over 2.6 million patient visits annually. It is one of the nation\'s leading health systems dedicated to providing the highest quality healthcare.',
        fullDescription: [
            'Helped drive over 40 website redesigns, maintained SharePoint sites and managed newsletters.',
            'Utilized various technologies to aid the VP of Communications and the Senior Director of Government Relations create, execute digital marketing, communication and public relations campaigns.',
            'Awarded employee of the year for 2016.'
        ],
        tech: [],
        techIcons: []
    }
];

export default JobExperiences;