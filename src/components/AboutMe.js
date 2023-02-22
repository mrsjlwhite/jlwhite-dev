import '../styles/aboutMe.scss';
import me from '../imgs/me.jpeg';
import Image from 'react-bootstrap/Image';
import blurb from '../data/meBlurb';
import { useEffect, useState } from 'react';
import fun1 from '../imgs/fun1.jpg';
import fun2 from '../imgs/fun2.jpeg';
import fun3 from '../imgs/fun3.jpeg';
import fun4 from '../imgs/fun4.jpeg';

function AboutMe({ skillset }) {
    const [skills, setSkills] = useState([]);

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
    }, []);

    return (
        <section id='about-me' className='about-me-section'>
            <div className='about-me-banner'>
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
            <div className='about-me-gallery'>
                <Image
                    src={fun1}
                    fluid={true}>
                </Image>
                <Image
                    src={fun2}
                    fluid={true}>
                </Image>
                <Image
                    src={fun3}
                    fluid={true}>
                </Image>
                <Image
                    src={fun4}
                    fluid={true}>
                </Image>
            </div>
        </section>
    )
}

export default AboutMe;