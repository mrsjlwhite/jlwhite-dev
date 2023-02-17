import './App.scss';
import AboutMeBanner from './components/about-me-banner/AboutMeBanner';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <header className="app-header">
        <Header></Header>
      </header>
      <section className='about-me'>
        <AboutMeBanner></AboutMeBanner>
      </section>
      <section className='my-experience'>

      </section>
      <section className='my-links'>

      </section>
    </div>
  );
}

export default App;
