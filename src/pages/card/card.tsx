import { useState } from 'react';
import { CardList } from './lib/card-list';
import { CardSummary } from './lib/card-summary';
import { QUANTITY_OPERATION, applyDiscount } from './lib/const';
import { useAppSelector } from '../../app/hooks';
import { getCardItems } from '../../store/user-proccess/user-proccess-selectors';

const DEFAULT_TOTAL_PRICE = 0;

export const Card = () => {
  const cardItems = useAppSelector(getCardItems);
  const defaultPrice = cardItems.reduce((acc, val) => acc + val.price, DEFAULT_TOTAL_PRICE);

  const [totalPrice, setTotalPrice] = useState(defaultPrice);

  const updateTotalPrice = (operationType: QUANTITY_OPERATION, price: number) =>
    operationType === QUANTITY_OPERATION.INCREASE ? setTotalPrice(totalPrice + price) : setTotalPrice(totalPrice - price);

  const handleItemClick = updateTotalPrice;

  const priceWithDiscount = applyDiscount(cardItems.length, totalPrice);

  return (
    <section className="basket">
      <div className="container">
        <h1 className="title title--h2">Корзина</h1>
        <CardList onItemClick={handleItemClick} />
        <CardSummary priceWithDiscount={priceWithDiscount} totalPrice={totalPrice} />
      </div>
    </section>);
};
