const fs = require('fs/promises');
const resolveRoot = require('../../resolveRoot');
const firstCharUppercase = require('../../firstCharUppercase');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');

module.exports = async (layer, sliceName) => {
  const upperSliceName = firstCharUppercase(sliceName);

  const resolveModelPath = (...segents) => resolveRoot(
    'src',
    layer,
    upperSliceName,
    'model',
    ...segents,
  );

  const createModelDirecotries = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log('Не удалось создать model сегмент', e);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать Redux slice');
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${upperSliceName}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.log('Не удалось создать тип схемы');
    }
  };

  await createModelDirecotries();
  await createReduxSlice();
  await createSchemaType();
};
