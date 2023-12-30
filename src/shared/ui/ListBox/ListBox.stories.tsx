import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ListBox, ListBoxItem } from './ListBox';

export default {
  title: 'Shared/ListBox',
  component: ListBox,
} as ComponentMeta<typeof ListBox>;

const selectedValue = 'Kenton Towne';

const people: ListBoxItem[] = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: selectedValue, content: 'Kenton Towne' },
  { value: 'Therese Wunsch', content: 'Therese Wunsch' },
  { value: 'Benedict Kessler', content: 'Benedict Kessler', disabled: true },
  { value: 'Katelyn Rohan', content: 'Katelyn Rohan' },
];

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox
    {...args}
    placeholder="Select person"
    items={people}
  />
);

export const Light = Template.bind({});

export const LightSelected = Template.bind({});
LightSelected.args = {
  value: selectedValue,
};

export const LightDropdownTop = Template.bind({});
LightDropdownTop.args = {
  dropdowmDirection: 'top',
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];

export const DarkSelected = Template.bind({});
DarkSelected.decorators = [ThemeDecorator(THEMES.DARK)];
DarkSelected.args = {
  value: selectedValue,
};

export const DarktDropdownTop = Template.bind({});
DarktDropdownTop.decorators = [ThemeDecorator(THEMES.DARK)];
DarktDropdownTop.args = {
  dropdowmDirection: 'top',
};
