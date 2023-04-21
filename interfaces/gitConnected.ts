import GitConnectedBasics from "./gitConnectedBasics"
import GitConnectedEducation from "./gitConnectedEducation"
import GitConnectedInterest from "./gitConnectedInterest"
import GitConnectedProject from "./gitConnectedProject"
import GitConnectedSkill from "./gitConnectedSkill"
import GitConnectedWork from "./gitConnectedWork"

type GitConnectedPortfolio = {
    basics: GitConnectedBasics
    skills: GitConnectedSkill[]
    projects: GitConnectedProject[]
    work: GitConnectedWork[]
    publications: []
    education: GitConnectedEducation[]
    volunteer: []
    awards: []
    languages: []
    interests: GitConnectedInterest[]
    references: []
    certificates: []
    meta: {
        note: string
        canonical: string
        version: string
        lastModified: string
    }
}

export default GitConnectedPortfolio;