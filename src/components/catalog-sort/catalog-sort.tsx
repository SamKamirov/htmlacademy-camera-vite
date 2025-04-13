import { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { TSortingTypes } from '../../const';
import { getSortingType } from '../../store/user-proccess/user-proccess-selectors';
import { setSortingType } from '../../store/action';

type TCatalogSortingButton = {
  type: TSortingTypes;
  onClick: (type: TSortingTypes) => void;
};

const CatalogSortTypeButton: FC<TCatalogSortingButton> = ({ type, onClick }) => {
  const isPriceSorting = type === TSortingTypes.ByPrice;

  const handleBtnClick = () => {
    onClick(type);
  };

  return (
    <div className="catalog-sort__btn-text">
      <input
        type="radio"
        id={`sort ${isPriceSorting ? 'Price' : 'Popular'}`}
        name="sort"
        defaultChecked
        onClick={handleBtnClick}
      />
      <label htmlFor={`sort ${isPriceSorting ? 'Price' : 'Popular'}`}>
        {isPriceSorting ? 'по цене' : 'по популярности'}
      </label>
    </div>
  );
};

const CatalogSortButton: FC<TCatalogSortingButton> = ({ type, onClick }) => {
  const handleBtnClick = () => {
    onClick(type);
  };
  return (
    <div className="catalog-sort__btn catalog-sort__btn--down">
      <input
        type="radio"
        id="down"
        name="sort-icon"
        aria-label="По убыванию"
      />
      <label htmlFor="down">
        <svg width={16} height={14} aria-hidden="true">
          <use xlinkHref="#icon-sort" />
        </svg>
      </label>
    </div>
  );
};

export const CatalogSort = () => {
  const dispatch = useAppDispatch();
  const [...sortingType] = useAppSelector(getSortingType);

  const onSortBtnClick = (type: TSortingTypes) => {
    sortingType[0] = type;
    dispatch(setSortingType(sortingType));
  };

  return (
    <div className="catalog-sort">
      <form action="#">
        <div className="catalog-sort__inner">
          <p className="title title--h5">Сортировать:</p>
          <div className="catalog-sort__type">
            <CatalogSortTypeButton
              type={TSortingTypes.ByPrice}
              onClick={onSortBtnClick}
            />
            <CatalogSortTypeButton
              type={TSortingTypes.ByPopularity}
              onClick={onSortBtnClick}
            />
          </div>
          <div className="catalog-sort__order">

            <div className="catalog-sort__btn catalog-sort__btn--down">
              <input
                type="radio"
                id="down"
                name="sort-icon"
                aria-label="По убыванию"
              />
              <label htmlFor="down">
                <svg width={16} height={14} aria-hidden="true">
                  <use xlinkHref="#icon-sort" />
                </svg>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
