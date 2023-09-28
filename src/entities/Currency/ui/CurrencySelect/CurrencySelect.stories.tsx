import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { CurrencySelect } from './CurrencySelect';

export default {
  title: 'Entities/CurrencySelect',
  component: CurrencySelect,
} as ComponentMeta<typeof CurrencySelect>;

const Template: ComponentStory<typeof CurrencySelect> = (args) => (
  <CurrencySelect {...args} />
);

export const CurrencySelectHorizontalLight = Template.bind({});

export const CurrencySelectHorizontalDark = Template.bind({});
CurrencySelectHorizontalDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const CurrencySelectVerticalLight = Template.bind({});
CurrencySelectVerticalLight.args = {
  align: 'vertical',
};

export const CurrencySelectVerticalDark = Template.bind({});
CurrencySelectVerticalDark.args = {
  align: 'vertical',
};
CurrencySelectVerticalDark.decorators = [ThemeDecorator(THEMES.DARK)];
