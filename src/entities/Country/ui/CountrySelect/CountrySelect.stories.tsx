import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { CountrySelect } from './CountrySelect';

export default {
  title: 'Entities/CountrySelect',
  component: CountrySelect,
} as ComponentMeta<typeof CountrySelect>;

const Template: ComponentStory<typeof CountrySelect> = (args) => (
  <CountrySelect {...args} />
);

export const CountrySelectHorizontalLight = Template.bind({});

export const CountrySelectHorizontalDark = Template.bind({});
CountrySelectHorizontalDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const CountrySelectVerticalLight = Template.bind({});
CountrySelectVerticalLight.args = {
  align: 'vertical',
};

export const CountrySelectVerticalDark = Template.bind({});
CountrySelectVerticalDark.args = {
  align: 'vertical',
};
CountrySelectVerticalDark.decorators = [ThemeDecorator(THEMES.DARK)];
