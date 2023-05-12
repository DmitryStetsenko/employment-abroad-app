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
              <h1 className="hero__title">Liftron</h1>
              <p className="hero__subtitle">Recruting company</p>
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
    )
}

export default AboutUsHero;