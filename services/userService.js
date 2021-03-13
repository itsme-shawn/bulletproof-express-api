/* eslint-disable class-methods-use-this */
import User from '../models/userModel'

class UserService {
  async createUser(name, password) {
    const user = await User.create({ name, password })
    return user
  }

  async findUsers() {
    const user = await User.find({})
    return user
  }

  async findUserById(id) {
    const user = await User.findById(id)
    return user
  }

  async deleteUser(id) {
    await User.findByIdAndDelete(id)
  }
}

export default UserService
