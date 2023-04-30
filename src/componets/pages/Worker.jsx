import { useSelector } from "react-redux";
import FilterBlock from "../forms/filter/FilterBlock";
import { VacancyList } from "../vacancy";

const Worker = () => {
	const { data, status, error } = useSelector(state => state.filters);
	console.log(data);

	return (
		<section className="section section_vacancies">
			<div className="container">
				<div className="section__inner">
					<form className="filter section__sidebar" name="filter">
						<FilterBlock />
						<FilterBlock />
						<FilterBlock />
						<FilterBlock />
						<FilterBlock />
					</form>
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

export default Worker;
