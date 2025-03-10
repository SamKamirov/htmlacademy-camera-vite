import { FC } from 'react';
import { TCamera } from '../../types/camera';

type TProductRating = {
  camera: TCamera;
}

export const ProductRating: FC<TProductRating> = ({ camera }) => {
  const { rating, reviewCount } = camera;
  return (
    <div className="rate product-card__rate">
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-full-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-star" />
      </svg>
      <svg width={17} height={16} aria-hidden="true">
        <use xlinkHref="#icon-star" />
      </svg>
      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
};
