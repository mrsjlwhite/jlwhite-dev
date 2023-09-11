import Link from 'next/link';
import styles from '@/styles/workPolaroid.module.scss';
import { useEffect, useState } from 'react';
import placeholder from '@/imgs/placeholder.png';
import kimba from '@/imgs/workSamples/kimba/kimba0.png';
import hundekey from '@/imgs/workSamples/hundekey/hundekey0.png';
import poke from '@/imgs/workSamples/poke/poke0.png';
import entourage from '@/imgs/workSamples/brideEntourage/entourage0.png';
import resume from '@/imgs/workSamples/digitalResume/resume0.png';
import Image from 'next/image';

type Props = {
    name: string
    slug: string
    date: string
    type: string
}

function WorkPolaroid({ name, slug, date, type }: Props) {
    const [imgSrc, setImgSrc] = useState(placeholder);
    const [imgAlt, setImgAlt] = useState('');
    const [typeColor, setTypeColor] = useState('');

    useEffect(() => {
        switch (name) {
            case 'Heyyo Kimba':
                setImgSrc(kimba);
                setImgAlt(`${name} blog logo`);
                break;
            case 'HundekeyCreeates':
                setImgSrc(hundekey);
                setImgAlt(`${name} portfolio logo`);
                break;
            case 'Poke Quiz':
                setImgSrc(poke);
                setImgAlt('Retro Pokémon poké ball as site logo');
                break;
            case 'Bride Entourage':
                setImgSrc(entourage);
                setImgAlt('Bridesmaids dashboard')
                break;
            case 'Digital Resume':
                setImgSrc(resume);
                setImgAlt('A living resume');
                break;
            default:
                setImgSrc(placeholder);
                setImgAlt(name);
                break;
        }
    }, [name])

    useEffect(() => {
        switch (type) {
            case 'Personal Project':
                setTypeColor(styles.goldBadge);
                break;
            case 'Client Work':
                setTypeColor(styles.greenBadge);
                break;
            case 'Tech Interview':
                setTypeColor(styles.purpleBadge);
                break;
        }
    }, [type])

    return (
        <div className={styles.workPolaroidCard}>
            <Link href={`/work/details/${slug}`}>
                <Image
                    src={imgSrc}
                    alt={imgAlt}
                    height={250}
                    width={350}
                />
                <h4>{name}</h4>
                <p>{date}</p>
                <p className={`${styles.typeBadge} ${typeColor}`}>
                    {type}
                </p>
            </Link>
        </div>
    )
}

export default WorkPolaroid