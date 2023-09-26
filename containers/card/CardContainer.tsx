import { useEffect, useState } from 'react';
import styles from './cardContainer.module.scss';
import Card from 'react-bootstrap/Card';

type Props = {
    title?: string
    subTitle?: string
    content: JSX.Element
    footer?: JSX.Element
    fullPage?: boolean
}

function CardContainer({ title, subTitle, content, footer, fullPage }: Props) {
    const [cardSize, setCardSize] = useState(null);

    useEffect(() => {
        if (cardSize !== null) {
            return;
        }
        const newSize = fullPage ? styles.myCard : `${styles.myCard} ${styles.smallCard}`;
        setCardSize(newSize);
    }, [fullPage])

    return (
        <Card className={cardSize}>
            <Card.Body className={styles.cardBody}>
                <Card.Title className={styles.cardTitle}>
                    {title}
                </Card.Title>
                <div className={styles.cardTextContainer}>
                    {subTitle &&
                        <Card.Text className={styles.cardDesc}>
                            {subTitle}
                        </Card.Text>}
                    <div className={styles.cardContentContainer}>
                        {content}
                    </div>
                </div>
            </Card.Body>
            <Card.Footer className={styles.cardFooter}>
                {footer}
            </Card.Footer>
        </Card>
    );
}

export default CardContainer;