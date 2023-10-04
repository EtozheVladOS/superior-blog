import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { ProfileCard } from './ProfileCard';

export default {
  title: 'Entities/ProfileCard',
  component: ProfileCard,
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const mockProfileData = {
  username: 'Testusername',
  firstname: 'Name',
  lastname: 'Last',
  age: 33,
  country: COUNTRY.Iceland,
  city: 'New-city',
  currency: CURRENCY.EUR,
};

export const ProfileCardLight = Template.bind({});
ProfileCardLight.args = { data: mockProfileData };

export const ProfileCardDark = Template.bind({});
ProfileCardDark.args = { data: mockProfileData };
ProfileCardDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const ProfileCardWithError = Template.bind({});
ProfileCardWithError.args = { error: 'testErr' };

export const ProfileCardisLoading = Template.bind({});
ProfileCardisLoading.args = { isLoading: true };
