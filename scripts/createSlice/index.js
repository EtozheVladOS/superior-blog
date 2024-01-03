const createTemplate = require('./templates/createTemplate');

const layer = process.argv[2];
const sliceName = process.argv[3];

const layerList = ['features', 'entities', 'pages'];

if (!layer || !layerList.includes(layer)) {
  const err = `Укажите слой ${layerList.join(' или ')}!`;
  throw new Error(err);
}

if (!sliceName) {
  throw new Error('Укажите название слайса');
}

createTemplate(layer, sliceName);
