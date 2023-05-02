import React from 'react';
import { Link } from 'react-router-dom';

const Vacancy = ({ data }) => {
	const { 
		id, 
		created, 
		title, 
		description, 
		country_name,
		country_id, 
		employer_name,
		employer_id,
		salary,
		speciality_name,
		speciality_id,
	} = data;
	return (
		<div className="vacancy">
			<div className="vacancy__content-block">
				<div className="vacancy__thumbnail">
					<img src="/img/vacancy-thumb.jpg" alt="" />
				</div>
				<div className="vacancy__content">
					<h3 className="vacancy__title">
						<Link className="vacancy__link" to={`/vacancy/${title}`} state={ id }>{ title }</Link>
					</h3>
					<div className="vacancy__meta">
						<ul className="meta-info">
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-location-dot"></i>
								<div className="meta-info__item-value">
								<Link to={`/vacancies/country/${country_name}`} state={ country_id } preventScrollReset={true}>{ country_name }</Link>
									{/* <a href="#">Катовице</a> */}
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-suitcase"></i>
								<div className="meta-info__item-value">
								<Link to={`/vacancies/speciality/${speciality_name}`} state={ speciality_id } preventScrollReset={true}>{ speciality_name }</Link>
									{/* <a href="#">Разнорабочий</a> */}
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-gear"></i>
								<div className="meta-info__item-value">
									<Link to={`/vacancies/employer/${employer_name}`} state={ employer_id } preventScrollReset={true}>{ employer_name }</Link>
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
				<Link to={`/vacancy/${title}`} state={ id } className="vacancy__details btn btn_detail">Подробнее</Link>
			</div>
		</div>
	);
};

export default Vacancy;
