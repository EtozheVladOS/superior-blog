import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Select, SelectOption } from './Select';

export default {
  title: 'Shared/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <Select
    label="Field>"
    {...args}
  />
);

const mockOptions: SelectOption[] = [
  {
    value: 'Test 1',
    name: 'Test 1',
  },
  {
    value: 'Test 2 Test 2 Test 2',
    name: 'Test 2 Test 2 Test 2',
  },
  {
    value: 'Test 3 Test 3',
    name: 'Test 3 Test 3',
  },
];

export const SelectHorizontalLight = Template.bind({});
SelectHorizontalLight.args = {
  options: mockOptions,
};

export const SelectHorizontalDark = Template.bind({});
SelectHorizontalDark.decorators = [ThemeDecorator(THEMES.DARK)];
SelectHorizontalDark.args = {
  options: mockOptions,
};

export const SelectVerticalLight = Template.bind({});
SelectVerticalLight.args = {
  align: 'vertical',
  options: mockOptions,
};

export const SelectVerticalDark = Template.bind({});
SelectVerticalDark.args = {
  align: 'vertical',
  options: mockOptions,
};
SelectVerticalDark.decorators = [ThemeDecorator(THEMES.DARK)];
