import { ChangeEvent, FormEventHandler, useState } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getCameras } from '../../store/app-data/app-data-selectors';
import './lib/styles.css';
import { Link } from 'react-router-dom';

const MIN_QUERY_LENGTH = 3;
const DEFAULT_QUERY = '';

export const SearchBar = () => {
  const [query, setQuery] = useState(DEFAULT_QUERY);
  const cameras = useAppSelector(getCameras);

  if (!cameras) {
    return;
  }

  const filteredCameras = cameras?.filter((item) => item.name.toLowerCase().includes(query));

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  };

  const handleResetBtnClick: FormEventHandler<HTMLFormElement> = (e) => {
    e.currentTarget.reset();
    setQuery(DEFAULT_QUERY);
  };

  return (
    <div className='form-search'>
      <form onReset={handleResetBtnClick}>
        <label>
          <svg
            className='form-search__icon'
            width={16}
            height={16}
            aria-hidden='true'
          >
            <use xlinkHref='#icon-lens' />
          </svg>
          <input
            className='form-search__input'
            type='text'
            autoComplete='off'
            placeholder='Поиск по сайту'
            onChange={handleInputChange}
          />
        </label>
        <ul className={`form-search__select-list ${query.length >= MIN_QUERY_LENGTH && filteredCameras.length ? 'active' : 'hidden'}`}>
          {query.length >= MIN_QUERY_LENGTH && filteredCameras.map(({ name, id }) => (
            <li className='form-search__select-item' tabIndex={0} key={id}>
              <Link to={`/camera/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
        <button className={`form-search__reset reset${query.length && '--visible'}`}
          type='reset'
        >
          <svg width={10} height={10} aria-hidden='false'>
            <use xlinkHref='#icon-close' />
          </svg>
          <span className='visually-hidden'>Сбросить поиск</span>
        </button>
      </form>
    </div>
  );
};
