import { useAppSelector } from '../../app/hooks';
import { getCameras } from '../../store/app-data/app-data-selectors';
import { CatalogCards } from '../catalog-cards';
import { Loading } from '../loading/loading';

export const Catalog = () => {
  const cameras = useAppSelector(getCameras);

  if (!cameras) {
    return <Loading />;
  }

  return (
    <section className="catalog">
      <div className="container">
        <h1 className="title title--h2">Каталог фото- и видеотехники</h1>
        <div className="page-content__columns">
          <div className="catalog__aside">
            <img src="img/banner.png" />
          </div>
          <div className="catalog__content">
            <CatalogCards cameras={cameras} />
          </div>
        </div>
      </div>
    </section>
  );
};
