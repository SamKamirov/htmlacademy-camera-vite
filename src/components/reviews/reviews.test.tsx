import { render } from '@testing-library/react';
import { Reviews } from '.';
import { withStore } from '../../utils/mock-component';
import { fakeReview } from '../../utils/mocks';
import { SliceName } from '../../const';

describe('Component: Reviews', () => {
  it('should render correctly', () => {
    const mockState = {
      [SliceName.AppData]: {
        isLoading: false,
        cameraReviews: [fakeReview]
      }
    };

    const { withStoreComponent } = withStore(<Reviews />, mockState);
    const { getByText } = render(withStoreComponent);

    expect(getByText('Отзывы')).toBeInTheDocument();
  });

  it('should render Loading component if isLoading property equals true', () => {
    const mockState = {
      [SliceName.AppData]: {
        isLoading: true
      }
    };

    const { withStoreComponent } = withStore(<Reviews />, mockState);
    expect(render(withStoreComponent).getByRole('loader')).toBeInTheDocument();
  });

  it('should render Loading component if cameraReviews`s property length equals zero', () => {
    const mockState = {
      [SliceName.AppData]: {
        isLoading: true,
        cameraReviews: []
      }
    };

    const { withStoreComponent } = withStore(<Reviews />, mockState);
    expect(render(withStoreComponent).getByRole('loader')).toBeInTheDocument();
  });
});
