const path = require('path')

// list of supported values for NODE_ENV
const envs = ['development', 'production']

const env = process.env.NODE_ENV || 'development'

if (!envs.includes(env)) {
  throw new Error(`Unsupported, NODE_ENV = ${env}`)
}

const getConfig = module => require(path.resolve(__dirname, 'config', module))

exports.default = getConfig(env)
