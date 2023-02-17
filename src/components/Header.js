import '../styles/header.scss';
import header from '../imgs/header.jpeg';
import { TypeAnimation } from 'react-type-animation';

function Header() {
    return (
        <div className='header'>
            <div className='text-container'>
                <span className="header-name">Jeslyn Leon White</span>
                <TypeAnimation
                    sequence={[
                        'developer', // Types
                        2000, // Waits
                        'engineer', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'coffee addict',
                        3000,
                        'driven',
                        2000
                    ]}
                    wrapper="div"
                    cursor={true}
                    repeat={Infinity}
                    className='header-meta'
                />
            </div>
            <div className='img-container'>
                <img className='header-img' src={header} alt='Bright blue skies with a green forest, and a Westfalia hidden between the trees.' />
            </div>
        </div>
    );
};

export default Header;