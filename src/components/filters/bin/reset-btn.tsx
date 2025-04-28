import { useAppDispatch } from '../../../app/hooks';
import { getMaxPrice, getMinPrice } from '../../../services/price';
import { resetFilters, setPriceFilter } from '../../../store/action';

export const ResetBtn = () => {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    dispatch(resetFilters());
    dispatch(setPriceFilter({minPrice: getMinPrice(), maxPrice: getMaxPrice()}));
  };

  return (
    <button className='btn catalog-filter__reset-btn' type='reset' onClick={handleBtnClick}>
			Сбросить фильтры
    </button>
  );
};
