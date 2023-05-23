import { Link } from 'react-router-dom';

const EmployerHero = () => {
    return (
        <>
            <div className="hero-block__img">
                <img src="/img/hero-employer-bg.jpg" alt="" />
            </div>
            <div className="hero-block__main container container_full-height">
                <div className="hero">
                    <div className="hero__content">
                        <div className="hero__title-block">
                            <h1 className="hero__title" translate="no">LIFTRON</h1>
                            <div className="hero__subtitle-block">
                                <p className="hero__subtitle" translate="no">
                                    Recruting company
                                </p>
                            </div>
                            
                            <div className="hero__info-block">
                                
                                <p className="hero__info">
                                    Надсилайте нам вашу вакансію, 
                                    яку потрібно закрити. Опишіть кандидатів, яких Ви шукаєте. 
                                </p>
                                <p className="hero__info">
                                    Ми завжди будемо з Вами на зв'язку
                                </p>
                            </div>
                            
                            <div className="hero__video-block">
                                <i className="fa-solid fa-play"></i>
                            </div>
                        </div>
                        <div className="hero__action-block">
                            <Link to="/account" className="btn btn_start">Розмістити вакансію</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployerHero;