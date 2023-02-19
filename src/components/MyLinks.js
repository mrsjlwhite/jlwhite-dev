import { Button, Container } from 'react-bootstrap';
import '../styles/myLinks.scss';
import { EnvelopeHeart } from 'react-bootstrap-icons';
import LinkUrls from '../data/linkUrls';

function MyLinks() {

    const openLink = (url) => window.open(url, '_blank', 'noreferrer');
    const sendEmail = () => window.open(`mailto:${LinkUrls.get('email')}`);

    return (
        <section id='my-links' className='links-section'>
            <Container>
                <Button size='lg' className='link-button'
                    onClick={() => openLink(LinkUrls.get('github'))}>
                    <i className="devicon-github-original"></i>
                    <span className='button-text'>GitHub</span>
                </Button>
                <Button size='lg' className='link-button'
                    onClick={() => openLink(LinkUrls.get('linkedin'))}>
                    <i className="devicon-linkedin-plain"></i>
                    <span className='button-text'>LinkedIn</span>
                </Button>
                <Button size='lg' className='link-button' onClick={sendEmail}>
                    <EnvelopeHeart size={250}></EnvelopeHeart>
                    <span className='button-text'>Email Me</span>
                </Button>
            </Container>
        </section>
    )
}

export default MyLinks;