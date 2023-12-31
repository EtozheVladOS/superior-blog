const fs = require('fs/promises');
const resolveRoot = require('../../resolveRoot');
const firstCharUppercase = require('../../firstCharUppercase');
const componentTemplate = require('./componentTemplate');
const styleTemplate = require('./styleTemplate');
const storyTemplate = require('./storyTemplate');

module.exports = async (layer, sliceName) => {
  const resolveUiPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments);

  const createUiDir = async () => {
    try {
      await fs.mkdir(resolveUiPath());
    } catch (e) {
      console.log('Не удалось создать директорию UI');
    }
  };

  const createComponents = async () => {
    try {
      const componentName = firstCharUppercase(sliceName);
      const layerName = firstCharUppercase(layer);

      console.log(1);

      await fs.mkdir(resolveUiPath(componentName));

      console.log(2);

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName),
      );

      console.log(3);

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName),
      );

      console.log(4);

      await fs.writeFile(
        resolveUiPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(componentName, layerName),
      );
    } catch (e) {
      console.log('Не удалось создать файлы UI');
    }
  };

  await createUiDir();
  await createComponents();
};
