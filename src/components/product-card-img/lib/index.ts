import { PageImageProps, PageType } from '../../../const';

export const getImageProps = (pageType: PageType) => {
  switch (pageType) {
    case PageType.Main:
      return PageImageProps.Main;

    case PageType.Product:
      return PageImageProps.Product;
  }
};
