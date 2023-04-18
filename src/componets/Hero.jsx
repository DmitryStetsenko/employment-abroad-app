import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="hero-block">
        <div className="hero-block__img">
            <img src="./img/main-bg.jpg" alt="" />
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
                        <button className="btn">Начать поиск работы</button>
                        <button className="btn btn_stroke">Смотреть вакансии</button>
                    </div>
                </div>
                <div className="hero__tabs">
                    <div className="toggle-tabs">
                        <div className="btn-tab btn-tab_active" data-number="1">
                            <div className="btn-tab__content">
                                <span className="btn-tab__title">Кандидату</span>
                                <span className="btn-tab__subscr">Потребности клиентов</span>
                            </div>
                        </div>
                        <div className="btn-tab" data-number="2">
                            <div className="btn-tab__content">
                                <span className="btn-tab__title">Работодателю</span>
                                <span className="btn-tab__subscr">Работодателю</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Hero;