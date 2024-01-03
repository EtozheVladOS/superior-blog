import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { EditableProfileCard } from './EditableProfileCard';

export default {
  title: 'Features/EditableProfileCard',
  component: EditableProfileCard,
} as ComponentMeta<typeof EditableProfileCard>;

const Template: ComponentStory<typeof EditableProfileCard> = (args) => <EditableProfileCard {...args} />;

const storeDecorator = StoreDecorator({});

export const Light = Template.bind({});

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
