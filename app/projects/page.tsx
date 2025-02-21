import styles from './projects.module.scss';
import { projects } from 'data/projects';
import PageContainer from '@/components/containers/PageContainer';
import { Suspense } from "react";
import Image from 'next/image';
import Link from 'next/link';
import TypeBadge from '@/components/typeBadge/TypeBadge';

const ProjectsMagazineList = () => {
    return (
        <PageContainer>
            <div className={styles.magazineList}>
                {projects.map((article, index) => (
                    <Link key={index} href={`/projects/${article.slug}`} className={styles.magazineItem}>
                        <div className={styles.text}>
                            <h2>{article.name}</h2>
                            <h3>{article.summary}</h3>
                            <p>{article.preview}</p>
                            <TypeBadge type={article.projectType} />
                        </div>
                        <div className={styles.image}>
                            <Image
                                src={article.imageCover}
                                alt={article.name}
                                height={250}
                                width={350}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </PageContainer>
    )
}

export default function MagazineListWrapper() {
    return (
        <Suspense fallback={<p className="loading">Loading articles...</p>}>
            <ProjectsMagazineList />
        </Suspense>
    );
}