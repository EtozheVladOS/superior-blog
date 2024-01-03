import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import MainPage from './MainPage';

export default {
  title: 'Pages/MainPage',
  component: MainPage,
} as ComponentMeta<typeof MainPage>;

const Template: ComponentStory<typeof MainPage> = () => <MainPage />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.decorators = [storeDecorator, ThemeDecorator(THEMES.DARK)];
