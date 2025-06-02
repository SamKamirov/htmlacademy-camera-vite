import { FC, useState } from 'react';
import { TCamera } from '../../../types/camera';
import { NumericFormat } from 'react-number-format';
import { dropCardItem } from '../../../services/card';
import { useAppDispatch } from '../../../app/hooks';
import { deleteAllItemsById, deleteCardItem } from '../../../store/action';
import { QUANTITY_OPERATION } from './const';

const COEFFICIENT = 1;

type TCardItem = {
  item: TCamera;
  defaultQuantity: number;
  onClick: (operationType: QUANTITY_OPERATION, price: number) => void;
}

export const CardItem: FC<TCardItem> = ({ item, defaultQuantity, onClick }) => {
  const dispatch = useAppDispatch();
  const { type, name, vendorCode, category, level, price, previewImgWebp2x, previewImgWebp, previewImg, previewImg2x } = item;

  const [totalPrice, setTotalPrice] = useState(defaultQuantity * price);
  const [itemCount, setItemCount] = useState(defaultQuantity);

  const handleItemClick = onClick;

  const updateProductCount = (operationType: QUANTITY_OPERATION) => {
    switch (operationType) {
      case QUANTITY_OPERATION.INCREASE:
        setItemCount(itemCount + COEFFICIENT);
        setTotalPrice(totalPrice + price);
        handleItemClick(QUANTITY_OPERATION.INCREASE, price);
        break;
      case QUANTITY_OPERATION.DECREASE:
        if (itemCount === COEFFICIENT) {
          return;
        }
        setItemCount(itemCount - COEFFICIENT);
        setTotalPrice(totalPrice - price);
        handleItemClick(QUANTITY_OPERATION.DECREASE, price);
        break;
    }
  };

  const handleDeleteBtnClick = () => {
    if (defaultQuantity > 1) {
      dispatch(deleteAllItemsById(item.vendorCode));
      return;
    }
    dispatch(deleteCardItem(item));
    dropCardItem(item);
  };

  return (
    <li className="basket-item">
      <div className="basket-item__img">
        <picture>
          <source type="image/webp" srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`} />
          <img src={previewImg} srcSet={`${previewImg2x} 2x`} width={140} height={120} alt={`${category} {name}`} />
        </picture>
      </div>
      <div className="basket-item__description">
        <p className="basket-item__title">{category} «{name}»</p>
        <ul className="basket-item__list">
          <li className="basket-item__list-item">
            <span className="basket-item__article">Артикул:</span>
            <span className="basket-item__number">{vendorCode}</span>
          </li>
          <li className="basket-item__list-item">{type} фотокамера</li>
          <li className="basket-item__list-item">{level} уровень</li>
        </ul>
      </div>
      <p className="basket-item__price">
        <NumericFormat displayType='text' value={price} thousandSeparator=" " />&nbsp;₽
      </p>
      <div className="quantity">
        <button className="btn-icon btn-icon--prev" aria-label="уменьшить количество товара"
          onClick={() => updateProductCount(QUANTITY_OPERATION.DECREASE)}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
        <label className="visually-hidden" htmlFor="counter1" />
        <input type="number" id="counter1" value={itemCount} min={1} max={99} aria-label="количество товара" readOnly />
        <button className="btn-icon btn-icon--next" aria-label="увеличить количество товара"
          onClick={() => updateProductCount(QUANTITY_OPERATION.INCREASE)}
        >
          <svg width={7} height={12} aria-hidden="true">
            <use xlinkHref="#icon-arrow" />
          </svg>
        </button>
      </div>
      <div className="basket-item__total-price">
        <NumericFormat displayType='text' value={totalPrice} thousandSeparator=" " />&nbsp;₽
      </div>
      <button className="cross-btn" type="button" aria-label="Удалить товар" onClick={handleDeleteBtnClick}>
        <svg width={10} height={10} aria-hidden="true">
          <use xlinkHref="#icon-close" />
        </svg>
      </button>
    </li>
  );
};
