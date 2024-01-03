import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import AboutPage from './AboutPage';

export default {
  title: 'Pages/AboutPage',
  component: AboutPage,
} as ComponentMeta<typeof AboutPage>;

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.decorators = [storeDecorator, ThemeDecorator(THEMES.DARK)];
