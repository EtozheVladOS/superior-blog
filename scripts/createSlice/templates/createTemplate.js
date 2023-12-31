const fs = require('fs/promises');
const resolveRoot = require('../resolveRoot');
const firstCharUppercase = require('../firstCharUppercase');
const createUi = require('./ui/createUi');
const createModel = require('./model/createModel');
const createPublicApi = require('./publicApi/createPublicApi');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, firstCharUppercase(sliceName)));
  } catch (e) {
    console.log('Не удалось создать директорию для слайса');
  }

  await createUi(layer, sliceName);
  await createModel(layer, sliceName);
  await createPublicApi(layer, sliceName);
};
