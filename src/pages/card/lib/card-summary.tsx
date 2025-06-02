import { NumericFormat } from 'react-number-format';
import { FC } from 'react';

type TCardSummary = {
  priceWithDiscount: number;
  totalPrice: number;
}

export const CardSummary: FC<TCardSummary> = ({ priceWithDiscount, totalPrice }) => (
  <div className="basket__summary">
    <div className="basket__promo">
    </div>
    <div className="basket__summary-order">
      <p className="basket__summary-item">
        <span className="basket__summary-text">Всего:</span>
        <NumericFormat displayType='text' className='basket__summary-value' value={totalPrice} thousandSeparator=" " suffix='&nbsp;₽' />
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text">Скидка:</span>
        {priceWithDiscount === totalPrice ?
          <NumericFormat displayType='text' className='basket__summary-value basket__summary-value'
            value={0} thousandSeparator=" " suffix='&nbsp;₽'
          /> :
          <NumericFormat displayType='text' className='basket__summary-value basket__summary-value--bonus'
            value={(totalPrice - priceWithDiscount).toFixed(1)} thousandSeparator=" " suffix='&nbsp;₽'
          />}
      </p>
      <p className="basket__summary-item">
        <span className="basket__summary-text basket__summary-text--total">К оплате:</span>
        <NumericFormat displayType='text' className='basket__summary-value basket__summary-value--total'
          value={priceWithDiscount} thousandSeparator=" " suffix='&nbsp;₽'
        />
      </p>
      <button className="btn btn--purple" type="submit">Оформить заказ</button>
    </div>
  </div>

);
