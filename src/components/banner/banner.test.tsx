import { render, screen } from '@testing-library/react';

import { Banner } from '.';
import { describe, expect, it } from 'vitest';
import { withHistory } from '../../utils/mock-component';

describe('Component: Banner', () => {
  it('should render correct', () => {
    const expectedText = 'Новинка!';
    const withHistoryComponent = withHistory(<Banner />);

    render(withHistoryComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
