import { Router }          from "express";
import { login, register } from "../controllers/userController.js";

// 1 -crypte password
// 2 -hache password
const userRouter = Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

export default userRouter;
