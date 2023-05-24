import { Router }          from "express";
import { login, register, userInfo } from "../controllers/userController.js";
import { isAuth } from "../middleware/isAuth.js";

// 1 -crypte password
// 2 -hache password
const userRouter = Router();

userRouter.post("/register", register);

userRouter.post("/login", login);

userRouter.get("/get-user-info-by-id", isAuth, userInfo);

export default userRouter;
