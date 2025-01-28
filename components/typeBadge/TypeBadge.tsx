import { useEffect, useState } from 'react';
import styles from './typeBadge.module.scss';
import { ProjectTypes } from 'lib/constants';


type Props = {
    type: string
}

const TypeBadge = ({ type }: Props) => {
    const [typeColor, setTypeColor] = useState('');

    useEffect(() => {
        switch (type) {
            case ProjectTypes.Personal:
                setTypeColor(styles.goldBadge);
                break;
            case ProjectTypes.Client:
                setTypeColor(styles.greenBadge);
                break;
            case ProjectTypes.Interview:
                setTypeColor(styles.purpleBadge);
                break;
        }
    }, [type])

    return (
        <p className={`${styles.typeBadge} ${typeColor}`}>
            {type}
        </p>
    )
}

export default TypeBadge