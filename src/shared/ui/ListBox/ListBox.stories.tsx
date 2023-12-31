import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ListBox, ListBoxItem } from './ListBox';

export default {
  title: 'Shared/ListBox',
  component: ListBox,
  decorators: [
    (Story) => <div style={{ padding: '33%' }}><Story /></div>,
  ],
} as ComponentMeta<typeof ListBox>;

const selectedValue = 'Kenton Towne';

const people: ListBoxItem[] = [
  { value: 'Durward Reynolds', content: 'Durward Reynolds' },
  { value: selectedValue, content: 'Kenton Towne Towne Towne' },
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

export const TopRight = Template.bind({});
TopRight.args = {
  dropdowmDirection: 'top-right',
};
export const TopLeft = Template.bind({});
TopLeft.args = {
  dropdowmDirection: 'top-left',
};
export const BottomRight = Template.bind({});
BottomRight.args = {
  dropdowmDirection: 'bottom-right',
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
  dropdowmDirection: 'bottom-left',
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
  dropdowmDirection: 'top-right',
};
