import ContactsForm from "../forms/ContactsForm";

const ContactsHero = () => {
    return (
        <>
            <div className="hero-block__img">
                <img src="/img/hero-contact-bg.jpg" alt="" />

                <ContactsForm />

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
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactsHero;