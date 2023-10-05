import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { Sidebar } from './Sidebar';

export default {
  title: 'Widgets/Sidebar',
  component: Sidebar,
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => (
  <Sidebar
    {...args}
  />
);

const authStoreDecorator = StoreDecorator({
  user: { authData: {} },
});

export const Light = Template.bind({});
Light.decorators = [authStoreDecorator];

export const Dark = Template.bind({});
Dark.decorators = [
  ThemeDecorator(THEMES.DARK),
  authStoreDecorator,
];

export const NoAuth = Template.bind({});
NoAuth.decorators = [
  StoreDecorator({
    user: { authData: undefined },
  }),
];
