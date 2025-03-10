import { FC } from 'react';
import { Tabs } from '../product-tabs/lib';

type TTabButon = { tab: Tabs; selectedTab: Tabs; onClick: (tab: Tabs) => void }

export const TabButton: FC<TTabButon> = ({ tab, selectedTab, onClick }) => {
  const isActive = selectedTab === tab;

  const handleTabClick = () => onClick(tab);

  return (
    <button className={`tabs__control ${isActive ? 'is-active' : ''}`} type="button" onClick={handleTabClick}>{tab}</button>
  );
};
