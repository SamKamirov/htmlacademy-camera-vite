import { render } from '@testing-library/react';
import { ReviewsItem } from '.';
import { fakeReview } from '../../utils/mocks';
import { expect } from 'vitest';

describe('Component: ReviewItem', () => {
  it('should render correctly', () => {
    const { getByText } = render(<ReviewsItem cameraReview={fakeReview} />);
    expect(getByText(fakeReview.userName)).toBeInTheDocument();
  });
});
