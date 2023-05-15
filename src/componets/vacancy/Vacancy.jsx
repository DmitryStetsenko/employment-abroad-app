import React from 'react';
import { Link } from 'react-router-dom';
import { strToSlug, getMetaDataList, getVacancyMetaItemsList } from '../../store/functions';
import { vacancyUIinfoList } from '../../store/vacancyUIinfoList';

const Vacancy = ({ data }) => {
	const { 
		id, 
		created, 
		title, 
		description, 
		salary,
		additionally,
	} = data;

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

					<div className="vacancy__text">{ description }</div>
				</div>
			</div>
			<div className="vacancy__salary-block">
				<div className="vacancy__salary">USD: { salary }</div>
				<Link to={`/vacancy/${title}`} state={ id } className="vacancy__details btn btn_detail">Датальніше</Link>
			</div>
		</div>
	);
};

export default Vacancy;
