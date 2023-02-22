import '../styles/aboutMeBanner.scss';
import me from '../imgs/me.jpeg';
import Image from 'react-bootstrap/Image';
import blurb from '../data/meBlurb';

function AboutMeBanner() {
    return (
        <section id='about-me' className='banner-section'>
            <div className="banner">
                <div className='banner-text-container'>
                    <h4 className='section-title'>about me.</h4>
                    <p className='section-body'>
                        {blurb.about}
                    </p>
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

export default AboutMeBanner;