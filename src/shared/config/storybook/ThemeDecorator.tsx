import { Story } from '@storybook/react';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ThemesProvider } from '@/app/providers/ThemeProvider';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent: Story) => (
  <ThemesProvider initialTheme={theme}>
    <div className={`app ${theme}`}>
      <StoryComponent />
    </div>
  </ThemesProvider>
);
