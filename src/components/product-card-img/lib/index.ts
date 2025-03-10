import { PageImageProps, PageTypes } from '../../../const';

export const getImageProps = (pageType: PageTypes) => {
  switch (pageType) {
    case PageTypes.Main:
      return PageImageProps.Main;

    case PageTypes.Product:
      return PageImageProps.Product;
  }
};
