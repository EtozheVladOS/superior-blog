import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/ProfilePage',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args: any) => (
  <ProfilePage
    {...args}
  />
);

const profileStoreDecorator = StoreDecorator({});

export const Light = Template.bind({});
Light.decorators = [profileStoreDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK), profileStoreDecorator];
