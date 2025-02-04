'use client';
import ig from '@/svgs/instagram.svg';
import gh from '@/svgs/github.svg';
import li from '@/svgs/linkedin.svg';
import x from '@/svgs/x.svg';
import Image from 'next/image';
import ILinkUrl from 'core/interfaces/linkUrl';
import { useEffect, useState } from 'react';
import { openLink } from '@/lib/utils';
import { isMobile } from 'react-device-detect';
import styles from './socialsIcons.module.scss';

export enum IconSize {
    small = 20,
    large = 100,
    largeMobile = 80
}

type Props = {
    link: ILinkUrl,
    size: IconSize
}

const SocialIconImage = ({ link, size = IconSize.large }: Props) => {
    const [imageSrc, setImageSrc] = useState(null);
    const [imageSize, setImageSize] = useState<IconSize>(size);

    useEffect(() => {
        switch (link.name.toLowerCase()) {
            case 'github':
                setImageSrc(gh);
                break;
            case 'linkedin':
                setImageSrc(li);
                break;
            case 'instagram':
                setImageSrc(ig);
                break;
            case 'x':
                setImageSrc(x);
                break;
            default:
                break;
        }
    }, [link])

    useEffect(() => {
        let newSize;

        switch (size) {
            case IconSize.large:
                newSize = isMobile ? IconSize.largeMobile : IconSize.large;
                setImageSize(newSize);
                break;
            default:
                setImageSize(size);
                break;
        }
    }, [size, isMobile])

    if (!imageSrc) {
        return <></>
    }

    return (
        <Image
            src={imageSrc}
            className={styles.iconImage}
            height={imageSize}
            width={imageSize}
            alt={`${link.name} Logo`}
            onClick={() => openLink(link.url)}
        />
    )
}

export default SocialIconImage