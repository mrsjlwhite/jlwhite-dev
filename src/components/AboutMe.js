import '../styles/aboutMe.scss';
import me from '../imgs/me.jpeg';
import Image from 'react-bootstrap/Image';
import blurb from '../data/meBlurb';
import skillset from '../data/skillset';
import { useEffect, useState } from 'react';

function AboutMe() {
    const [skills, setSkills] = useState([]);
    
    useEffect(() => {
        const unsortedSkills = Array.from(skillset);
        const divideBy = unsortedSkills.length / 4;
        const array1 = unsortedSkills.splice(0, divideBy);
        const array2 = unsortedSkills.splice(0, divideBy);
        const array3 = unsortedSkills.splice(0, divideBy);
        const array4 = unsortedSkills.splice(0, divideBy);
        setSkills([array1, array2, array3, array4]);
    }, []);

    return (
        <section id='about-me' className='banner-section'>
            <div className="banner">
                <div className='banner-text-container'>
                    <h4 className='section-title'>about me.</h4>
                    <p className='section-body'>
                        {blurb.about}
                    </p>
                    <h4 className='section-title'>my skills.</h4>
                    <ul className='section-body skillset-list'>
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
                    <h4 className='section-title'>fun facts about me.</h4>
                    <p className='section-body'>
                        {blurb.fun}
                    </p>
                </div>
                <div className='banner-img-container'>
                    <Image
                        fluid={true}
                        rounded={true}
                        src={me}
                        alt='Jeslyn'>
                    </Image>
                </div>
            </div>
        </section>
    )
}

export default AboutMe;