import { Link } from 'react-router-dom';
import { strToSlug } from '../../../store/functions';

const SearchResultsItem = ({ vacancy, closeMethod }) => {
  const { title, id } = vacancy;

  return (
    <Link onClick={ closeMethod } to={`/vacancy/${strToSlug(title)}`} state={ id } className="vacancy-search-item">
      <div className="vacancy-search-item__thumbnail">
        <img src="/img/vacancy-thumb.jpg" alt="" />
      </div>
      <p className="vacancy-search-item__title">{ title }</p>
    </Link>
  );
};

export default SearchResultsItem;