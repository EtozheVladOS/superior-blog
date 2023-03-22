import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Modal as ModalComponent } from './Modal';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';

export default {
  title: 'Shared/Modal',
  component: ModalComponent,
} as ComponentMeta<typeof ModalComponent>;

const Template: ComponentStory<typeof ModalComponent> = (args) => (
  <ModalComponent
    visible
    {...args}
  >
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum ducimus nostrum ullam vitae nesciunt! Odit asperiores ipsa minus possimus mollitia tempora similique ea qui enim odio sequi libero, voluptatem beatae quos, facilis aliquid perspiciatis explicabo! Quam porro, maiores cupiditate nostrum laudantium iure. Iure eaque expedita, quod iste reiciendis unde eos dolorem tempora nulla, molestias laborum autem exercitationem impedit laudantium eius rem doloribus? Optio distinctio ullam dolor magnam eveniet dolorem ut, voluptatum tenetur autem mollitia molestias sed laborum magni! Exercitationem quos, voluptates nulla fuga corporis ducimus? Placeat vitae itaque, quasi delectus debitis doloribus, quidem rem neque est, iste facere! Repellat, quod!
  </ModalComponent>
);

export const Modal = Template.bind({});
export const ModalDark = Template.bind({});
ModalDark.decorators = [ThemeDecorator(THEMES.DARK)];
