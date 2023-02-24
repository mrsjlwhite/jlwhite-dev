import '../styles/myFooter.scss';
import LinkUrls from '../data/linkUrls';

function MyFooter() {

  const openLink = (url) => window.open(url, '_blank', 'noreferrer');

  return (
    <footer className='my-footer'>
      <div className='socials-container'>
        <i className="devicon-github-original" onClick={() => openLink(LinkUrls.get('github'))}></i>
        <i className="devicon-linkedin-plain" onClick={() => openLink(LinkUrls.get('linkedin'))}></i>
      </div>
      Copyright &#169; Developerd by J.L. White 🤍
    </footer>
  )
}

export default MyFooter;