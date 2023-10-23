import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import AddCommentForm from './AddCommentForm';

export default {
  title: 'Features/AddCommentForm',
  component: AddCommentForm,
} as ComponentMeta<typeof AddCommentForm>;

const Template: ComponentStory<typeof AddCommentForm> = () => <AddCommentForm onSendComment={action('onSendComment')} />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK), storeDecorator];
