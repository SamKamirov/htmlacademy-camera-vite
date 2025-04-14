import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setCategoryFilter } from '../../../store/action';
import { FilterInput } from '../../filter-input';

export const CategoryBlock = () => {
	const dispatch = useAppDispatch();

	const handleFilterClick: MouseEventHandler<HTMLFieldSetElement> = (event) => {
		dispatch(setCategoryFilter((event.target as HTMLInputElement).value));
	};

	return (
		<fieldset className='catalog-filter__block' onChange={handleFilterClick}>
			<legend className='title title--h5'>Категория</legend>
			<FilterInput
				name='category'
				type='radio'
				title='Фотокамера'
				value='photocamera'
			/>
			<FilterInput
				name='category'
				type='radio'
				title='Видеокамера'
				value='videocamera'
			/>
		</fieldset>
	);
};
