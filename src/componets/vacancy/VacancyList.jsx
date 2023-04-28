import React from 'react';
import { useSelector } from 'react-redux';
import Vacancy from './Vacancy';

const VacancyList = () => {
	const { list, status, error } = useSelector(state => state.vacancies);

	console.log(list, status, error);

	return (
		<div className="vacancies">
			<div className="vacancies__title-block">
				<h2 className="vacancies__title section-title">Работа за границей</h2>
				<p className="vacancies__subtitle">Бесплатные вакансии</p>
			</div>
			<div className="vacancies__header">
				<div className="vacancies__info-block">
					<p className="vacancies__info">
						<span>279</span>
						вакансий по зароботной плате от 450$ к 7000$
					</p>
				</div>
				<div className="vacancies__sort-block">
					<label className="vacancies__sorted">
						<span>сортировка</span>
						<select>
							<option value="0">зарплата</option>
							<option value="1">требуется</option>
							<option value="2">Жилье</option>
						</select>
					</label>
				</div>
			</div>
			<div className="vacancies__content">
				<ul className="vacancies__list">
					<li className="vacancies__item">
						<Vacancy />
					</li>
					<li className="vacancies__item">
						<Vacancy />
					</li>
					<li className="vacancies__item">
						<Vacancy />
					</li>
					<li className="vacancies__item">
						<Vacancy />
					</li>
				</ul>
			</div>
		</div>
	);
};

export default VacancyList;