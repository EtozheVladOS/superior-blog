import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Avatar } from './Avatar';

export default {
  title: 'Shared/Avatar',
  component: Avatar,
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => (
  <Avatar
    src="https://avatars.dzeninfra.ru/get-zen_doc/3614701/pub_5ef7588786b0d9404c6ad81a_5ef759c509ec63125b322f98/scale_1200"
    {...args}
  />
);

export const AvatarLight = Template.bind({});

export const AvatarDark = Template.bind({});
AvatarDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const AvatarCustomSize = Template.bind({});
AvatarCustomSize.args = {
  size: 150,
};
