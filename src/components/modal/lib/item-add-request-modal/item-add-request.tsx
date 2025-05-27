import { FC, FormEvent } from 'react';
import { TCamera } from '../../../../types/camera';
import { CloseModalButton } from '../../../close-modal-button';

type TItemAddRequestModal = {
  camera: TCamera;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export const ItemAddRequestModal: FC<TItemAddRequestModal> = ({ camera, onSubmit }) => {
  const handleSubmit = onSubmit;
  const { previewImgWebp, previewImg, previewImgWebp2x, previewImg2x, name, vendorCode, price, type, level } = camera;

  return (
    <form className="modal__content" onSubmit={handleSubmit}>
      <p className="title title--h4">Добавить товар в корзину</p>
      <div className="basket-item basket-item--short">
        <div className="basket-item__img">
          <picture>
            <source
              type="image/webp"
              srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}
            />
            <img
              src={previewImg}
              srcSet={`${previewImg2x} 2x`}
              width={140}
              height={120}
              alt={name}
            />
          </picture>
        </div>
        <div className="basket-item__description">
          <p className="basket-item__title">{name}</p>
          <ul className="basket-item__list">
            <li className="basket-item__list-item">
              <span className="basket-item__article">Артикул:</span>
              <span className="basket-item__number">{vendorCode}</span>
            </li>
            <li className="basket-item__list-item">{type} фотокамера</li>
            <li className="basket-item__list-item">{level} уровень</li>
          </ul>
          <p className="basket-item__price">
            <span className="visually-hidden">Цена:</span>
            {price} ₽
          </p>
        </div>
      </div>
      <div className="modal__buttons">
        <button className="btn btn--purple modal__btn modal__btn--fit-width" type="submit">
          <svg width={24} height={16} aria-hidden="true">
            <use xlinkHref="#icon-add-basket" />
          </svg>
          Добавить в корзину
        </button>
      </div>
      <CloseModalButton />
    </form>
  );
};
