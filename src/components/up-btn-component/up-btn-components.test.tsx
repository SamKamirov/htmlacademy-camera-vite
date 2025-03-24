import { render, screen } from '@testing-library/react';
import { UpBtnComponent } from '.';

describe('Component: UpBtnComponent', () => {
  it('should render correctly', () => {
    const expectedRole = 'up-btn';

    render(<UpBtnComponent />);

    expect(screen.findByText(expectedRole));
  });
});
