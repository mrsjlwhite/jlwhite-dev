import styles from '@/styles/about.module.scss';
import { aboutMe } from '@/data/aboutMe';
import PageContainer from 'containers/PageContainer';
import { getGitConnectedPortfolio } from '@/lib/api';

type Props = {
    description: string
}

const About = ({ description }: Props) => {

    return (
        <PageContainer>
            <p className='section-body'>
                {description}
            </p>
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

    const { basics } = data;

    return {
        props: {
            description: basics.summary
        }
    }
}

export default About