import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ArticleDetails } from './ArticleDetails';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ArticleBlockType, ArticleType } from '@/entities/Article/model/types/article';

export default {
  title: 'entities/ArticleDetails',
  component: ArticleDetails,
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;

const articleStoreDecorator = StoreDecorator({
  articleDeatils: {
    data: {
      id: '1',
      title: 'IT news',
      subtitle: 'New technologies in IT for 2022 year',
      img: 'https://cdn.theatlantic.com/thumbor/Z0bW9vInINLE5PD0optALlEnCic=/0x0:2000x1125/1600x900/media/img/mt/2022/05/Atl_UFO_gov_v1/original.png',
      views: 771,
      crationDate: '12.09.2023',
      type: [ArticleType.IT, ArticleType.SCIENCE],
      blocks: [
        {
          id: '1',
          type: ArticleBlockType.TEXT,
          title: 'Вступление',
          paragrafs: [
            'Здравствуйте, уважаемые начинающие разработчики!',
            'Хочу написать серию статей о том, как безболезненно стать JS разработчиком. В моих планах научить вас самым популярным и полезным инструментам в JS и подготовить к выбору направления бэка или фронта. Про эти направления также собираюсь писать обучающие статьи, но всё по порядку. В рамках этого курса, я хочу познакомить вас с "ванильным" JS - то есть с базовым функционалом языка, не вдаваясь во всяческие фреймворки.',
            'Ко мне довольно часто обращаются друзья, знакомые, кто хочет научиться программировать, а времени на всех у меня нет. Вот я и решил провести обучение в таком вот онлайн формате, к которому все легко смогут подключиться. Надеюсь, такой формат будет полезен и остальным пользователям Хабра.',
          ],
        },
        {
          id: '2',
          type: ArticleBlockType.CODE,
          code: "const name = 'Boris';\n\nlet age = 99;\n\n// Изменение данных\n\nage = 19;",
        },
        {
          id: '3',
          type: ArticleBlockType.IMAGE,
          title: 'Должно получиться что-то подобное',
          src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
        },
      ],
    },
  },
});

export const Light = Template.bind({});
Light.decorators = [articleStoreDecorator];

export const Dark = Template.bind({});
Dark.decorators = [articleStoreDecorator, ThemeDecorator(THEMES.DARK)];

export const Loading = Template.bind({});
Loading.decorators = [StoreDecorator({
  articleDeatils: {
    isLoading: true,
  },
})];

export const Error = Template.bind({});
Error.decorators = [StoreDecorator({
  articleDeatils: {
    error: 'test',
  },
})];
