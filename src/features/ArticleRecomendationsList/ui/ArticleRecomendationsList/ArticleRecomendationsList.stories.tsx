import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ArticleRecomendationsList } from './ArticleRecomendationsList';

export default {
  title: 'Features/ArticleRecomendationsList',
  component: ArticleRecomendationsList,
} as ComponentMeta<typeof ArticleRecomendationsList>;

const Template: ComponentStory<typeof ArticleRecomendationsList> = (args) => <ArticleRecomendationsList {...args} />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
