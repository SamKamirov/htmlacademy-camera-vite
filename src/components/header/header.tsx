import { Link } from 'react-router-dom';
import { AppRoutes } from '../../const';
import { SearchBar } from '../search-bar';

export const Header = () => (
  <header className="header" id="header">
    <div className="container">
      <Link
        className="header__logo"
        to={AppRoutes.Root}
        aria-label="Переход на главную"
      >
        <svg width={100} height={36} aria-hidden="true">
          <use xlinkHref="#icon-logo" />
        </svg>
      </Link>
      <nav className="main-nav header__main-nav">
        <ul className="main-nav__list">
          <li className="main-nav__item">
            <Link className="main-nav__link" to={AppRoutes.Root}>
              Каталог
            </Link>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">
              Гарантии
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">
              Доставка
            </a>
          </li>
          <li className="main-nav__item">
            <a className="main-nav__link" href="#">
              О компании
            </a>
          </li>
        </ul>
      </nav>
      <SearchBar />
    </div>
  </header>
);
