'use client'
import React from 'react'
// import styles from '@/styles/home.module.scss'
import HomeHeader from '../components/homeHeader/homeHeader'
import MyNavbar from '../components/myNavbar/MyNavbar'
import AboutMeBanner from '../components/aboutMeBanner/AboutMeBanner'
import WorkExperienceSection from '../components/workExperienceSection/workExperienceSection'
import ProjectsSection from '../components/projectsSection/projectsSection'
import MyLinks from '../components/myLinks/MyLinks'

export default function HomePage() {
    return (
        <>
            <HomeHeader />
            <MyNavbar />
            <AboutMeBanner />
            <WorkExperienceSection />
            <ProjectsSection />
            <MyLinks />
        </>
    )
}