/* eslint-disable global-require */
import express from 'express'
import config from './config'

function startServer() {
  const app = express()

  require('./loaders').default(app)

  app.listen(config.PORT, () => console.log(`👌Express Server Running on PORT ${config.PORT}`))
}

startServer()
