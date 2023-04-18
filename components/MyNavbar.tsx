import styles from '@/styles/myNavbar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialsIcons from './SocialsIcons';

type Props = {
    isMobile: any
}

function MyNavbar({ isMobile }: Props) {

    const navigateToSection = (event, sectionName) => {
        const section = document.getElementById(sectionName);
        event.preventDefault();
        section && section.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(sectionName, sectionName, `/${sectionName}`);
    }

    return (
        <Navbar expand="lg" sticky='top' className={styles.myNavbar}>
            <Container>
                <Navbar.Brand href="/" className={styles.navBrand}>J.L.W</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navLinksContainer}>
                    <Nav>
                        <Nav.Link
                            className={styles.myNavLink}
                            href="/"
                            onClick={(e) => navigateToSection(e, 'about-me')}>
                            About
                        </Nav.Link>
                        <Nav.Link
                            className={styles.myNavLink}
                            href="/"
                            onClick={(e) => navigateToSection(e, 'my-experience')}>
                            Experience
                        </Nav.Link>
                        <Nav.Link
                            className={styles.myNavLink}
                            href="/"
                            onClick={(e) => navigateToSection(e, 'my-links')}>
                            Contact
                        </Nav.Link>
                        {!isMobile ? null :
                            <Nav.Link>
                                <SocialsIcons></SocialsIcons>
                            </Nav.Link>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;