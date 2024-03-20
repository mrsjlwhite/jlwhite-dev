import IGitConnectedBasics from "./gitConnectedBasics"
import IGitConnectedEducation from "./gitConnectedEducation"
import IGitConnectedInterest from "./gitConnectedInterest"
import IGitConnectedProject from "./gitConnectedProject"
import IGitConnectedSkill from "./gitConnectedSkill"
import IGitConnectedWork from "./gitConnectedWork"

type IGitConnectedPortfolio = {
    basics: IGitConnectedBasics
    skills: IGitConnectedSkill[]
    projects: IGitConnectedProject[]
    work: IGitConnectedWork[]
    publications: []
    education: IGitConnectedEducation[]
    volunteer: []
    awards: []
    languages: []
    interests: IGitConnectedInterest[]
    references: []
    certificates: []
    meta: {
        note: string
        canonical: string
        version: string
        lastModified: string
    }
}

export default IGitConnectedPortfolio;