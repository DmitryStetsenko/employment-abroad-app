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
							<h1 className="hero__title">Наші контакти</h1>
							
							<div className="hero__contacts-block">
								<div className="contacts">
									<div className="contacts__data">
										<div className="contacts__phone-block contacts__item">
											<span className="contacts__block-text">Phone</span>
											<div className="contacts__phone">
												<a href="tel:+4915170038949">+4915170038949</a>
												<a href="tel:+380663340226">+380663340226</a>
											</div>
										</div>
										<div className="contacts__email contacts__item">
											<span className="contacts__block-text">Email</span>
											<a href="mailto:anna.liftron@gmail.com">anna.liftron@gmail.com</a>
										</div>
										<div className="contacts__social contacts__item">
											<span className="contacts__block-text">Social</span>
											<ul className="social">
												<li className="social__item">
													<a target="_blank" href="https://www.instagram.com/liftroncompany/?igshid=YmMyMTA2M2Y%3D" className="social__link">
														<i className="fa-brands fa-instagram"></i>
													</a>
												</li>
												<li className="social__item social__item_facebook">
													<a target="_blank" href="https://www.facebook.com/people/Liftron-Company/100090525202143/" className="social__link">
														<i className="fa-brands fa-facebook-f"></i>
													</a>
												</li>
												<li className="social__item social__item_telegram">
													<a target="_blank" href="https://t.me/+ksBXwaXvGD5iNmIy" className="social__link">
														<i className="fa-solid fa-paper-plane"></i>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							<div className="hero__subtitle-block hero__subtitle-block_smallmargin">
								<p className="hero__info">Ми завжди на зв`язку</p>
							</div>

							<div className="hero__video-block">
								<i className="fa-solid fa-play"></i>
							</div>
						</div>
						{/* <div className="hero__action-block">
							<button className="btn btn_start">Замовити дзвінок</button>
						</div> */}
					</div>
				</div>
			</div>
		</>
	)
}

export default ContactsHero;
