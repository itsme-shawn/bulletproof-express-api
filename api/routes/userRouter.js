import express from 'express'

const router = express.Router()

router.get('/hi', (req, res) => {
  res.send('hihihi')
})

export default router
