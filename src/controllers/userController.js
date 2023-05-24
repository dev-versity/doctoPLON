import User   from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import jwt    from "jsonwebtoken"

export const login = async(req, res) => {

  try {
    const user = await User.findOne({ email: req.body.email })
    if ( !user ) return res.status(404).json({ message: "user not found", success: false })

    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if ( !isMatch ) return res.status(401).json({ message: "password does not match", success: false })

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" })
    return res.status(200).json({ message: "login successful", success: true, data: token })
  } catch ( error ) {
    res.status(500).json({ message: "error login", success: false, error })
  }
}

export const register = async (req, res) => {
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
}

