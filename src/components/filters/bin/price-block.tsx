import { ChangeEventHandler, FormEventHandler, useEffect, useRef, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { getPriceFilter } from '../../../store/user-proccess/user-proccess-selectors';
import { setPriceFilter } from '../../../store/action';

const TIMER_DELAY = 400;

export const PriceBlock = () => {
  const dispatch = useAppDispatch();
  const {minPrice, maxPrice} = useAppSelector(getPriceFilter);

  const [minStatePrice, setMinPrice] = useState(minPrice);
  const [maxStatePrice, setMaxPrice] = useState(maxPrice);

  const handleMinPriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const price = Number(e.target.value);
    setMinPrice(price);
  };

  const handleMaxPriceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const price = Number(e.target.value);
    setMaxPrice(price);
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (minStatePrice && maxStatePrice && maxStatePrice < minStatePrice) {
        setMaxPrice(minStatePrice);
        setMinPrice(maxStatePrice);
      } else {
        dispatch(setPriceFilter({minPrice: minStatePrice, maxPrice: maxStatePrice}));
      }
    }, TIMER_DELAY);

    return () => clearTimeout(timerId);
  }, [minPrice, maxPrice, setMaxPrice, setMinPrice, dispatch, minStatePrice, maxStatePrice]);

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
              value={minStatePrice}
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
              value={minStatePrice}
              onChange={handleMaxPriceChange}
            />
          </label>
        </div>
      </div>
    </fieldset>
  );
};
