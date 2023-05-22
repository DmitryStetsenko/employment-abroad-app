import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { VacancyList } from "../vacancy";
import { FilterList } from "../forms/filter";
import { fetchVacancies } from './../../store/slices/vacanciesSlice'; 
import { clearFilters, clearAndSetParam, fetchFilters } from './../../store/slices/filtersSlice'; 
import { fetchVacancyList } from '../../store/slices/favVacanciesSlice';
import { useMediaQuery } from 'react-responsive';

const WorkerPage = ({ filter }) => {
	const dispatch = useDispatch();
	const { ids } = useSelector(state => state.favVacancies);

	const isMobile = useMediaQuery({ maxWidth: 1200 });

	const [isActive, setIsActive] = useState(false);

	useEffect(() => {
		if (!isMobile) {
			setIsActive(true);
		} else {
			setIsActive(false);
		}
	}, [isMobile]);

	useEffect(() => {
		dispatch(fetchVacancyList(ids));
	}, [dispatch, ids]);

	useEffect(() => {
		if ( filter ) {
			dispatch(clearAndSetParam({ param: filter.id, tableName: `${filter.table}_id` }));
		} else {
			dispatch(clearFilters());
		}
		dispatch(fetchVacancies());
		dispatch(fetchFilters({ 
			exclude: filter?.table 
		}));
	}, [dispatch, filter]);

	return (
		<section id="vacancy" className="section section_vacancies">
			<div className="container">
				<div className="section__inner">

					{
						isActive &&
						<FilterList setIsActive={ setIsActive }/>
					}
					

					<div className="section__content">
						<div className="section__title-block">
							{
								isMobile &&
								<button onClick={ () => setIsActive(true) } className="btn btn_filters"> 
									<i className="fa-solid fa-filter"></i>
									<span>Фільтри</span>
								</button>
							}
							
							<h2 className="section__title section-title">Робота за кордоном</h2>
							<p className="section__subtitle">Безкоштовні вакансії</p>
						</div>

						<VacancyList />

					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkerPage;
