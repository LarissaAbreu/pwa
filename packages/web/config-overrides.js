const rewireStyledComponents = require('react-app-rewire-styled-components')

const override = (config, env) => {
  return rewireStyledComponents(config, env)
}

module.exports = override
