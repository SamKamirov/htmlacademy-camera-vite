import { Link, useLocation } from 'react-router-dom';
import useBreadcrumbs from 'use-react-router-breadcrumbs';
import { AppRoutes } from '../../const';
import { useAppSelector } from '../../app/hooks';
import { getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { checkIsRoot } from '../layout/lib';

const MainBreadcrumb = () => {
  const location = useLocation();
  return (
    <li className="breadcrumbs__item" >
      {!checkIsRoot(location.pathname) ?
        <Link className="breadcrumbs__link" to={AppRoutes.Root}>
          Каталог
          <svg width={5} height={8} aria-hidden="true">
            <use xlinkHref="#icon-arrow-mini" />
          </svg>
        </Link> :
        <span className="breadcrumbs__link breadcrumbs__link--active">
          Каталог
        </span>}
    </li >
  );
};

const RootBreadcrumb = () => (
  <li className="breadcrumbs__item">
    <Link className="breadcrumbs__link" to={AppRoutes.Root}>
      Главная
      <svg width={5} height={8} aria-hidden="true">
        <use xlinkHref="#icon-arrow-mini" />
      </svg>
    </Link>
  </li>
);

const CameraBreadcrumb = () => {
  const camera = useAppSelector(getSelectedCamera);

  return (
    <li className="breadcrumbs__item">
      <span className="breadcrumbs__link breadcrumbs__link--active">
        {camera?.name}
      </span>
    </li>
  );
};

const routes = [
  { path: AppRoutes.Root, breadcrumb: MainBreadcrumb },
  { path: AppRoutes.Camera, breadcrumb: CameraBreadcrumb, },
];

export const Breadcrumbs = () => {
  const breadcrumbs = useBreadcrumbs(routes, { disableDefaults: true });

  return (
    <div className="breadcrumbs">
      <div className="container">
        <ul className="breadcrumbs__list">
          <RootBreadcrumb />
          {breadcrumbs.map(({ breadcrumb }) => breadcrumb)}
        </ul>
      </div>
    </div>
  );
};
