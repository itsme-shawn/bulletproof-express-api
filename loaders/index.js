import expressLoader from './expressLoader'
import mongoLoader from './mongoLoader'

const loaders = (app) => {
  console.log('loader start')
  mongoLoader()
  expressLoader(app)
}

export default loaders
