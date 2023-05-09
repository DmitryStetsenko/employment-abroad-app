import React from 'react';
import { Link } from 'react-router-dom';
import { strToSlug, getMetaDataList } from '../../store/functions';

const Vacancy = ({ data }) => {
	const { 
		id, 
		created, 
		title, 
		description, 
		salary,
		additionally,
		country_id, 
		country_name,
		employer_id,
		employer_name,
		speciality_id,
		speciality_name,
		housing_id,
		housing_name,
	} = data;

	const metaDataUIinfoList = {
		country: {
			name: 'Страна',
			icon: 'fa-solid fa-location-dot',
		},
		employer: {
			name: 'Работодатель',
			icon: 'fa-solid fa-gear',
		},
		expirience: {
			name: 'Опыт работы (мес)',
			icon: 'fa-solid fa-suitcase',
		},
		housing: {
			name: 'Жилье',
			icon: 'fa-solid fa-house',
		},
		language: {
			name: 'Знание языка',
			icon: 'fa-solid fa-globe"',
		},
		speciality: {
			name: 'Специальность',
			icon: 'fa-solid fa-suitcase"',
		},
	}

	const metaDataList = getMetaDataList(data);
	console.log(metaDataList);

	console.log(strToSlug(title));

	return (
		<div className="vacancy">
			<div className="vacancy__content-block">
				<div className="vacancy__thumbnail">
					<img src="/img/vacancy-thumb.jpg" alt="" />
				</div>
				<div className="vacancy__content">
					<h3 className="vacancy__title">
						<Link className="vacancy__link" to={`/vacancy/${strToSlug(title)}`} state={ id }>{ title }</Link>
					</h3>
					<div className="vacancy__meta">
						<ul className="meta-info">
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-location-dot"></i>
								<div className="meta-info__item-value">
									<Link to={`/vacancies/country/${strToSlug(country_name)}`} state={ country_id } preventScrollReset={true}>{ country_name }</Link>
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-suitcase"></i>
								<div className="meta-info__item-value">
									<Link to={`/vacancies/speciality/${strToSlug(speciality_name)}`} state={ speciality_id } preventScrollReset={true}>{ speciality_name }</Link>
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-gear"></i>
								<div className="meta-info__item-value">
									<Link to={`/vacancies/employer/${strToSlug(employer_name)}`} state={ employer_id } preventScrollReset={true}>{ employer_name }</Link>
								</div>
							</li>
							<li className="meta-info__item">
								<i className="meta-info__item-icon fa-solid fa-house"></i>
								<div className="meta-info__item-value">
									<Link to={`/vacancies/housing/${strToSlug(housing_name)}`} state={ housing_id } preventScrollReset={true}>{ housing_name }</Link>
								</div>
							</li>
						</ul>

						{
							additionally &&
							<div className="vacancy__additionally">
								<div className="additionally">
									<span className="additionally__item">
										<i className="fa-solid fa-circle-exclamation"></i>
									</span>
									<span className="additionally__item">{ additionally }</span>
								</div>
							</div>
						}
						
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
