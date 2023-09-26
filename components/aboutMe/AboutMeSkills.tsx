import styles from '@/styles/aboutMe.module.scss';
import { useEffect, useState } from 'react';

type Props = {
  skillset: string[]
}

function AboutMeSkills({ skillset }: Props) {
  const [skills, setSkills] = useState<string[][]>([]);
  
  useEffect(() => {
    if (!skillset.length) {
        return;
    }
    const unsortedSkills = Array.from(skillset);
    const divideBy = unsortedSkills.length / 4;
    const array1 = unsortedSkills.splice(0, divideBy);
    const array2 = unsortedSkills.splice(0, divideBy);
    const array3 = unsortedSkills.splice(0, divideBy);
    const array4 = unsortedSkills.splice(0, divideBy);
    setSkills([array1, array2, array3, array4]);
}, [skillset]);
  
  return (
    <div className={styles.moreInfoCol}>
      <h4 className='section-title'>my skills.</h4>
      <ul className={`section-body ${styles.skillsetList}`}>
        {skills.map((skillset, index) => {
          return (
            <li key={index}>
              <ul>
                {skillset.map((skill) => {
                  return (
                    <li key={skill}>
                      {skill}
                    </li>
                  )
                })}
              </ul>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AboutMeSkills;