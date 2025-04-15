import { MouseEventHandler } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setPriceFilter } from '../../../store/action';

export const PriceBlock = () => {
	const dispatch = useAppDispatch();

	const handlePriceChange: MouseEventHandler<HTMLFieldSetElement> = (e) => {
		dispatch(setPriceFilter(e.currentTarget));
	};

	return (
		<fieldset className='catalog-filter__block' onChange={handlePriceChange}>
			<legend className='title title--h5'>Цена, ₽</legend>
			<div className='catalog-filter__price-range'>
				<div className='custom-input'>
					<label>
						<input type='number' name='price' placeholder='от' />
					</label>
				</div>
				<div className='custom-input'>
					<label>
						<input type='number' name='priceUp' placeholder='до' />
					</label>
				</div>
			</div>
		</fieldset>
	);
};
