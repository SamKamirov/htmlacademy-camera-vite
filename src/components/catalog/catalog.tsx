import { useAppSelector } from '../../app/hooks';
import { getCameras } from '../../store/app-data/app-data-selectors';
import { getSorting } from '../../store/user-proccess/user-proccess-selectors';
import { CatalogCards } from '../catalog-cards';
import { CatalogSort } from '../catalog-sort';
import { Filters } from '../filters';
import { Loading } from '../loading/loading';
import { sortCameras } from './lib';

export const Catalog = () => {
  const cameras = useAppSelector(getCameras);
  const sorting = useAppSelector(getSorting)

  if (!cameras) {
    return <Loading />;
  }

  const sortedCameras = sortCameras([...cameras], sorting)

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <Filters />
          <div className="catalog__content">
            <CatalogSort />
            <CatalogCards cameras={sortedCameras} />
          </div>
        </div>
      </div>
    </section>
  );
};
