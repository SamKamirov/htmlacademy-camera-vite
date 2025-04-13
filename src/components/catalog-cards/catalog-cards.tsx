import { FC } from 'react';
import { TCameraList } from '../../types/camera';
import { ProductCard } from '../product-card';

type TCatalogCards = {
  cameras: TCameraList;
};

export const CatalogCards: FC<TCatalogCards> = ({ cameras }) => {

  return (
    <div className="cards catalog__cards">
      {cameras.map((camera) => (
        <ProductCard camera={camera} key={camera.id} />
      ))}
    </div>
  );
};
