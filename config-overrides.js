const rewireStyledComponents = require('react-app-rewire-styled-components')

const override = (config, env) => rewireStyledComponents(config, env)

module.exports = override
