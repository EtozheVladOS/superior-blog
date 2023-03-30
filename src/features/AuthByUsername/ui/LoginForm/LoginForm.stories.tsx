import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { LoginForm } from './LoginForm';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm />;

export const LoginFormLight = Template.bind({});
export const LoginFormDark = Template.bind({});
LoginFormDark.decorators = [ThemeDecorator(THEMES.DARK)];
