import express from 'express'
import config from './config'

async function startServer() {
  const app = express()

  await require('./loaders').default(app)

  app.listen(config.PORT, () => console.log(`👌Express Server Running on PORT ${config.PORT}`))
}

startServer()
