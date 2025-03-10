import { FC, useState } from 'react';
import { Tabs } from './lib';
import { TabButton } from '../tab-button';
import { TabContent } from '../tab-content';
import { TCamera } from '../../types/camera';

type TProductTabs = {
  camera: TCamera;
}

export const ProductTabs: FC<TProductTabs> = ({ camera }) => {
  const [selectedTab, setSelectedTab] = useState<Tabs>(Tabs.Features);

  const tabClickHandler = (tab: Tabs) => {
    setSelectedTab(tab);
  };

  return (
    <div className="tabs product__tabs">
      <div className="tabs__controls product__tabs-controls">
        {Object.values(Tabs).map((item) =>
          <TabButton tab={item} selectedTab={selectedTab} onClick={tabClickHandler} key={item} />)}
      </div>
      <TabContent selectedTab={selectedTab} camera={camera} />
    </div>
  );
};
