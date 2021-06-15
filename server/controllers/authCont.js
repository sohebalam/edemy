import User from "../models/userModel"

import { hashPassword, comparePassword } from "../utils/auth"

export const register = async (req, res) => {
  try {
    const { email, password, name } = req.body
    if (!name || !email || !password) {
      return res.status(400).send("field is required")
    }
    let userExist = await User.findOne({ email }).exec()
    if (userExist) return res.status(400).send("Email is taken")

    const hashedPassword = await hashPassword(password)

    const user = new User({
      name,
      email,
      password: hashedPassword,
    })
    await user.save()
    console.log("saveduser", user)
    return res.json({ ok: true })
  } catch (error) {
    console.log(error)
    return res.status(400).json("Error.try again")
  }
}
