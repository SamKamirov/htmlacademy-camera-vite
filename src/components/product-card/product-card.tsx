import { FC } from 'react';
import { TCamera } from '../../types/camera';
import { ProductButton } from '../product-button';
import { ProductCardImg } from '../product-card-img';
import { ProductRating } from '../product-rating';
import { useAppDispatch } from '../../app/hooks';
import { setModalIsOpen, setSelectedCamera } from '../../store/action';
import { Link } from 'react-router-dom';
import { PageTypes } from '../../const';

type TProductCard = {
  camera: TCamera;
}

export const ProductCard: FC<TProductCard> = ({ camera }) => {
  const dispatch = useAppDispatch();
  const { id, name, price } = camera;

  const handleProductButtonClick = () => {
    dispatch(setSelectedCamera(camera));
    dispatch(setModalIsOpen(true));
  };

  return (
    <div className="product-card">
      <ProductCardImg camera={camera} pageType={PageTypes.Main} />
      <div className="product-card__info">
        <ProductRating camera={camera} />
        <p className="product-card__title">{name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {price}
        </p>
      </div>
      <div className="product-card__buttons">
        <ProductButton onClick={handleProductButtonClick} />
        <Link className="btn btn--transparent" to={`camera/${id}`}>
          Подробнее
        </Link>
      </div>
    </div >
  );
};
