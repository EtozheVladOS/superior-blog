import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, THEME_BTN } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';

export default {
  title: 'Shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Default',
};
DefaultDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Clear = Template.bind({});
Clear.args = {
  children: 'Clear',
  theme: THEME_BTN.CLEAR,
};
export const ClearDark = Template.bind({});
ClearDark.args = {
  children: 'Clear',
  theme: THEME_BTN.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outline',
  theme: THEME_BTN.OUTLINE,
};
export const OutlineDark = Template.bind({});
OutlineDark.args = {
  children: 'Outline',
  theme: THEME_BTN.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(THEMES.DARK)];
