import { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { FilterInput } from '../../filter-input';
import { setCameraTypeFilter } from '../../../store/action';
import { TCameraCategory, TCameraType } from '../../../types/camera';
import { getFilters } from '../../../store/user-proccess/user-proccess-selectors';

export const TypeBlock = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getFilters);

  const {equipmentFilters: {category }} = filters;

  const handleTypeFilterChange: MouseEventHandler<HTMLFieldSetElement> = (e) => {
    dispatch(setCameraTypeFilter((e.target as HTMLInputElement).value));
  };

  const isPhotocamera = category === TCameraCategory.Photocamera;
  const isVideocamera = category === TCameraCategory.Videocamera;

  return (
    <fieldset className='catalog-filter__block' onChange={handleTypeFilterChange}>
      <legend className='title title--h5'>Тип камеры</legend>
      <FilterInput
        name='type'
        type='checkbox'
        title='Цифровая'
        isDisabled={isPhotocamera}
        value={TCameraType.Digital}
      />
      <FilterInput
        name='type'
        type='checkbox'
        title='Плёночная'
        isDisabled={isVideocamera}
        value={TCameraType.Film}
      />
      <FilterInput
        name='type'
        type='checkbox'
        title='Моментальная'
        isDisabled={isVideocamera}
        value={TCameraType.Snapshot}
      />
      <FilterInput
        name='type'
        type='checkbox'
        title='Коллекционная'
        isDisabled={isPhotocamera}
        value={TCameraType.Collection}
      />
    </fieldset>
  );
};
