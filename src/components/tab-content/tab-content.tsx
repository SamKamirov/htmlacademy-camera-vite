import { FC } from 'react';
import { Tabs } from '../product-tabs/lib';
import { TCamera } from '../../types/camera';
import { TabDescriptionElement } from '../tab-description';
import { TabFeaturesElement } from '../tab-features';


const getTabElementComponent = (tab: Tabs) => {
  switch (tab) {
    case Tabs.Features:
      return TabFeaturesElement;
    case Tabs.Description:
      return TabDescriptionElement;
  }
};

type TabContentType = {
  selectedTab: Tabs;
  camera: TCamera;
}

export const TabContent: FC<TabContentType> = ({ selectedTab, camera }) => {
  const Component = getTabElementComponent(selectedTab);

  return (
    <div className="tabs__content">
      <Component camera={camera} />
    </div>
  );
};
