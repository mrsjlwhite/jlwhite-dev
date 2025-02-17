import React from 'react'
import HomeHeader from '../components/homeHeader/homeHeader'
import MyNavbar from '../components/myNavbar/MyNavbar'
import AboutMeBanner from '../components/aboutMeBanner/AboutMeBanner'
import WorkExperienceSection from '../components/workExperienceSection/workExperienceSection'
import ProjectsSection from '../components/projectsSection/projectsSection'
import { projects } from '@/data/projects'

export default function HomePage() {
    return (
        <>
            <HomeHeader />
            <MyNavbar />
            <AboutMeBanner />
            <WorkExperienceSection />
            <ProjectsSection projects={projects.filter(p => p.previewOnHomepage)} />
        </>
    )
}