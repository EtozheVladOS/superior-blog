import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Skeleton } from './Skeleton';

export default {
  title: 'Shared/Skeleton',
  component: Skeleton,
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => (
  <Skeleton
    {...args}
  />
);

export const Light = Template.bind({});
Light.args = {
  width: '100%',
  height: 140,
};

export const Dark = Template.bind({});
Dark.decorators = [ThemeDecorator(THEMES.DARK)];
Dark.args = {
  width: '100%',
  height: 140,
};

export const Azure = Template.bind({});
Azure.decorators = [ThemeDecorator(THEMES.AZURE)];
Azure.args = {
  width: '100%',
  height: 140,
};

export const RoundLight = Template.bind({});
RoundLight.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};

export const RoundDark = Template.bind({});
RoundDark.decorators = [ThemeDecorator(THEMES.DARK)];
RoundDark.args = {
  borderRadius: '50%',
  width: 100,
  height: 100,
};
