import './about-me-banner.scss';
import header from '../../imgs/header.jpeg';

function AboutMeBanner() {
    return (
        <div className="banner">
            <div className='banner-text-container'>
                <h4 className='section-title'>about me.</h4>
                <p className='section-body'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className='banner-img-container'>
                <img src={header} alt='Jeslyn' />
            </div>
        </div>
    )
}

export default AboutMeBanner;