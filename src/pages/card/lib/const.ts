export enum QUANTITY_OPERATION {
  INCREASE = 'INCREASE',
  DECREASE = 'DECREASE'
}

export const applyDiscount = (itemsQuantity: number, price: number) => {
  let totalPrice = price;

  switch (itemsQuantity) {
    case 2:
      totalPrice -= price * 0.03;
      break;
    case 3:
    case 4:
    case 5:
      totalPrice -= price * 0.05;
      break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
      totalPrice -= price * 0.1;
      break;
  }

  if (price >= 10000 && price <= 20000) {
    totalPrice += price * 0.1;
  }

  if (price >= 20000 && price <= 30000) {
    totalPrice += price * 0.2;
  }

  if (price >= 30000) {
    totalPrice += price * 0.3;
  }

  return totalPrice;
};
