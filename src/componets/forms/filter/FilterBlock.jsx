import FilterItem from "./FilterItem";
import { vacancyUIinfoList } from '../../../store/vacancyUIinfoList';



const FilterBlock = ({ filter, closeFilters }) => {
	const { name, tablename, fields } = filter;
	
	

	return (
		<fieldset className="filter-block" name="filter-item">
			<h4 className="filter-block__title">{ name }</h4>
			<div className="filter-block__content">
				<ul className="filter-block__list">
					<FilterItem key={ 0 } tableName={ tablename } field={ {id: 0, name: 'все'} } />

					{ fields.map( field => <FilterItem key={ field.id } tableName={ tablename } field={ field } closeFilters={ closeFilters }/>) }

				</ul>
			</div>
			{/* <button className="filter-block__show-more" type="button">показать больше</button> */}
		</fieldset>
	);
};

export default FilterBlock;
