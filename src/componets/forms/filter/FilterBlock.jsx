import FilterItem from "./FilterItem";

const FilterBlock = () => {
	return (
		<fieldset class="filter-block" name="filter-item">
			<h4 class="filter-block__title">Кому подходит</h4>
			<div class="filter-block__content">
				<ul class="filter-block__list">
					<FilterItem />
					<FilterItem />
					<FilterItem />
					<FilterItem />
				</ul>
			</div>
			<button class="filter-block__show-more" type="button">показать больше</button>
		</fieldset>
	);
};

export default FilterBlock;
