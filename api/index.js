import express from 'express'
import userRouter from './routes/userRouter'

const router = express.Router()

router.use('/users', userRouter)

router.get('', (req, res) => {
  res.send('This is Home!')
})

export default router
