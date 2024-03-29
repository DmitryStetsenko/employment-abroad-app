import { useState } from 'react';
import { sanitizedText } from '../../store/functions';
import { useDispatch } from 'react-redux';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import { strToSlug, getMetaDataList, getVacancyMetaItemsList } from '../../store/functions';
import { delFavVacancy } from '../../store/slices/favVacanciesSlice';
import { vacancyUIinfoList } from '../../store/vacancyUIinfoList';
import { Video } from '../Video';

import { VacancyAction, SalaryInfo } from './';

const Vacancy = ({ data, type }) => {
	const [showSalaryInfo, setShowSalaryInfo] = useState(false);

	const imgPath = '/img/vacancies';
	const noImg = `${imgPath}/no-img.jpg`;

	const dispatch = useDispatch();
	let { 
		created, 
		title, 
		description, 
		salary,
		salaryinfo,
		additionally,
		thumbnails,
		video,
		currency_short,
	} = data;

	description = sanitizedText(description);

	const id = Number(data.id);

	const metaDataList = getMetaDataList(data);

	const metaItemList = getVacancyMetaItemsList(metaDataList, vacancyUIinfoList, 'list', (dataObj) => {
		const {
			tableName, recordName, recordId, recordSlug, recordIcon
		} = dataObj;

		return (
			<li key={ tableName } data-id={ recordId } className="meta-info__item">
				<i className={`meta-info__item-icon ${recordIcon}`}></i>
				<Link 
					className="meta-info__item-value" 
					to={`/vacancies/${tableName}/${recordSlug}`} 
					state={ recordId } 
					preventScrollReset={true}
				>
					{ recordName }
				</Link>
			</li>
		);
	});

	const isMobile = useMediaQuery({ maxWidth: 550 });

	return (
		<div className={`vacancy ${type === 'slim' ? 'vacancy_slim' : ''}`}>
			<div className="vacancy__content-block">
				<div className="vacancy__thumbnail">
					<img src={ thumbnails ? `${thumbnails}` : noImg } alt={ title } />

					{ video && <Video vacancy={true} src={ video }/> }
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
								(additionally && !isMobile) &&
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
						(!isMobile && type !== 'slim') &&
						<div className="vacancy__text">{ description }</div>
					}
					
				</div>
			</div>
			{/* on mobile move blocks */}
			{
				(additionally && isMobile && type !== 'slim') &&
				<div className="vacancy__additionally">
					<div className="additionally">
						<span className="additionally__item">
							<i className="fa-solid fa-circle-exclamation"></i>
						</span>
						<span className="additionally__item">{ additionally }</span>
					</div>
				</div>
			}
			{
				(isMobile && type !== 'slim') &&
				<div className="vacancy__text vacancy__text_mobile">{ description }</div>
			}
			{
				type !== 'slim' &&
				<div className="vacancy__salary-block">
					<div className="vacancy__action">
						
							<VacancyAction id={ id } vacancyTitle={ title }/>

					</div>
					<div className="vacancy__salary">
						<div className="vacancy__salary-value">
							{ currency_short }: { salary }

							{
								salaryinfo &&
									<button
									onClick={ () => setShowSalaryInfo(!showSalaryInfo) }
									className="vacancy__salary-value-info"
									title="Детальніше про оплату"
									>
										<i className="fa-solid fa-circle-info"></i>
									</button>
							}
							
						</div>

						{ 
							salaryinfo &&
							showSalaryInfo && 
								<SalaryInfo 
									salaryinfo={ salaryinfo } 
									setShowSalaryInfo={ setShowSalaryInfo } 
									className="salary-info"
								/>
						}
						
					</div>
					{/* <div className="vacancy__salary">договірна</div> */}
					<Link to={`/vacancy/${title}`} state={ id } className="vacancy__details btn btn_detail">Детальніше</Link>
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
