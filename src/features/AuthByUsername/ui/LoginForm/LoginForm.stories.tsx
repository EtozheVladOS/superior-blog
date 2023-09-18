import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import LoginForm from './LoginForm';

export default {
  title: 'Features/LoginForm',
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = () => <LoginForm onSuccess={() => undefined} />;

export const LoginFormLight = Template.bind({});
export const LoginFormDark = Template.bind({});
export const LoginFormWithError = Template.bind({});
export const LoginFormisLoading = Template.bind({});

const loginStoreDecorator = StoreDecorator(
  {
    loginForm:
      { username: 'admin', password: 'admin' },
  },
);

LoginFormLight.decorators = [loginStoreDecorator];
LoginFormDark.decorators = [ThemeDecorator(THEMES.DARK), loginStoreDecorator];
LoginFormWithError.decorators = [
  StoreDecorator(
    {
      loginForm:
        { error: 'error example' },
    },
  ),
];
LoginFormisLoading.decorators = [
  StoreDecorator(
    {
      loginForm:
        { isLoading: true },
    },
  ),
];
