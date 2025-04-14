import { FC } from 'react';
import { TCamera } from '../../types/camera';
import { PageType } from '../../const';
import { getImageProps } from './lib';

type TProductCardImg = {
  camera: TCamera;
  pageType: PageType;
}

export const ProductCardImg: FC<TProductCardImg> = ({ camera, pageType }) => {
  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;
  const { width, height } = getImageProps(pageType);

  return (
    <div className="product-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet={`/${previewImgWebp}, /${previewImgWebp2x} 2x`}
        />
        <img
          src={previewImg}
          srcSet={`/${previewImg2x} 2x`}
          width={width}
          height={height}
          alt={name}
        />
      </picture>
    </div>
  );
};
