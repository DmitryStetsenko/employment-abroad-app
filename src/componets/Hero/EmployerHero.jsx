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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployerHero;