import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import UserService from '../../services/userService'

const userService = new UserService()

/*
  CREATE : POST
  READ : GET
  UPDATE : PATCH, PUT
  DELETE : DELETE

  GET : When you want to get something
  POST : When you want to create something completely new
  DELETE : When you want to remove something

  PATCH VS PUT
  PATCH : When you want to modify something patially
  PUT : When you want to overwrite EVERYTHING
*/

// '/users' 라우터
const router = express.Router()

// ROUTE: /users
router.get('/', async (req, res) => {
  const user = await userService.findUsers()

  res.send(user)
})

// ROUTE: /users
router.post('/', async (req, res) => {
  const { name, password } = req.body
  const user = await userService.createUser(name, password)

  res.send(`User with the name ${user.name} added to the DB`)
})

// ROUTE: /users/:id
router.get('/:id', async (req, res) => {
  const { id } = req.params
  const foundUser = await userService.findUserById(id)

  res.send(foundUser)
})

// ROUTE: /users/:id
router.delete('/:id', async (req, res) => {
  const { id } = req.params
  await userService.deleteUser(id)

  res.send(`User with the id ${id} deleted from the DB`)
})

// ROUTE: /users/:id
router.patch('/:id', async (req, res) => {
  const { id } = req.params
  const { name, password } = req.body
  const foundUser = await userService.findUserById(id)
  if (name) { foundUser.name = name }
  if (password) { foundUser.password = password }
  foundUser.save()

  res.send(foundUser)
})

export default router
