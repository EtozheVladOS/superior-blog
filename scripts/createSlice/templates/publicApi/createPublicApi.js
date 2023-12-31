const fs = require('fs/promises');
const resolveRoot = require('../../resolveRoot');
const firstCharUppercase = require('../../firstCharUppercase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUppercase(sliceName);
  const schemaName = `${sliceName}Schema`;
  const upperSchemaName = firstCharUppercase(schemaName);

  try {
    await fs.writeFile(
      resolveRoot('src', layer, componentName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${upperSchemaName} } from './model/types/${schemaName}';
`,
    );
  } catch (e) {
    console.log('Не удалось создать Public API');
  }
};
