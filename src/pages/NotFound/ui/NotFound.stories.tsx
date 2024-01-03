import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { NotFound } from './NotFound';

export default {
  title: 'Pages/NotFound',
  component: NotFound,
} as ComponentMeta<typeof NotFound>;

const Template: ComponentStory<typeof NotFound> = (args: any) => (
  <NotFound
    {...args}
  />
);

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [storeDecorator];

export const Dark = Template.bind({});
Dark.decorators = [storeDecorator, ThemeDecorator(THEMES.DARK)];
