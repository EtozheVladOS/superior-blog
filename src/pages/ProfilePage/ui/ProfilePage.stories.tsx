import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/PageUser',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const profileStoreDecorator = StoreDecorator(
  {
    profile: {
      data: {
        firstname: '',
        lastname: '',
      },
    },
  },
);

export const Light = Template.bind({});
Light.decorators = [profileStoreDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK), profileStoreDecorator];
