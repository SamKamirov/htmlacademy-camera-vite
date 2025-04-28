const MIN_PRICE_NAME = 'min_price';
const MAX_PRICE_NAME = 'max_price';

export const setMinPrice = (value: string) => localStorage.setItem(MIN_PRICE_NAME, value);
export const setMaxPrice = (value: string) => localStorage.setItem(MAX_PRICE_NAME, value);

export const getMinPrice = () => Number(localStorage.getItem(MIN_PRICE_NAME));
export const getMaxPrice = () => Number(localStorage.getItem(MAX_PRICE_NAME));
