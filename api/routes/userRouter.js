import express from 'express'
import { v4 as uuidv4 } from 'uuid'
import fakeUsers from '../../models/fakeUserDB'

let users = fakeUsers

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

// /users
router.get('/', (req, res) => {
  res.send(users)
})

// /users
router.post('/', (req, res) => {
  console.log(req.body)
  const user = req.body

  users.push({ id: uuidv4(), ...user }) // ES6 spread 연산자

  res.send(`User with the name ${user.firstName} added to the DB`)
})

// /users/:id
router.get('/:id', (req, res) => {
  const { id } = req.params

  const foundUser = users.find((user) => user.id === id)
  // Array.prototype.find() : 콜백함수에서 true 를 리턴하는 첫 번째 요소를 리턴

  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params

  users = users.filter((user) => user.id !== id)
  // Array.prototype.filter() : 콜백함수에서 true 리턴하는 모든 요소를 모아 새로운 배열로 반환

  res.send(`User with the id ${id} deleted from the DB`)
})

router.patch('/:id', (req, res) => {
  const { id } = req.params
  const { firstName, lastName, age } = req.body

  const foundUser = users.find((user) => user.id === id)

  if (firstName) { foundUser.firstName = firstName }

  if (lastName) { foundUser.lastName = lastName }

  if (age) { foundUser.age = age }

  res.send(`User with the id ${id} has been updated`)
})

export default router
