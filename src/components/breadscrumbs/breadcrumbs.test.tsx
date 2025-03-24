import { render, screen } from '@testing-library/react';

import { Breadcrumbs } from '.';
import { describe, expect, it } from 'vitest';
import { withHistory } from '../../utils/mock-component';

describe('Component: BreadScrumbs', () => {
  it('should render correct', () => {
    const expectedText = /Главная/i;
    const preparedComponent = withHistory(<Breadcrumbs />);

    render(preparedComponent);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
