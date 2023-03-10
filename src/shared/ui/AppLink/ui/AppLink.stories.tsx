import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { AppLink, APP_LINK_THEME } from './AppLink';

export default {
  title: 'Shared/AppLink',
  component: AppLink,
  args: {
    to: '/',
  },
} as ComponentMeta<typeof AppLink>;

const Template: ComponentStory<typeof AppLink> = (args) => (
  <AppLink
    {...args}
  />
);

export const PrimaryLight = Template.bind({});
PrimaryLight.args = {
  children: 'PrimaryLight',
};
export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  children: 'PrimaryDark',
};
PrimaryDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const InvertedLight = Template.bind({});
InvertedLight.args = {
  children: 'InvertedLight',
  theme: APP_LINK_THEME.INVERTED,
};
export const InvertedDark = Template.bind({});
InvertedDark.args = {
  children: 'InvertedDark',
  theme: APP_LINK_THEME.INVERTED,
};
InvertedDark.decorators = [ThemeDecorator(THEMES.DARK)];
