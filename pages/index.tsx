import NavTaskbar from '@/components/navTaskbar/NavTaskbar';
import styles from '../styles/index.module.scss';
// import 'bootstrap-css-only/css/bootstrap.min.css';

function App() {


  return (
    <div className={styles.gridOverlay}>
      {/* {fetchingData
        ?
        <LoadingIcon />
        :
        <>
          <Header />
          <MyNavbar />
          <AboutMe aboutBlurb={resumeAbout} funBlurb={resumeFun} skillset={resumeSkills} />
          <MyExperience />
          <MyWork />
          <MyLinks />
        </>
      } */}
      <NavTaskbar />
    </div>
  );
}

export default App;
