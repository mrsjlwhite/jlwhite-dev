import Link from 'next/link';
import styles from './projectCover.module.scss';
import { useEffect, useState } from 'react';
import placeholder from '@/imgs/placeholder.png';
import kimba from '@/imgs/workSamples/kimba/kimba0.png';
import hundekey from '@/imgs/workSamples/hundekey/hundekey0.png';
import poke from '@/imgs/workSamples/poke/poke0.png';
import entourage from '@/imgs/workSamples/brideEntourage/entourage0.png';
import resume from '@/imgs/workSamples/digitalResume/resume0.png';
import Image from 'next/image';
import { ProjectNames } from 'core/constants/projectNames';

type Props = {
    name: string
    summary?: string
    slug: string
}

function ProjectCover({ name, slug, summary }: Props) {
    const [imgSrc, setImgSrc] = useState(placeholder);
    const [imgAlt, setImgAlt] = useState('');

    useEffect(() => {
        switch (name) {
            case ProjectNames.Kimba:
                setImgSrc(kimba);
                setImgAlt(`${name} blog logo`);
                break;
            case ProjectNames.Hundekey:
                setImgSrc(hundekey);
                setImgAlt(`${name} portfolio logo`);
                break;
            case ProjectNames.PokeQuiz:
                setImgSrc(poke);
                setImgAlt('Retro Pokémon poké ball as site logo');
                break;
            case ProjectNames.Entourage:
                setImgSrc(entourage);
                setImgAlt('Bridesmaids dashboard')
                break;
            case ProjectNames.DigitalResume:
                setImgSrc(resume);
                setImgAlt('A living resume');
                break;
            default:
                setImgSrc(placeholder);
                setImgAlt(name);
                break;
        }
    }, [name])

    return (
        <div className={styles.workPolaroidCard}>
            <Link href={`/projects/${slug}`}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={250}
                    width={350}
                />
                {summary && <h4>{summary}</h4>}
            </Link>
        </div>
    )
}

export default ProjectCover