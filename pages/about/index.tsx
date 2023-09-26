import styles from '@/styles/about.module.scss';
import { aboutMe } from '@/data/aboutMe';
import PageContainer from 'containers/PageContainer';

type Props = {
    description: string
}

const About = ({ description }: Props) => {

    return (
        <PageContainer>
            <p>{description}</p>
        </PageContainer>
    )
}

export async function getStaticProps() {
    const description = aboutMe;

    return {
        props: {
            description
        }
    }
}

export default About