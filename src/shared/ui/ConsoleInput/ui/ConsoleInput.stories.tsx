import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ConsoleInput } from './ConsoleInput';

export default {
  title: 'Shared/ConsoleInput',
  component: ConsoleInput,
} as ComponentMeta<typeof ConsoleInput>;

const Template: ComponentStory<typeof ConsoleInput> = (args) => (
  <ConsoleInput
    placeholder="Text>"
    autoFocus
    {...args}
  />
);

export const ConsoleInputLight = Template.bind({});
export const ConsoleInputDark = Template.bind({});
ConsoleInputDark.decorators = [ThemeDecorator(THEMES.DARK)];
