import { withHistory } from '../../utils/mock-component';
import { Header } from '.';
import { render, screen } from '@testing-library/react';

describe('Component: Footer', () => {
  it('should render correctry', () => {
    const exprectedText = 'Каталог';

    const readyComponent = withHistory(<Header />);

    render(readyComponent);

    expect(screen.getByText(exprectedText)).toBeInTheDocument();
  });
});
