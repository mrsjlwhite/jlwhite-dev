type GitConnectedProject = {
    name: string
    description: string
    url: string
    highlights: []
    keywords: []
    roles: []
    startDate: string
    endDate: string
    entity: string
    type: string
    displayName: string
    website: string
    summary: string
    primaryLanguage: string
    languages: string[]
    libraries: []
    githubUrl: string
    repositoryUrl: string
    start: { year: null, month: null, day: null }
    end: { year: null, month: null, day: null }
    images: []
    videos: []
}

export default GitConnectedProject;