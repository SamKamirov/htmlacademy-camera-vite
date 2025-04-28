import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { OrderType, SortingType } from '../../const';
import { getSorting } from '../../store/user-proccess/user-proccess-selectors';
import { setSortingType } from '../../store/action';

interface TCatalogSortingButton<T> {
  type: T;
  onClick: (type: T) => void;
}

const CatalogSortTypeButton: FC<TCatalogSortingButton<SortingType>> = ({ type, onClick }) => {
  const isPriceSorting = type === SortingType.ByPrice;

  const handleBtnClick = () => {
    onClick(type);
  };

  return (
    <div className="catalog-sort__btn-text">
      <input
        type="radio"
        id={`sort ${isPriceSorting ? 'Price' : 'Popular'}`}
        name="sort"
        defaultChecked={!!isPriceSorting}
        onClick={handleBtnClick}
      />
      <label htmlFor={`sort ${isPriceSorting ? 'Price' : 'Popular'}`}>
        {isPriceSorting ? 'по цене' : 'по популярности'}
      </label>
    </div>
  );
};

const CatalogOrderButton: FC<TCatalogSortingButton<OrderType>> = ({ type, onClick }) => {
  const isAsc = type === OrderType.Ascending;

  const handleBtnClick = () => {
    onClick(type);
  };

  const className = isAsc ? 'up' : 'down';

  return (
    <div className={`catalog-sort__btn catalog-sort__btn--${className}`}>
      <input
        type="radio"
        id={className}
        name="sort-icon"
        aria-label={isAsc ? 'По возрастанию' : 'По убыванию'}
        onClick={handleBtnClick}
        defaultChecked={!!isAsc}
      />
      <label htmlFor={className}>
        <svg width={16} height={14} aria-hidden="true">
          <use xlinkHref="#icon-sort" />
        </svg>
      </label>
    </div>
  );
};

export const CatalogSort = () => {
  const dispatch = useAppDispatch();
  const sorting = useAppSelector(getSorting);

  const onSortBtnClick = (type: SortingType) => {
    dispatch(setSortingType({ ...sorting, type }));
  };

  const onOrderBtnClick = (order: OrderType) => {
    dispatch(setSortingType({ ...sorting, order}));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <CatalogSortTypeButton type={SortingType.ByPrice} onClick={onSortBtnClick} />
            <CatalogSortTypeButton type={SortingType.ByPopularity} onClick={onSortBtnClick} />
          </div>
          <div className="catalog-sort__order">
            <CatalogOrderButton type={OrderType.Ascending} onClick={onOrderBtnClick} />
            <CatalogOrderButton type={OrderType.Descending} onClick={onOrderBtnClick} />
          </div>
        </div>
      </form>
    </div>
  );
};
