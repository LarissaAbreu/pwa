const rewireTypescript = require('react-app-rewire-typescript')

const override = (config, env) => rewireTypescript(config, env)

module.export = override
