import { fireEvent, render, screen } from '@testing-library/react';
import { TabButton } from '.';
import { Tabs } from '../product-tabs/lib';
import React from 'react';
import { vi } from 'vitest';

describe('Component: TabButton', () => {
  it('should render correctly', () => {
    const expectedText = Tabs.Features;
    const mockVoidFunction = () => undefined;

    render(<TabButton tab={Tabs.Features} selectedTab={Tabs.Features} onClick={mockVoidFunction} />);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });

  it('should change state on click', () => {
    const setStateMock = vi.fn();

    vi.spyOn(React, 'useState').mockImplementationOnce(() => [Tabs.Description, setStateMock]);

    const { getByText } = render(<TabButton tab={Tabs.Features} selectedTab={Tabs.Description} onClick={setStateMock} />);

    fireEvent.click(getByText(Tabs.Features));

    expect(setStateMock).toHaveBeenCalledWith(Tabs.Features);
  });
});

