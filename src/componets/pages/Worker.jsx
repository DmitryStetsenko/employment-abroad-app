import FilterBlock from "../forms/filter/FilterBlock";
import { VacancyList } from "../vacancy";

const Worker = () => {
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

						<VacancyList />

					</div>
				</div>
			</div>
		</section>
	);
};

export default Worker;
