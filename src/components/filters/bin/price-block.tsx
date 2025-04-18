import { ChangeEventHandler } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { setMaxPriceFilter, setMinPriceFilter } from '../../../store/action';

export const PriceBlock = () => {
	const dispatch = useAppDispatch();

	const handleMinPriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const price = Number(e.target.value);
		dispatch(setMinPriceFilter(price));
	};

	const handleMaxPriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
		const price = Number(e.target.value);
		dispatch(setMaxPriceFilter(price));
	};

	return (
		<fieldset className='catalog-filter__block'>
			<legend className='title title--h5'>Цена, ₽</legend>
			<div className='catalog-filter__price-range'>
				<div className='custom-input'>
					<label>
						<input
							type='number'
							name='price'
							placeholder='от'
							onChange={handleMinPriceChange}
						/>
					</label>
				</div>
				<div className='custom-input'>
					<label>
						<input
							type='number'
							name='priceUp'
							placeholder='до'
							onChange={handleMaxPriceChange}
						/>
					</label>
				</div>
			</div>
		</fieldset>
	);
};
