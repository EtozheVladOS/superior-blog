import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import {
  renderWithTranslation,
} from '@/shared/lib/renderWithTranslation/renderWithTranslation';

describe('Sidebar', () => {
  test('render', () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    renderWithTranslation(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
