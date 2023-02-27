import {Router}  from 'express'
import User      from "../models/UserModel.js";
const userRouter = Router()

userRouter.post('/register', async(req, res) => {
  // we have the possibility to put the encryption here or in the model

  try {
    // const password = req.body.password
    // TODO: add salt and hash password from bcrypt
    // req.body.password = hashed password
    const newUser= new User(req.body)
    await newUser.save()
    res.status(200).json({
      message:"user created successfully",success: true
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message:"error creating user",success: false, error
    })
  }
})


userRouter.post('/login', (req, res) => {

})

export default userRouter