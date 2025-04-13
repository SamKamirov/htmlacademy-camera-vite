export enum AppRoutes {
  Root = '/',
  Camera = 'camera/:id',
  Everything = '*',
}

export enum PageTypes {
  Main = 'Main',
  Product = 'Product',
}

export const PageImageProps = {
  Main: { width: 280, height: 240 },
  Product: { width: 560, height: 480 },
};

export const SERVER_URL = 'https://camera-shop.accelerator.htmlacademy.pro';

export const TOKEN_NAME = 'x-token';

export enum SliceNames {
  AppData = 'AppData',
  UserProccess = 'UserProccess',
}

export enum TSortingTypes {
  ByPrice = 'ByPrice',
  ByPopularity = 'ByPopularity',
  Descending = 'Descending',
  Ascending = 'Ascending',
}
