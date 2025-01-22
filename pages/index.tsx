import NavTaskbar from 'components/navTaskbar/NavTaskbar';
import styles from '../styles/index.module.scss';

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
