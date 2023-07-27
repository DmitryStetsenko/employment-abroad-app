import { Link } from 'react-router-dom';
import { strToSlug } from '../../../store/functions';

const SearchResultsItem = ({ vacancy, closeMethod }) => {
  const imgPath = '/img/vacancies';
	const noImg = `${imgPath}/no-img.jpg`;
  const { title, id, thumbnails } = vacancy;

  return (
    <Link onClick={ closeMethod } to={`/vacancy/${strToSlug(title)}`} state={ id } className="vacancy-search-item">
      <div className="vacancy-search-item__thumbnail">
      <img src={ thumbnails ? thumbnails : noImg } alt={ title } />
      </div>
      <p className="vacancy-search-item__title">{ title }</p>
    </Link>
  );
};

export default SearchResultsItem;