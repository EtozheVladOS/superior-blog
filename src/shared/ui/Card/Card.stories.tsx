import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Text } from '@/shared/ui/Text/Text';
import { Card } from './Card';

export default {
  title: 'Shared/Card',
  component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
  children: <Text text="Test text" />,
};

export const Dark = Template.bind({});
Dark.args = {
  children: <Text text="Test text" />,
};
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
