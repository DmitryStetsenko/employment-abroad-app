import { Link } from 'react-router-dom';
import About from './About';
import Slogan from './Slogan';

const AboutUsHero = () => {
    return (
        <>
      <div className="hero-block__img">

        <div className="hero-block__img-content">
          <About />
        </div>
        

        <img src="/img/main-bg.jpg" alt="" />

      </div>
      <div className="hero-block__main container container_full-height">
        <div className="hero">
          <div className="hero__content">
            <div className="hero__title-block">
              <h1 className="hero__title" translate="no">Liftron</h1>
              <div className="hero__subtitle-block">
                <p className="hero__subtitle" translate="no">Recruting company</p>
              </div>

              <div className="hero__slogan">

                <Slogan style={{
                    fontSize: '4rem',
                    marginBottom: '10px',
                  }} />

              </div>

              <div className="hero__video-block">
                <i className="fa-solid fa-play"></i>
              </div>
            </div>
            <div className="hero__action-block">
              <Link to="account" className="btn btn_start">Розпочати пошук роботи</Link>
              <Link to="vacancies" className="btn btn_stroke">Перегляд вакансий</Link>
            </div>
          </div>
        </div>
      </div>
    </>
    )
}

export default AboutUsHero;