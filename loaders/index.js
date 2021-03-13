import expressLoader from './expressLoader'
import mongoLoader from './mongoLoader'

const loaders = (app) => {
  console.log('loader start')
  mongoLoader()
  expressLoader(app)
  console.log('loader end')
}

export default loaders
