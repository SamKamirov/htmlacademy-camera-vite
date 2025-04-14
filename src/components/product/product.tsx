import { FC } from 'react';
import { TCamera } from '../../types/camera';
import { PageType } from '../../const';
import { ProductCardImg } from '../product-card-img';
import { ProductRating } from '../product-rating';
import { ProductTabs } from '../product-tabs';

type TProductComponent = {
  selectedCamera: TCamera;
}

export const ProductComponent: FC<TProductComponent> = ({ selectedCamera }) => {
  const { name, price } = selectedCamera;

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <ProductCardImg camera={selectedCamera} pageType={PageType.Product} />
          <div className="product__content">
            <h1 className="title title--h3">{name}</h1>
            <ProductRating camera={selectedCamera} />
            <p className="product__price"><span className="visually-hidden">Цена:</span>{price} ₽</p>
            <button className="btn btn--purple" type="button">
              <svg width={24} height={16} aria-hidden="true">
                <use xlinkHref="#icon-add-basket" />
              </svg>Добавить в корзину
            </button>
            <ProductTabs camera={selectedCamera} />
          </div>
        </div>
      </section>
    </div>
  );
};
