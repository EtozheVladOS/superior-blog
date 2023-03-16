import { fireEvent, screen } from '@testing-library/react';
import { Sidebar } from '@/widgets/Sidebar/ui/Sidebar/Sidebar';
import { ComponentRender } from '@/shared/lib/unitTest/componentRender';

describe('Sidebar', () => {
  test('render', () => {
    ComponentRender(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('toggle sidebar', () => {
    ComponentRender(<Sidebar />);
    const toggleBtn = screen.getByTestId('toggle-sidebar');
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).not.toHaveClass('collapsed');
  });
});
