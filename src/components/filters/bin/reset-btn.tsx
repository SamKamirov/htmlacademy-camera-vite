import { useAppDispatch } from '../../../app/hooks';
import { resetFilters } from '../../../store/action';

export const ResetBtn = () => {
  const dispatch = useAppDispatch();

  const handleBtnClick = () => {
    dispatch(resetFilters());
  };

  return (
    <button
      className='btn catalog-filter__reset-btn'
      type='reset'
      onClick={handleBtnClick}
    >
			Сбросить фильтры
    </button>
  );
};
