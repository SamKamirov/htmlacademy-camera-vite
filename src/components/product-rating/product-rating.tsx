import { FC, ReactNode } from 'react';
import { TCamera } from '../../types/camera';
import './lib/styles.css';
import { Rating } from 'react-simple-star-rating';

type TProductRating = {
  camera: TCamera;
};

const StarRatingIcon: ReactNode = (
  <svg width={17} height={16} aria-hidden="true" className="custom-rating-icon">
    <use xlinkHref="#icon-full-star" />
  </svg>
);
const EmptyRatingIcon: ReactNode = (
  <svg width={17} height={16} aria-hidden="true" className="custom-rating-icon">
    <use xlinkHref="#icon-star" />
  </svg>
);

export const ProductRating: FC<TProductRating> = ({ camera }) => {
  const { rating, reviewCount } = camera;

  return (
    <div className="rate product-card__rate">
      <Rating
        initialValue={rating}
        fillIcon={StarRatingIcon}
        emptyIcon={EmptyRatingIcon}
        allowHover={false}
        readonly
      />

      <p className="visually-hidden">Рейтинг: {rating}</p>
      <p className="rate__count">
        <span className="visually-hidden">Всего оценок:</span>
        {reviewCount}
      </p>
    </div>
  );
};
