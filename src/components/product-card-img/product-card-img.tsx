import { FC } from 'react';
import { TCamera } from '../../types/camera';

type TProductCardImg = {
  camera: TCamera;
}

export const ProductCardImg: FC<TProductCardImg> = ({ camera }) => {
  const { name, previewImg, previewImg2x, previewImgWebp, previewImgWebp2x } = camera;
  return (
    <div className="product-card__img">
      <picture>
        <source
          type="image/webp"
          srcSet={`${previewImgWebp}, ${previewImgWebp2x} 2x`}
        />
        <img
          src={previewImg}
          srcSet={`${previewImg2x} 2x`}
          width={280}
          height={240}
          alt={name}
        />
      </picture>
    </div>
  );
};
