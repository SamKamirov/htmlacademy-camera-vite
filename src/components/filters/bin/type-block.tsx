import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { FilterInput } from '../../filter-input';
import { setCameraTypeFilter } from '../../../store/action';
import { TCameraType } from '../../../types/camera';

export const TypeBlock = () => {
	const dispatch = useAppDispatch();

	const handleTypeFilterChange: MouseEventHandler<HTMLFieldSetElement> = (e) => {
		dispatch(setCameraTypeFilter((e.target as HTMLInputElement).value));
	};

	return (
		<fieldset className='catalog-filter__block' onChange={handleTypeFilterChange}>
			<legend className='title title--h5'>Тип камеры</legend>
			<FilterInput
				name='type'
				type='checkbox'
				title='Цифровая'
				value={TCameraType.Digital}
			/>
			<FilterInput
				name='type'
				type='checkbox'
				title='Плёночная'
				value={TCameraType.Film}
			/>
			<FilterInput
				name='type'
				type='checkbox'
				title='Моментальная'
				value={TCameraType.Snapshot}
			/>
			<FilterInput
				name='type'
				type='checkbox'
				title='Коллекционная'
				value={TCameraType.Collection}
			/>
		</fieldset>
	);
};
