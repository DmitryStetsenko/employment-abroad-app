import { useLocation } from 'react-router-dom';
import { useMediaQuery } from "react-responsive";
import HeroTabs from './HeroTabs';

import { WorkerHero, ContactsHero, AboutUsHero, EmployerHero } from './index'

const Hero = () => {
  const { pathname } = useLocation();

  const isMobile = useMediaQuery({ maxWidth: 800 });

  let component = null;
  let workerOrEmployer = true;
  let heroBlockModifClassName = '';
  let showHero = true;

  let heroMobileBgClass = '';

  switch (pathname) {
    case '/':
      component = <WorkerHero />;
      heroBlockModifClassName = 'hero-block_worker';
      heroMobileBgClass = 'hero-block_worker-mobile-bg';
      break;
    case '/employer':
      component = <EmployerHero />;
      heroBlockModifClassName = 'hero-block_employer';
      heroMobileBgClass = 'hero-block_employer-mobile-bg';
      break;
    case '/contacts':
      component = <ContactsHero />;
      workerOrEmployer = false;
      heroBlockModifClassName = 'hero-block_contacts';
      break;
    case '/about':
      component = <AboutUsHero />;
      workerOrEmployer = false;
      heroBlockModifClassName = 'hero-block_about';
      break;
    default:
      workerOrEmployer = false;
      heroBlockModifClassName = 'hero-block_other';
      break;
  }

  if (pathname.includes('vacancies')) {
    showHero = false;
  }

  if (pathname.includes('vacancy')) {
    showHero = false;
  }

  if (pathname.includes('account')) {
    showHero = false;
  }

  return (
    <>
      {
        showHero &&
        <div className={`hero-block ${heroBlockModifClassName} ${isMobile ? heroMobileBgClass : ''}`}>

          { component }

          <div className="hero-block__tabs">
            { workerOrEmployer && <HeroTabs /> }
          </div>
        </div>
      }
    </>
    
  );
};

export default Hero;