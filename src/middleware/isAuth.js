import jwt  from 'jsonwebtoken';

export const isAuth = async(req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]; // Extract token from header
    req.user = await jwt.verify(token, process.env.JWT_SECRET)// Verify token
    next(); // Move to next middleware/controller
  } catch ( err ) {
    console.log(err)
    res.status(401).json({ message: 'Authentication failed. Invalid token.' });
  }
};
