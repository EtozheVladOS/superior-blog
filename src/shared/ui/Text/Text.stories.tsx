import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text, TEXT_THEMES } from './Text';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';

export default {
  title: 'Shared/Text',
  component: Text,
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Title title',
  text: 'Text text text text',
};
export const DefaultDark = Template.bind({});
DefaultDark.args = {
  title: 'Title title',
  text: 'Text text text text',
};
DefaultDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
  title: 'Title title',
};
export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
  title: 'Title title',
};
OnlyTitleDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
  text: 'Text text text text',
};
export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
  text: 'Text text text text',
};
OnlyTextDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const ErrorText = Template.bind({});
ErrorText.args = {
  title: 'Title title',
  text: 'Text text text text',
  theme: TEXT_THEMES.ERROR,
};
export const ErrorTextDark = Template.bind({});
ErrorTextDark.args = {
  title: 'Title title',
  text: 'Text text text text',
  theme: TEXT_THEMES.ERROR,
};
ErrorTextDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const SmallTextSize = Template.bind({});
SmallTextSize.args = {
  title: 'Title title',
  text: 'Text text text text',
  size: 'small',
};
export const LargeTextSize = Template.bind({});
LargeTextSize.args = {
  title: 'Title title',
  text: 'Text text text text',
  size: 'large',
};
