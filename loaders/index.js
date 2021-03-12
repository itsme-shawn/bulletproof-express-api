import expressLoader from './expressLoader'
import mongoLoader from './mongoLoader'

const loaders = async (app) => {
  console.log('loader start')
  await mongoLoader()
  expressLoader(app)
  console.log('loader end')
}

export default loaders
