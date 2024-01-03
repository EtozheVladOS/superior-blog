import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'Pages/ArticlesPage',
  component: ArticlesPage,
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = () => <ArticlesPage />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.decorators = [storeDecorator, ThemeDecorator(THEMES.DARK)];
