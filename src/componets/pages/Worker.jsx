import { FilterList } from "../forms/filter";
import { VacancyList } from "../vacancy";

const Worker = () => {

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

export default Worker;
