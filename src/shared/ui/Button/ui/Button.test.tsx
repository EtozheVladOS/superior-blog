import { render, screen } from '@testing-library/react';
import { Button, THEME_BTN } from '@/shared/ui/Button/ui/Button';

const text = 'test_text';

describe('Button', () => {
  test('Render', () => {
    render(<Button>{text}</Button>);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  test('Theme clear', () => {
    render(<Button theme={THEME_BTN.CLEAR}>{text}</Button>);
    expect(screen.getByText(text)).toHaveClass('clear');
    screen.debug();
  });
});
