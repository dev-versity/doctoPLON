import {express, Router} from 'express'
import {register,login} from "../controllers/userController"
const userRouter = Router()

userRouter.post('/register', register)

userRouter.post('/login', (req, res) => {
    // controller userControllers
})