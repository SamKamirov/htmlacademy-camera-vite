import { FC } from 'react';
import { TCamera } from '../../types/camera';

type TabFeaturesType = {
  camera: TCamera;
}

export const TabFeaturesElement: FC<TabFeaturesType> = ({ camera }) => (
  <div className="tabs__element is-active">
    <ul className="product__tabs-list">
      <li className="item-list"><span className="item-list__title">Артикул:</span>
        <p className="item-list__text">{camera.vendorCode}</p>
      </li>
      <li className="item-list"><span className="item-list__title">Категория:</span>
        <p className="item-list__text">{camera.category}</p>
      </li>
      <li className="item-list"><span className="item-list__title">Тип камеры:</span>
        <p className="item-list__text">{camera.type}</p>
      </li>
      <li className="item-list"><span className="item-list__title">Уровень:</span>
        <p className="item-list__text">{camera.level}</p>
      </li>
    </ul>
  </div>
);
