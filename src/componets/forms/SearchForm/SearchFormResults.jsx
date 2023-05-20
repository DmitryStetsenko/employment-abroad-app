import SearchResultsItem from "./SearchResultsItem";

const SearchFormResults = ({ searchData, closeMethod }) => {
  return (
    <ul className="vacancy-search-list">

      {
        searchData.map(vacancy => (
          <li key={ vacancy.id } className="vacancy-search-list__item">
            <SearchResultsItem vacancy={ vacancy } closeMethod={ closeMethod }/>
          </li>
        ))
      }
    </ul>
  );
};

export default SearchFormResults;