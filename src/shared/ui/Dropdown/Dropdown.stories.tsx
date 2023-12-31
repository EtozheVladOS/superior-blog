import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Button } from '../Button';
import { Dropdown } from './Dropdown';

export default {
  title: 'Shared/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

// SAME AS LISTBOX

export const Light = Template.bind({});
Light.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      contnent: 'First',
    },
    {
      contnent: 'Second',
    },
    {
      contnent: 'Third',
    },
  ],
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
Dark.args = {
  trigger: <Button>Open</Button>,
  items: [
    {
      contnent: 'First',
    },
    {
      contnent: 'Second',
    },
    {
      contnent: 'Third',
    },
  ],
};
