import MyNavbar from '@/components/navbars/MyNavbar';
import { projects } from '@/data/projects';
import { IWorkProject } from '@/interfaces/workProject';
import { useRouter } from 'next/router';
import styles from '@/styles/work.module.scss';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import placeholder from '@/imgs/placeholder.png';
import kimba1 from '@/imgs/workSamples/kimba/kimba1.png';
import kimba2 from '@/imgs/workSamples/kimba/kimba2.png';
import kimba3 from '@/imgs/workSamples/kimba/kimba3.png';
import hundekey1 from '@/imgs/workSamples/hundekey/hundekey1.png';
import hundekey2 from '@/imgs/workSamples/hundekey/hundekey2.png';
import poke1 from '@/imgs/workSamples/poke/poke1.png';
import poke2 from '@/imgs/workSamples/poke/poke2.png';
import entourage1 from '@/imgs/workSamples/brideEntourage/entourage1.png';
import entourage2 from '@/imgs/workSamples/brideEntourage/entourage2.png';
import entourage3 from '@/imgs/workSamples/brideEntourage/entourage3.png';
import Image from 'next/image';

type Props = {
    workProject: IWorkProject
}

const WorkDetails = ({ workProject }: Props) => {
    const [mainImg, setMainImg] = useState(placeholder);
    const [imgTwo, setSecondImg] = useState(placeholder);
    const [imgThree, setThirdImg] = useState(placeholder);

    const router = useRouter();

    useEffect(() => {
        if (workProject) {
            switch (workProject.name) {
                case 'Heyyo Kimba':
                    setMainImg(kimba1);
                    setSecondImg(kimba2);
                    setThirdImg(kimba3);
                    break;
                case 'HundekeyCreeates':
                    setMainImg(hundekey1);
                    setSecondImg(hundekey2);
                    setThirdImg(null);
                    break;
                case 'Poke Quiz':
                    setMainImg(poke1);
                    setSecondImg(poke2);
                    setThirdImg(null);
                    break;
                case 'Bride Entourage':
                    setMainImg(entourage1);
                    setSecondImg(entourage2);
                    setThirdImg(entourage3);
                    break;
                default:
                    setMainImg(placeholder);
                    break;
            }
        }
    }, [workProject]);

    function setProjectDescription() {
        if (!workProject.description.includes(':')) {
            return (
                <p className={styles.projectDescText}>
                    {workProject.description}
                </p>
            )
        }

        const descSplit = workProject.description.split(':');
        const desc = descSplit[0];

        return (
            <p className={styles.projectDescText}>
                {desc}
                <ul>
                    {descSplit.map(function (name, index) {
                        return index === 0 ? null : <li key={index}>{name}</li>;
                    })}
                </ul>
            </p>
        )
    }

    if (!router.isFallback && !workProject?.slug) {
        console.log('no bueno');
        return;
    }

    return (
        <>
            <MyNavbar />
            <div className={styles.wrapper}>
                <div className={styles.workDetailsCols}>
                    <div>
                        {workProject.tech.map((t, index) => {
                            const techName = t.toUpperCase();
                            const closing = index === workProject.tech.length - 1 ? '' : ' | ';

                            return (
                                <span key={t} className={styles.workTechText}>{`${techName}${closing}`}</span>
                            )
                        })}
                        <h1 className={styles.projectNameText}>
                            {workProject.name}
                        </h1>
                        {setProjectDescription()}
                        {!workProject.githubLink ? null : (<Link href={workProject.githubLink} target='_blank' className={styles.projectLink}>View Repo</Link>)}
                        {!workProject.liveLink ? null : (<Link href={workProject.liveLink} target='_blank' className={styles.projectLink}>View Live</Link>)}
                    </div>
                    <div>
                        <Image src={mainImg}
                            className={styles.mainImg}
                            priority
                            height={500}
                            alt={`Landing page details of ${workProject.name}`}
                        />
                    </div>
                </div>
                <div className={styles.secondaryImgsCol}>
                    <Image
                        className={styles.secondImg}
                        src={imgTwo}
                        alt={`Showing a nested page from ${workProject.name}`} />
                    {imgThree && imgThree !== placeholder ? (
                        <Image
                            className={styles.secondImg}
                            src={imgThree}
                            alt={`Showing a nested page from ${workProject.name}`} />
                    ) : null}
                </div>
            </div>
        </>
    )
}

type PropsParams = {
    params: {
        slug: string
    }
}
export async function getStaticProps({ params }: PropsParams) {
    const workProject = projects.find(p => p.slug === params.slug);

    return {
        props: { workProject }
    }
}

export async function getStaticPaths() {
    return {
        paths: projects.map(({ slug }) => {
            return {
                params: {
                    slug: slug
                }
            }
        }),
        fallback: false,
    }
}

export default WorkDetails