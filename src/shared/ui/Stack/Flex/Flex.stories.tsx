import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Flex } from './Flex';

export default {
  title: 'Shared/Flex',
  component: Flex,
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => (
  <Flex {...args}>
    <div>flex 1</div>
    <div>flex 2</div>
    <div>flex 3</div>
    <div>flex 4</div>
  </Flex>
);

export const Row = Template.bind({});

export const RowGap4 = Template.bind({});
RowGap4.args = {
  gap: '4',
};

export const RowGap8 = Template.bind({});
RowGap8.args = {
  gap: '8',
};

export const RowGap12 = Template.bind({});
RowGap12.args = {
  gap: '12',
};

export const RowGap16 = Template.bind({});
RowGap16.args = {
  gap: '16',
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
  gap: '32',
};

export const Column = Template.bind({});
Column.args = {
  direction: 'column',
};

export const ColumnGap12 = Template.bind({});
ColumnGap12.args = {
  direction: 'column',
  gap: '12',
};
