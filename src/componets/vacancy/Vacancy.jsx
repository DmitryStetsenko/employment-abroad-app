import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { strToSlug, getMetaDataList, getVacancyMetaItemsList } from '../../store/functions';
import { delFavVacancy } from '../../store/slices/favVacanciesSlice';
import { vacancyUIinfoList } from '../../store/vacancyUIinfoList';
import VacancyAction from './VacancyAction';

const Vacancy = ({ data, type }) => {
	const dispatch = useDispatch();
	const { 
		created, 
		title, 
		description, 
		salary,
		additionally,
	} = data;

	const id = Number(data.id);

	const metaDataList = getMetaDataList(data);

	const metaItemList = getVacancyMetaItemsList(metaDataList, vacancyUIinfoList, 'list', (dataObj) => {
		const {
			tableName, recordName, recordId, recordSlug, recordIcon
		} = dataObj;

		return (
			<li key={ tableName } data-id={ recordId } className="meta-info__item">
				<i className={`meta-info__item-icon ${recordIcon}`}></i>
				<div className="meta-info__item-value">
					<Link to={`/vacancies/${tableName}/${recordSlug}`} state={ recordId } preventScrollReset={true}>{ recordName }</Link>
				</div>
			</li>
		);
	});

	return (
		<div className={`vacancy ${type == 'slim' && 'vacancy_slim'}`}>
			<div className="vacancy__content-block">
				<div className="vacancy__thumbnail">
					<img src="/img/vacancy-thumb.jpg" alt="" />
				</div>
				<div className="vacancy__content">
					<h3 className="vacancy__title">
						<Link className="vacancy__link" to={`/vacancy/${strToSlug(title)}`} state={ id }>{ title }</Link>
					</h3>
	
					{
						type !== 'slim' &&
						<div className="vacancy__meta">
							
							<ul className="meta-info">{ metaItemList }</ul>

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
					}
					
					{
						type !== 'slim' &&
						<div className="vacancy__text">{ description }</div>
					}
					
				</div>
			</div>
			{
				type !== 'slim' &&
				<div className="vacancy__salary-block">
					<div className="vacancy__action">
						
							<VacancyAction id={ id } vacancyTitle={ title }/>

					</div>
					<div className="vacancy__salary">USD: { salary }</div>
					<Link to={`/vacancy/${title}`} state={ id } className="vacancy__details btn btn_detail">Датальніше</Link>
				</div>
			}

			{
				type === 'slim' &&
				<button onClick={() => dispatch(delFavVacancy({id}))}  className="btn btn_del"><i className="fa-solid fa-trash-can"></i></button>
			}
			
		</div>
	);
};

export default Vacancy;
