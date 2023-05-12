import { Link, useLocation, useParams } from 'react-router-dom';
import HeroTabs from '../HeroTabs';

import { WorkerHero, ContactsHero, AboutUsHero, EmployerHero } from './index'

const Hero = () => {
  const { pathname } = useLocation();

  let component = null;
  let workerOrEmployer = true;
  let heroBlockModifClassName = '';
  let showHero = true;

  switch (pathname) {
    case '/':
      component = <WorkerHero />;
      heroBlockModifClassName = 'hero-block_worker';
      break;
    case '/employer':
      component = <EmployerHero />;
      heroBlockModifClassName = 'hero-block_employer';
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

  return (
    <>
      {
        showHero &&
        <div className={`hero-block ${heroBlockModifClassName}`}>

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