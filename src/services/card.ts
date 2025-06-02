import { Nullable } from 'vitest';
import { CARD_NAME } from '../const';
import { TCamera } from '../types/camera';
import { store } from '../store';
import { initCardItems } from '../store/action';


export const setCard = (items: TCamera[]) => {
  localStorage.setItem(CARD_NAME, JSON.stringify(items));
};

export const getCardItems = (): TCamera[] => {
  const basket = localStorage.getItem(CARD_NAME);

  if (!basket) {
    return [];
  }
  return JSON.parse(basket) as TCamera[];
};

export const addStorageCardItem = (item: Nullable<TCamera>) => {
  const basketItems = getCardItems();

  if (!item) {
    return [];
  }

  basketItems.push(item);
  localStorage.setItem(CARD_NAME, JSON.stringify(basketItems));
};


export const dropCardItem = (camera: TCamera) => {
  const basket = getCardItems();
  const start = basket.findIndex((item: TCamera) => item.id === camera.id);

  basket.splice(start, 1);
  setCard(basket);
};

export const initCard = () => {
  const items = getCardItems();
  store.dispatch(initCardItems(items));
};

export const checkCameraIsInCard = (cameraId: number) => {
  const basketItems = getCardItems();
  return basketItems.findIndex((camera) => camera.id === cameraId);
};
