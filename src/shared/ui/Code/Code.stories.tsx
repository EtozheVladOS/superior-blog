import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { THEMES } from '@/app/providers/ThemeProvider/lib/ThemesContext';
import { Code } from './Code';

export default {
  title: 'Shared/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

const children = '<!DOCTYPE html>\n'
  + ' <html lang="en">\n'
  + '   <head>\n'
  + '     <meta charset="UTF-8" />\n'
  + '     <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n'
  + '     <title>Document</title>\n'
  + '   </head>\n\n'
  + '   <body>\n\n'
  + '   </body>\n'
  + ' </html>\n';

export const CodeLight = Template.bind({});
CodeLight.args = { children };

export const CodeDark = Template.bind({});
CodeDark.args = { children };
CodeDark.decorators = [ThemeDecorator(THEMES.DARK)];

export const CodeAzure = Template.bind({});
CodeAzure.args = { children };
CodeAzure.decorators = [ThemeDecorator(THEMES.AZURE)];
