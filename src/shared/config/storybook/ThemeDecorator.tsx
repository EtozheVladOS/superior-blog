import { Story } from '@storybook/react';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';

export const ThemeDecorator = (theme: THEMES) => (StoryComponent: Story) => (
  <div className={`app ${theme}`}>
    <StoryComponent />
  </div>
);
