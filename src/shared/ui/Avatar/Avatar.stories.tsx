import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Avatar } from './Avatar';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const AvatarLight = Template.bind({});

export const AvatarDark = Template.bind({});
AvatarDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const AvatarCustomSize = Template.bind({});
AvatarCustomSize.args = {
  size: 150,
};
