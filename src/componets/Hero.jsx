import { Link, useLocation, useParams } from 'react-router-dom';
import HeroTabs from './HeroTabs';

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

const WorkerHero = () => {
  return (
    <>
      <div className="hero-block__img">
        <img src="/img/main-bg.jpg" alt="" />
      </div>
      <div className="container container_full-height">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-block">
              <h1 className="hero__title">Легальная работа за границей</h1>
              <p className="hero__subtitle">
                Бесплатные вакансии от европейских работодателей
              </p>
              <div className="hero__video-block">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="hero__action-block">
              <a href="#vacancy" className="btn btn_start">Начать поиск работы</a>
              <a href="#vacancy" className="btn btn_stroke">Смотреть вакансии</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const EmployerHero = () => {
  return (
    <>
      <div className="hero-block__img">
        <img src="/img/hero-employer-bg.jpg" alt="" />
      </div>
      <div className="container container_full-height">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-block">
              <h1 className="hero__title">Ваша вакансия быстро получит отклик</h1>
              <p className="hero__subtitle">
                Ваши вакансии, увидят миллионы соискателей
              </p>
              <div className="hero__video-block">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="hero__action-block">
              <button className="btn">Подать вакансию</button>
              <button className="btn btn_stroke">Смотреть вакансии</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const ContactsHero = () => {
  return (
    <>
      <div className="hero-block__img">
        <img src="/img/hero-contact-bg.jpg" alt="" />
      </div>
      <div className="container container_full-height">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-block">
              <h1 className="hero__title">Наши контакты:</h1>
              <p className="hero__subtitle">
                тел: +38 099 111 22 33
              </p>
              <p className="hero__subtitle">
                email: liftron@gmail.com
              </p>
              <div className="hero__video-block">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="hero__action-block">
              <button className="btn">Заказать звонок</button>
              <button className="btn btn_stroke">Отправить сообщение</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const AboutUsHero = () => {
  return (
    <>
      <div className="hero-block__img">
        <img src="/img/main-bg.jpg" alt="" />
      </div>
      <div className="container container_full-height">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-block">
              <h1 className="hero__title">Liftron - надежный партнер</h1>
              <p className="hero__subtitle">
                Гарантия качества и добросовестности
              </p>
              <div className="hero__video-block">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="hero__action-block">
              <button className="btn">Начать поиск работы</button>
              <button className="btn btn_stroke">Смотреть вакансии</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}