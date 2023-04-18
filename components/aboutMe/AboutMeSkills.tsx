import styles from '@/styles/aboutMe.module.scss';

type Props = {
  skills: any
}

function AboutMeSkills({ skills }: Props) {
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