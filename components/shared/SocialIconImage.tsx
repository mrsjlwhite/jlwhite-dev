import ig from '@/svgs/instagram.svg';
import gh from '@/svgs/github.svg';
import li from '@/svgs/linkedin.svg';
import tw from '@/svgs/twitter.svg';
import Image from 'next/image';
import LinkUrl from '@/interfaces/linkUrl';
import { useEffect, useState } from 'react';
import { openLink } from '@/lib/utils';

type Props = {
    link: LinkUrl,
    size?: number
}

const SocialIconImage = ({ link, size = 100 }: Props) => {
    const [imageSrc, setImageSrc] = useState(null);

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
            case 'twitter':
                setImageSrc(tw);
                break;
            default:
                break;
        }
    }, [link])

    if (!imageSrc) {
        return <></>
    }

    return (
        <Image
            src={imageSrc}
            className='filter-white'
            height={size}
            width={size}
            alt={`${link.name} Logo`}
            onClick={() => openLink(link.url)}
        />
    )
}

export default SocialIconImage