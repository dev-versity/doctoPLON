import { Router } from "express";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// 1 -crypte password
// 2 -hache password
const userRouter = Router();

userRouter.post("/register", async (req, res) => {
	try {
		const userExist = await User.findOne({ email: req.body.email });
		if (userExist) {
			return res
				.status(200)
				.json({ message: "user already exists", success: false });
		}

		const password = req.body.password;
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		req.body.password = hashedPassword;
		const newUser = new User(req.body);
		await newUser.save();
		res.status(200).json({
			message: "user created successfully",
			success: true,
		});
	} catch (error) {
		console.log(error);
		res.status(500).json({
			message: "error creating user",
			success: false,
			error,
		});
	}
});

userRouter.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		if (!user)
			return res
				.status(200)
				.json({ message: "user does not exist", success: false });
		const isMatch = await bcrypt.compare(req.body.password, user.password);
		if (!isMatch)
			return res
				.status(200)
				.json({ message: "password does not match", success: false });
		else {
			const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
				expiresIn: "1d",
			});
      res
			.status(200)
			.json({ message: "login succesfull", success: true, data: token });
    }
    } catch (error) {
		res.status(500).json({ message: "error login", success: false, error });
	}
});

export default userRouter;
