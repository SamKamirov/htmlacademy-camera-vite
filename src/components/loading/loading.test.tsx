import { render, screen } from '@testing-library/react';
import { Loading } from '.';

describe('Component: Loading', () => {
  it('should render correctry', () => {
    const expectedRole = 'loader';

    render(<Loading />);
    expect(screen.getByRole(expectedRole)).toBeInTheDocument();
  });
});
