import { FC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { getCardItems } from '../../store/user-proccess/user-proccess-selectors';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { TCamera } from '../../types/camera';

type TProductButton = {
  cameraId: number;
  onClick: () => void;
};

type TProductBtnElement = {
  isInCard: TCamera | undefined;
  onClick: () => void;
};

const ProductButtonElement: FC<TProductBtnElement> = ({ isInCard, onClick }) => {
  const handleButtonClick = onClick;

  if (isInCard) {
    return (
      <Link to={AppRoute.Card} className="btn btn--purple-border product-card__btn product-card__btn--in-cart" >
        <svg width={16} height={16} aria-hidden="true">
          <use xlinkHref="#icon-basket" />
        </svg>В корзине
      </Link>
    );
  }

  return (
    <button
      className="btn btn--purple product-card__btn"
      type="button"
      onClick={handleButtonClick}
    >
      Купить
    </button>
  );

};

export const ProductButton: FC<TProductButton> = ({ onClick, cameraId }) => {
  const cameras = useAppSelector(getCardItems);

  const isInCard = cameras.find((item) => item.id === cameraId);

  return (
    <ProductButtonElement isInCard={isInCard} onClick={onClick} />
  );
};
