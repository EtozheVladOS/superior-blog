import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { CommentEntity } from '../../model/types/comment';
import { CommentList } from './CommentList';

export default {
  title: 'Entities/CommentList',
  component: CommentList,
} as ComponentMeta<typeof CommentList>;

const commentList: CommentEntity[] = [
  {
    id: '1',
    user: { id: '1', username: 'username 1' },
    text: 'test 1',
  },
  {
    id: '2',
    user: { id: '2', username: 'username 2' },
    text: 'test 2',
  },
];

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

export const Light = Template.bind({});
Light.args = { comments: commentList };

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
Dark.args = { comments: commentList };

export const NoneComments = Template.bind({});

export const IsLoading = Template.bind({});
IsLoading.args = { isLoading: true };
