import { FC } from 'react';

type TProductButton = {
  onClick: () => void;
}

export const ProductButton: FC<TProductButton> = ({ onClick }) => {
  const handleButtonClick = onClick;

  return (
    <button className="btn btn--purple product-card__btn"
      type="button"
      onClick={handleButtonClick}
    >
      Купить
    </button>
  );
};
