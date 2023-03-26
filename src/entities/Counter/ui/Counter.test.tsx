import { fireEvent, screen } from '@testing-library/react';
import { ComponentRender } from '@/shared/lib/unitTest/ComponentRender';
import { Counter } from './Counter';

const initReduxState = {
  counter: {
    value: 5,
  },
};

describe('Counter', () => {
  test('render', () => {
    ComponentRender(<Counter />, { initReduxState });
    expect(screen.getByTestId('counter-value-title')).toBeInTheDocument();
  });

  test('to have redux value', () => {
    ComponentRender(<Counter />, { initReduxState });
    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('5');
  });

  test('increment', () => {
    ComponentRender(<Counter />, { initReduxState });

    const incrementBtn = screen.getByTestId('increment-btn');
    fireEvent.click(incrementBtn);

    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('6');
  });

  test('increment', () => {
    ComponentRender(<Counter />, { initReduxState });

    const decrementBtn = screen.getByTestId('decrement-btn');
    fireEvent.click(decrementBtn);

    expect(screen.getByTestId('counter-value-title')).toHaveTextContent('4');
  });
});
