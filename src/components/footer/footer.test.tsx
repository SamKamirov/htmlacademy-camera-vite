import { withHistory } from '../../utils/mock-component';
import { Footer } from '.';
import { render, screen } from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correctry', () => {
    const exprectedText = 'Навигация';

    const readyComponent = withHistory(<Footer />);

    render(readyComponent);

    expect(screen.getByText(exprectedText)).toBeInTheDocument();
  });
});
