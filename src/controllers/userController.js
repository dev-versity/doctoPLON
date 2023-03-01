
import User from "../models/UserModel.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

const login= async(req, res) => {

    try {
        const user = await User.findOne({ email: req.body.email})
        if(!user) return res.status(200).json({message:"user does not exist", success: false})
        const isMatch= await bcrypt.compare(req.body.password, user.password)
        if(!isMatch) return res.status(200).json({message: "password does not match", success: false})
        else{
            const token= jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "1d"})
        }
        res.status(200).json({message: "login succesfull"  , success: true , data: token})
    } catch (error) {
        res.status(500).json({message: "error login", success: false, error})
    }
    
}

export default  login 