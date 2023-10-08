import styles from './about.module.scss';
import { aboutMe } from '@/data/aboutMe';
import PageContainer from 'containers/PageContainer';
import { getGitConnectedPortfolio } from '@/lib/api';
import CardContainer from 'containers/card/CardContainer';
import TechIcon from '@/components/experienceCard/TechIcon';
import AboutMeSkills from '@/components/aboutMe/AboutMeSkills';
import AboutMeFun from '@/components/aboutMe/AboutMeFun';
import { tldr } from '@/data/tldrExperience';

type Props = {
    description: string
    skillNames: string[]
    funBlurb: string
}

const About = ({ description, skillNames, funBlurb }: Props) => {

    function renderAboutMeContent(): JSX.Element {
        return (
            <>
                <p className='section-body'>
                    {description}
                </p>
                <AboutMeSkills skillset={skillNames} />
                <AboutMeFun funText={funBlurb} />
            </>
        )
    }

    function renderFooterContent(): JSX.Element {
        return <>{tldr.techIcons.map((icon) => <TechIcon key={icon} icon={icon} className='m-1' />)}</>
    }

    return (
        <PageContainer>
            <CardContainer
                title='hi'
                content={renderAboutMeContent()}
                footer={renderFooterContent()}
                fullPage
            />
        </PageContainer>
    )
}

// export async function getStaticProps() {
//     const description = aboutMe;

//     return {
//         props: {
//             description
//         }
//     }
// }

export async function getServerSideProps() {
    const data = await getGitConnectedPortfolio();

    if (!data) {
        return { notFound: true }
    }

    const { basics, skills, interests } = data;

    return {
        props: {
            description: basics.summary,
            skillNames: skills.map((skillset) => skillset.name),
            interests: interests[0].name
        }
    }
}

export default About