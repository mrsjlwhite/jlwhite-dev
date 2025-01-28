'use client'

import { mySkillset } from '@/data/aboutMe';
import styles from './aboutMeSkills.module.scss';
import { useEffect, useState } from 'react';

function AboutMeSkills() {
  const [skills, setSkills] = useState<string[][]>([]);

  useEffect(() => {
    if (skills.length === 0) {
      const unsortedSkills = Array.from(mySkillset);
      const divideBy = unsortedSkills.length / 4;
      const array1 = unsortedSkills.splice(0, divideBy);
      const array2 = unsortedSkills.splice(0, divideBy);
      const array3 = unsortedSkills.splice(0, divideBy);
      const array4 = unsortedSkills.splice(0, divideBy);
      setSkills([array1, array2, array3, array4]);
    }
  }, []);

  return (
    <div className={styles.skillsetContainer}>
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