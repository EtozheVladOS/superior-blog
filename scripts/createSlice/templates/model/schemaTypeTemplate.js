const firstCharUppercase = require('../../firstCharUppercase');

module.exports = (sliceName) => {
  const upperSliceName = firstCharUppercase(sliceName);

  return `export interface ${upperSliceName}Schema {

}
`;
};
