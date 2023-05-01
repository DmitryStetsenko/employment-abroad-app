import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { VacancyList } from "../vacancy";
import { FilterList } from "../forms/filter";
import { fetchVacancies } from './../../store/vacanciesSlice'; 
import { clear, clearAndSetParam, fetchFilters } from './../../store/filtersSlice'; 

const WorkerPage = ({ filter }) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if ( filter ) {
			dispatch(clearAndSetParam({ param: filter.id, tableName: `${filter.table}_id` }));
		} else {
			dispatch(clear());
		}
		
		dispatch(fetchVacancies());
		dispatch(fetchFilters({ 
			exclude: filter?.table 
		}));
	}, [filter]);

	return (
		<section className="section section_vacancies">
			<div className="container">
				<div className="section__inner">

					<FilterList />

					<div className="section__content">
						<div className="section__title-block">
							<h2 className="section__title section-title">Работа за границей</h2>
							<p className="section__subtitle">Бесплатные вакансии</p>
						</div>

						<VacancyList />

					</div>
				</div>
			</div>
		</section>
	);
};

export default WorkerPage;
