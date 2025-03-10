import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getIsLoading, getSelectedCamera } from '../../store/app-data/app-data-selectors';
import { useEffect } from 'react';
import { fetchCamera } from '../../api/api-actions';
import { Loading } from '../../components/loading';
import { ProductCardImg } from '../../components/product-card-img';
import { PageTypes } from '../../const';
import { ProductRating } from '../../components/product-rating';
import { ProductTabs } from '../../components/product-tabs';

export const Product = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchCamera(id));
  }, [id, dispatch]);

  const selectedCamera = useAppSelector(getSelectedCamera);

  if (isLoading) {
    return <Loading />;
  }

  if (!selectedCamera) {
    return <Loading />;
  }

  const { name, price } = selectedCamera;

  return (
    <div className="page-content__section">
      <section className="product">
        <div className="container">
          <ProductCardImg camera={selectedCamera} pageType={PageTypes.Product} />
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
