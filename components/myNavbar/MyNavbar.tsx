import styles from './myNavbar.module.scss';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import SocialsIcons from '../socialsIcons/SocialsIcons';
import Link from 'next/link';
import { MobileView } from 'react-device-detect';

function MyNavbar() {

    return (
        <Navbar expand="lg" sticky='top' className={styles.myNavbar}>
            <Container>
                <Navbar.Brand href="/" className={styles.navBrand}>J.L.W</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className={styles.navLinksContainer}>
                    <Nav>
                        <Nav.Link
                            as={Link}
                            className={styles.myNavLink}
                            href="/"
                            scroll={false}>
                            Home
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            className={styles.myNavLink}
                            href="/about"
                            scroll={false}>
                            About
                        </Nav.Link>
                        <Nav.Link
                            as={Link}
                            className={styles.myNavLink}
                            href="/projects">
                            Projects
                        </Nav.Link>
                        <MobileView>
                            <Nav.Link>
                                <SocialsIcons />
                            </Nav.Link>
                        </MobileView>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default MyNavbar;