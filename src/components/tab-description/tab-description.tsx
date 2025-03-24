import { FC } from 'react';
import { TCamera } from '../../types/camera';

type TabDescriptionType = {
  camera: TCamera;
}

export const TabDescriptionElement: FC<TabDescriptionType> = ({ camera }) => (
  <div className="tabs__element is-active" role="description">
    <div className="product__tabs-text">
      {camera.description}
    </div>
  </div>
);
