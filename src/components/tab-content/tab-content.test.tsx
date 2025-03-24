import { render, screen } from '@testing-library/react';
import { TabContent } from '.';
import { fakeCamera } from '../../utils/mocks';
import { Tabs } from '../product-tabs/lib';

describe('Component: TabContent', () => {
  it('should render correctly', () => {
    const expectedText = 'Артикул:';

    render(<TabContent camera={fakeCamera} selectedTab={Tabs.Features} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render features tab', () => {
    const expectedText = 'Артикул:';
    render(<TabContent camera={fakeCamera} selectedTab={Tabs.Features} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should render description tab', () => {
    const expectedRole = 'description';
    render(<TabContent camera={fakeCamera} selectedTab={Tabs.Description} />);

    expect(screen.getByRole(expectedRole)).toBeInTheDocument();
  });
});
