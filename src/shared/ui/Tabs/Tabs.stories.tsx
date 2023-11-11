import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Tabs } from './Tabs';

export default {
  title: 'Shared/Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const tabList = [
  {
    value: 'value1',
    content: 'content 1',
  },
  {
    value: 'value2',
    content: 'content 2',
  },
  {
    value: 'value3',
    content: 'content 3',
  },
];

export const Light = Template.bind({});
Light.args = {
  tabList,
  value: 'value2',
  onTabChange: action('onTabChange'),
};

export const Dark = Template.bind({});
Dark.args = {
  tabList,
  value: 'value2',
  onTabChange: action('onTabChange'),
};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
