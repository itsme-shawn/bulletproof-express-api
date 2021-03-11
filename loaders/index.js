import expressLoader from './expressLoader.js'

// 나중에 DB loader 가 들어가면 비동기로 처리해야함
const loaders = (app) => {
  console.log('loader start')
  expressLoader(app)
  console.log('loader end')
}

export default loaders
