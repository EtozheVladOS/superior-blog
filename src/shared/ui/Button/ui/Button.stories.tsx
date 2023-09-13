import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button, THEME_BTN, SIZE_BTN } from './Button';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';

export default {
  title: 'Shared/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const SizesTemplate: ComponentStory<typeof Button> = () => (
  <div>
    <Button size={SIZE_BTN.SMALL}>Small</Button>
    <Button>Mediun</Button>
    <Button size={SIZE_BTN.LARGE}>Large</Button>
    <Button size={SIZE_BTN.EXTRA_LARGE}>Extra Large</Button>
  </div>
);

export const SizesLight = SizesTemplate.bind({});

export const SizesDark = SizesTemplate.bind({});
SizesDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
export const DefaultDark = Template.bind({});
DefaultDark.args = {
  children: 'Default',
};
DefaultDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
  children: 'Disabled',
  disabled: true,
};
export const DisabledDark = Template.bind({});
DisabledDark.args = {
  children: 'Disabled',
  disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(THEMES.DARK)];

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

export const ClearInvertder = Template.bind({});
ClearInvertder.args = {
  children: 'ClearInvertder',
  theme: THEME_BTN.CLEAR_INVERTED,
};
export const ClearInvertderDark = Template.bind({});
ClearInvertderDark.args = {
  children: 'ClearInvertder',
  theme: THEME_BTN.CLEAR_INVERTED,
};
ClearInvertderDark.decorators = [ThemeDecorator(THEMES.DARK)];

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
