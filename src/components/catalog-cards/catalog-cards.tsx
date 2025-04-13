import { FC } from 'react';
import { TCameraList } from '../../types/camera';
import { ProductCard } from '../product-card';
import { useAppSelector } from '../../app/hooks';
import { getSortingType } from '../../store/user-proccess/user-proccess-selectors';
import { sortCameras } from './lib';

type TCatalogCards = {
  cameras: TCameraList;
};

export const CatalogCards: FC<TCatalogCards> = ({ cameras }) => {
  const sortingType = useAppSelector(getSortingType);

  const sortedCameras = sortCameras({ cameras: [...cameras], sortingType });

  return (
    <div className="cards catalog__cards">
      {sortedCameras.map((camera) => (
        <ProductCard camera={camera} key={camera.id} />
      ))}
    </div>
  );
};
