import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import ProfilePage from './ProfilePage';

export default {
  title: 'Pages/PageUser',
  component: ProfilePage,
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />;

const mockProfileData = {
  username: 'Testusername',
  firstname: 'Name',
  lastname: 'Last',
  age: 33,
  country: COUNTRY.Iceland,
  city: 'New-city',
  currency: CURRENCY.EUR,
};

const profileStoreDecorator = StoreDecorator(
  {
    profile: {
      data: mockProfileData,
      editableForm: mockProfileData,
    },
  },
);

export const Light = Template.bind({});
Light.decorators = [profileStoreDecorator];

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK), profileStoreDecorator];
