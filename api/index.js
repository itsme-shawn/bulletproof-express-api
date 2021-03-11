import express from 'express'
import userRouter from './routes/userRouter.js'

const router = express.Router()

router.use('/users', userRouter)

export default router
