import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setLevelFilter } from '../../../store/action';
import { TCameraLevel } from '../../../types/camera';
import { FilterInput } from '../../filter-input';

export const LevelBlock = () => {
	const dispatch = useAppDispatch();

	const handleLevelClick: MouseEventHandler<HTMLFieldSetElement> = (e) => {
		dispatch(setLevelFilter((e.target as HTMLInputElement).value));
	};

	return (
		<fieldset className='catalog-filter__block' onChange={handleLevelClick}>
			<legend className='title title--h5'>Уровень</legend>
			<FilterInput
				title={TCameraLevel.Zero}
				type='checkbox'
				value={TCameraLevel.Zero}
			/>
			<FilterInput
				title={TCameraLevel.NonProfessional}
				type='checkbox'
				value={TCameraLevel.NonProfessional}
			/>
			<FilterInput
				title={TCameraLevel.Professional}
				type='checkbox'
				value={TCameraLevel.Professional}
			/>
		</fieldset>
	);
};
