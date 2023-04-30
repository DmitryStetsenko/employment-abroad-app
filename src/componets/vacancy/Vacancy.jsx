import React from 'react';

const Vacancy = ({ data }) => {
	const { id, created, title, description, country_name, employer_name, salary,speciality_name } = data;
	return (
		<div className="vacancy">
			<div className="vacancy__content-block">
				<div className="vacancy__thumbnail">
					<img src="./img/vacancy-thumb.jpg" alt="" />
				</div>
				<div className="vacancy__content">
					<h3 className="vacancy__title">{ title }</h3>
					<div className="vacancy__meta">
						<ul className="meta-info">
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-location-dot"></i>
								<div className="meta-info__item-value">
									<a href="#">{ country_name }</a>
									{/* <a href="#">Катовице</a> */}
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-suitcase"></i>
								<div className="meta-info__item-value">
									<a href="#">{ speciality_name }</a>
									{/* <a href="#">Разнорабочий</a> */}
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-gear"></i>
								<div className="meta-info__item-value">
									<a href="#">{ employer_name }</a>
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-regular fa-calendar"></i>
								<div className="meta-info__item-value">
									<a href="#">Пн-Сб - 8-12ч</a>
								</div>
							</li>
						</ul>
					</div>
					<div className="vacancy__text">{ description }</div>
				</div>
			</div>
			<div className="vacancy__salary-block">
				<div className="vacancy__salary">USD: { salary }</div>
				<button className="vacancy__details">Подробнее</button>
			</div>
		</div>
	);
};

export default Vacancy;
