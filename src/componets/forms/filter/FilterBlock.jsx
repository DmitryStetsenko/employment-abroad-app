import FilterItem from "./FilterItem";

const FilterBlock = () => {
	return (
		<fieldset className="filter-block" name="filter-item">
			<h4 className="filter-block__title">Кому подходит</h4>
			<div className="filter-block__content">
				<ul className="filter-block__list">
					<FilterItem />
					<FilterItem />
					<FilterItem />
					<FilterItem />
				</ul>
			</div>
			<button className="filter-block__show-more" type="button">показать больше</button>
		</fieldset>
	);
};

export default FilterBlock;
