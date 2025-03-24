import { render } from '@testing-library/react';
import { ProductComponent } from '.';
import { withStore } from '../../utils/mock-component';
import { fakeCamera } from '../../utils/mocks';

describe('Component: Product', () => {
  it('should render correctly', () => {
    const { withStoreComponent } = withStore(<ProductComponent selectedCamera={fakeCamera} />);
    const { getByText } = render(withStoreComponent);

    expect(getByText(fakeCamera.name)).toBeInTheDocument();
  });
});
