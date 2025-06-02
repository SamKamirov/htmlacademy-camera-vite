import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

export const HeaderCard = () => (
  <Link to={AppRoute.Card} className="header__basket-link">
    <svg width={16} height={16} aria-hidden="true">
      <use xlinkHref="#icon-basket" />
    </svg>
    {/* <span className="header__basket-count">3</span> */}
  </Link>
);
