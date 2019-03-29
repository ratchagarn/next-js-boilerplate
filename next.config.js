const path = require('path')

const withBaseDir = (name) => path.join(__dirname, name)

module.exports = {
  webpack (config, options) {
    const newAliasPath = {
      '<components>': withBaseDir('components'),
      '<config>': withBaseDir('config'),
      '<helpers>': withBaseDir('helpers'),
      '<layouts>': withBaseDir('layouts'),
      '<hooks>': withBaseDir('hooks'),
    }

    config.resolve.alias = Object.assign(config.resolve.alias, newAliasPath)

    return config
  }
}
