import { render } from '@testing-library/react';
import { withHistory, withStore } from '../../utils/mock-component';
import { Catalog } from '.';
import { SliceNames } from '../../const';
import { fakeCamera } from '../../utils/mocks';

describe('Component: Catalog', () => {
  it('should render correctly', () => {
    const mockState = {
      [SliceNames.AppData]: {
        cameras: [fakeCamera]
      }
    };
    const { withStoreComponent } = withStore(<Catalog />, mockState);
    const withHistoryComponent = withHistory(withStoreComponent);

    const { getByText } = render(withHistoryComponent);

    expect(getByText('Каталог фото- и видеотехники')).toBeInTheDocument();
  });
});

