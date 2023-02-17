import './header.scss';
import header from '../../imgs/header.jpeg';

function Header() {
    return (
        <div className='header'>
            <span className="header-name">Jeslyn Leon White</span>
            <div className='img-container'>
                <img className='header-img' src={header} alt='Bright blue skies with a green forest, and a Westfalia hidden between the trees.' />
            </div>
        </div>
    );
};

export default Header;