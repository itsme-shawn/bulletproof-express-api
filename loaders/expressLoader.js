import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import api from '../api/index.js'

const expressLoader = (app) => {
  app.use(cookieParser())
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))

  app.use('/', api)
}

export default expressLoader
