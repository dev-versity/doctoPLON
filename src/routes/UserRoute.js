import {Router}  from 'express'
import User      from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import login from "../controllers/UserController.js";

// 1 -crypte password
// 2 -hache password
const userRouter = Router()

userRouter.post('/register', async(req, res) => {
 

  try {

    const userExist = await User.findOne({email:req.body.email})
    if (userExist){
      return res.status(200).json({message:"user already exists", success: false})
    }

    const password = req.body.password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    req.body.password = hashedPassword;
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


userRouter.post('/login',login )

export default userRouter