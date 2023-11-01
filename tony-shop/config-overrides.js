const { aliasWebpack, aliasJest } = require('react-app-alias');

const aliasMap = {
  '@assets': 'src/assets',
  '@atoms': 'src/atoms',
  '@hooks': 'src/hooks',
  '@molecules': 'src/molecules',
  '@redux-toolkit': 'src/redux-toolkit',
  '@services': 'src/services',
  '@root': 'src'
};

const options = {
  alias: aliasMap
};

module.exports = aliasWebpack(options);
module.exports.jest = aliasJest(options);
