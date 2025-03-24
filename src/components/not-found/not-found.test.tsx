import { render, screen } from '@testing-library/react';
import { NotFound } from '.';
import { withHistory } from '../../utils/mock-component';

describe('Component: NotFound', () => {
  it('should render correctly', () => {
    const expectedText = 'Страница не найдена';

    const withHistoryComponent = withHistory(<NotFound />);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
