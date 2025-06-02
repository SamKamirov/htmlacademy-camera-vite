import { FC } from 'react';
import { useAppSelector } from '../../../app/hooks';
import { getCardItems } from '../../../store/user-proccess/user-proccess-selectors';
import { CardItem } from './card-item';
import { QUANTITY_OPERATION } from './const';
import { uniqBy } from 'lodash';
import { TCamera } from '../../../types/camera';

type TCardList = {
  onItemClick: (operationType: QUANTITY_OPERATION, price: number) => void;
}

export const CardList: FC<TCardList> = ({ onItemClick }) => {
  const basketListItems = useAppSelector(getCardItems);
  const basketUniqItems: TCamera[] = uniqBy<TCamera>(basketListItems, 'id');

  return (
    <ul className="basket__list">
      {basketUniqItems.map((item) => {
        const itemQuantity = basketListItems.filter((basketItem) => basketItem.id === item.id).length;
        return <CardItem item={item} defaultQuantity={itemQuantity} onClick={onItemClick} key={item.id} />;
      })}
    </ul>
  );
};
