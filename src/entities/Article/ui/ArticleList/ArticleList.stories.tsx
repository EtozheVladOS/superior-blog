import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { ArticleList } from './ArticleList';
import { Article, ArticleView } from '../../model/types/article';

export default {
  title: 'Entities/Article/ArticleList',
  component: ArticleList,
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

const mockArticle = {
  id: '1',
  title: 'IT news NEWS olds Olds',
  subtitle: 'New technologies in IT for 2022 year',
  img: 'https://cdn.theatlantic.com/thumbor/Z0bW9vInINLE5PD0optALlEnCic=/0x0:2000x1125/1600x900/media/img/mt/2022/05/Atl_UFO_gov_v1/original.png',
  views: 771,
  creationDate: '12.09.2023',
  type: [
    'IT',
    'SCIENCE',
    'TEST_NAME',
  ],
  user: {
    id: '1',
    username: 'admin',
    avatar: 'https://avatars.dzeninfra.ru/get-zen_doc/3614701/pub_5ef7588786b0d9404c6ad81a_5ef759c509ec63125b322f98/scale_1200',
  },
  blocks: [
    {
      id: '1',
      type: 'TEXT',
      paragrafs: [
        'Здравствуйте, уважаемые начинающие разработчики!',
        'Хочу написать серию статей о том, как безболезненно стать JS разработчиком. В моих планах научить вас самым популярным и полезным инструментам в JS и подготовить к выбору направления бэка или фронта. Про эти направления также собираюсь писать обучающие статьи, но всё по порядку. В рамках этого курса, я хочу познакомить вас с "ванильным" JS - то есть с базовым функционалом языка, не вдаваясь во всяческие фреймворки.',
        'Ко мне довольно часто обращаются друзья, знакомые, кто хочет научиться программировать, а времени на всех у меня нет. Вот я и решил провести обучение в таком вот онлайн формате, к которому все легко смогут подключиться. Надеюсь, такой формат будет полезен и остальным пользователям Хабра.',
      ],
    },
    {
      id: '2',
      type: 'CODE',
      code: "const name = 'Boris';\n\nlet age = 99;\n\n// Изменение данных\n\nage = 19;",
    },
    {
      id: '3',
      type: 'TEXT',
      title: 'Вступление',
      paragrafs: [
        'JavaScript - язык программирования!',
        'По некоторым исследованиям, кстати, самый популярный. И уж точно один из самых простых для входа в IT.',
        'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам и дает большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего мира, кто сейчас читает эту статью.',
      ],
    },
    {
      id: '4',
      type: 'IMAGE',
      title: 'Должно получиться что-то подобное',
      src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
    },
    {
      id: '5',
      type: 'CODE',
      code: '<!DOCTYPE html>\n <html lang="en">\n  <head>\n     <meta charset="UTF-8" />\n     <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n     <title>Document</title>\n   </head>\n\n   <body>\n\n   </body>\n </html>\n',
    },
    {
      id: '6',
      type: 'TEXT',
      title: 'Не вступление',
      paragrafs: [
        'JavaScript - язык программирования!',
        'По некоторым исследованиям, кстати, самый популярный. И уж точно один из самых простых для входа в IT.',
        'В целом, веб-разработка - то место, на мой взгляд, которое весьма лояльно относится к новичкам и дает большое количество возможностей. Так что возрадуйтесь, дорогие молодые разработчики со всего мира, кто сейчас читает эту статью.',
      ],
    },
    {
      id: '7',
      type: 'IMAGE',
      title: 'Не должно получиться что-то подобное',
      src: 'https://habrastorage.org/r/w1560/getpro/habr/upload_files/1bf/1f6/3e6/1bf1f63e680625c26877bb2d20f9f651.png',
    },
    {
      id: '8',
      type: 'TEXT',
      paragrafs: [
        'Здравствуйте, уважаемые начинающие разработчики!',
        'Хочу написать серию статей о том, как безболезненно стать JS разработчиком. В моих планах научить вас самым популярным и полезным инструментам в JS и подготовить к выбору направления бэка или фронта. Про эти направления также собираюсь писать обучающие статьи, но всё по порядку. В рамках этого курса, я хочу познакомить вас с "ванильным" JS - то есть с базовым функционалом языка, не вдаваясь во всяческие фреймворки.',
        'Ко мне довольно часто обращаются друзья, знакомые, кто хочет научиться программировать, а времени на всех у меня нет. Вот я и решил провести обучение в таком вот онлайн формате, к которому все легко смогут подключиться. Надеюсь, такой формат будет полезен и остальным пользователям Хабра.',
      ],
    },
  ],
} as Article;
const articles = new Array(16).fill(0).map((_, idx) => ({ ...mockArticle, id: String(idx) }));

export const LightSmall = Template.bind({});
LightSmall.args = {
  articles,
};

export const LightBig = Template.bind({});
LightBig.args = {
  articles,
  view: ArticleView.BIG,
};

export const LoadingSmall = Template.bind({});
LoadingSmall.args = {
  articles,
  isLoading: true,
};

export const LoadingBig = Template.bind({});
LoadingBig.args = {
  articles,
  isLoading: true,
  view: ArticleView.BIG,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
Dark.args = {
  articles,
};
