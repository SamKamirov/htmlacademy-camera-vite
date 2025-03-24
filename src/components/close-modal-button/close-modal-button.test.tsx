import { render, screen } from '@testing-library/react';

import { CloseModalButton } from '.';
import { describe, expect, it } from 'vitest';
import { withStore } from '../../utils/mock-component';

describe('Component: CloseModalButton', () => {
  it('should render correct', () => {
    const expectedRole = 'button';
    const { withStoreComponent } = withStore(<CloseModalButton />, {});

    render(withStoreComponent);

    expect(screen.getByRole(expectedRole)).toBeInTheDocument();
  });
});
