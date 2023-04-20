import FilterBlock from "../FilterBlock";
import Vacancy from "./../Vacancy";

const WorkerPage = () => {
  return (
    <section class="section section_vacancies">
            <div class="container">
                <div class="section__inner">
                    <form class="filter section__sidebar" name="filter">
                        <FilterBlock />
                        <FilterBlock />
                        <FilterBlock />
                        <FilterBlock />
                        <FilterBlock />
                    </form>
                    <div class="section__content">
                        <div class="section__title-block">
                            <h2 class="section__title section-title">Работа за границей</h2>
                            <p class="section__subtitle">Бесплатные вакансии</p>
                        </div>
                        <div class="vacancies">
                            <div class="vacancies__header">
                                <div class="vacancies__info-block">
                                    <p class="vacancies__info">
                                        <span>279</span>
                                        вакансий по зароботной плате от 450$ к 7000$
                                    </p>
                                </div>
                                <div class="vacancies__sort-block">
                                    <label class="vacancies__sorted">
                                        <span>сортировка</span>
                                        <select>
                                            <option value="0">зарплата</option>
                                            <option value="1">требуется</option>
                                            <option value="2">Жилье</option>
                                        </select>
                                    </label>
                                </div>
                            </div>
                            <div class="vacancies__content">
                                <ul class="vacancies__list">
                                    <li class="vacancies__item">
                                      <Vacancy />
                                    </li>
                                    <li class="vacancies__item">
                                      <Vacancy />
                                    </li>
                                    <li class="vacancies__item">
                                      <Vacancy />
                                    </li>
                                    <li class="vacancies__item">
                                      <Vacancy />
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};

export default WorkerPage;