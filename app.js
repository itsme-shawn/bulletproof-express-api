import express from 'express'
import loaders from './loaders/index.js'

const app = express()
const PORT = 5000

loaders(app) // 나중에 DB loader 가 들어가면 비동기로 처리해야함

app.listen(PORT, () => console.log(`👌Express Server Running on PORT ${PORT}`))
