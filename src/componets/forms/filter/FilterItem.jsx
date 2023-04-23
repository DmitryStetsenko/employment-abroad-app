import React from 'react';

const FilterItem = () => {
  return (
    <li class="filter-item">
      <label class="filter-item__element">
        <input type="checkbox" name="chk1_1" class="filter-item__checkbox" />
        <span class="filter-item__title">С детьми</span>
      </label>
    </li>
  );
};

export default FilterItem;