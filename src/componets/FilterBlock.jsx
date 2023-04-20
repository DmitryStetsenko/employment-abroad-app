const FilterBlock = () => {
  return (
    <fieldset class="filter-block" name="filter-item">
        <h4 class="filter-block__title">Кому подходит</h4>
        <div class="filter-block__content">
            <ul class="filter-block__list">
                <li class="filter-item">
                    <label class="filter-item__element">
                        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
                        <span class="filter-item__title">С детьми</span>
                    </label>
                </li>
                <li class="filter-item">
                    <label class="filter-item__element">
                        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
                        <span class="filter-item__title">С детьми</span>
                    </label>
                </li>
                <li class="filter-item">
                    <label class="filter-item__element">
                        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
                        <span class="filter-item__title">С детьми</span>
                    </label>
                </li>
                <li class="filter-item">
                    <label class="filter-item__element">
                        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
                        <span class="filter-item__title">С детьми</span>
                    </label>
                </li>
                <li class="filter-item">
                    <label class="filter-item__element">
                        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
                        <span class="filter-item__title">С детьми</span>
                    </label>
                </li>
            </ul>
        </div>
        <button class="filter-block__show-more" type="button">показать больше</button>
    </fieldset>
  );
};

export default FilterBlock;