import { MouseEventHandler } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getFilters } from '../../store/user-proccess/user-proccess-selectors';
import { CategoryBlock } from './bin/category-block';
import { LevelBlock } from './bin/level-block';
import { PriceBlock } from './bin/price-block';
import { ResetBtn } from './bin/reset-btn';
import { TypeBlock } from './bin/type-block';

export const Filters = () => {
	const filters = useAppSelector(getFilters);

	console.log(filters.equipmentFilters);
	return (
		<div className='catalog__aside'>
			<div className='catalog-filter'>
				<form action='#' name='filter'>
					<h2 className='visually-hidden'>Фильтр</h2>
					<PriceBlock />
					<CategoryBlock />
					<TypeBlock />
					<LevelBlock />
					<ResetBtn />
				</form>
			</div>
		</div>
	);
};
