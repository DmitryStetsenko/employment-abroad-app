import React from 'react';
import { useSelector } from 'react-redux';
import Vacancy from './Vacancy';

const VacancyList = ({ slice, type }) => {
	const sliceName = slice ? slice : 'vacancies';
	const fetchData = useSelector(state => state[sliceName]);
	const { data, status, error } = fetchData;
	const count = data.body?.length;

	return (
		<>
		{
			status === 'loading'
				? <Loader />
				: 
				<div className="vacancies">
					<div className="vacancies__header">
						<div className="vacancies__info-block">
							<p className="vacancies__info">
								<span>{ count }</span>
								вакансій
								{/* по зароботной плате от 450$ к 7000$ */}
							</p>
						</div>
						{/* <div className="vacancies__sort-block">
							<label className="vacancies__sorted">
								<span>сортировка</span>
								<select>
									<option value="0">зарплата</option>
									<option value="1">требуется</option>
									<option value="2">Жилье</option>
								</select>
							</label>
						</div> */}
					</div>
					<div className="vacancies__content">
						<ul className="vacancies__list">
							{/* <li className="vacancies__item">
								<Vacancy data={ list[0] }/>
							</li> */}
							
							{
								data.body?.map(vacancy => <li className="vacancies__item" key={ vacancy.id }><Vacancy data={ vacancy } type={ type }/></li>)
							}

						</ul>
					</div>
				</div>
		}
		</>
	);
};

const Loader = () => {
	return (
		<h2>loading ...</h2>
	)
}

export default VacancyList;