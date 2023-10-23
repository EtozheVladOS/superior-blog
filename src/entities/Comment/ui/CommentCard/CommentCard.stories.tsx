import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { CommentEntity } from '../../model/types/comment';
import { CommentCard } from './CommentCard';

export default {
  title: 'Entities/CommentCard',
  component: CommentCard,
} as ComponentMeta<typeof CommentCard>;

const comment: CommentEntity = {
  id: '1',
  user: { id: '1', username: 'username 1' },
  text: 'test 1',
};

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = { comment };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
Dark.args = { comment };

export const IsLoading = Template.bind({});
IsLoading.args = { isLoading: true };
