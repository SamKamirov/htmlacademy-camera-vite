import { render } from '@testing-library/react';
import { ProductTabs } from '.';
import { withStore } from '../../utils/mock-component';
import { expect } from 'vitest';
import { fakeCamera } from '../../utils/mocks';
import { Tabs } from './lib';

describe('Component: ProductTabs', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<ProductTabs camera={fakeCamera} />, {});
    const { getByText } = render(withStoreComponent);

    expect(getByText(Tabs.Features)).toBeInTheDocument();
  });
});
