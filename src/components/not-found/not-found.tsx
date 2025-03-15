import { Link } from 'react-router-dom';
import './css/not-found.css';
import { AppRoutes } from '../../const';

export const NotFound = () => (
  <section className="not-found-wrapper">
    <div className='not-found'>
      <h1 className="not-found__header">Страница не найдена</h1>
      <Link to={AppRoutes.Root} className='not-found__link'>На главную</Link>
    </div>
  </section>
);
