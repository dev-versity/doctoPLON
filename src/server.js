import * as path      from 'path'
import userRouter from "./routes/UserRoute.js";
import mongoose       from '../config/dbConfig.js'
import express from "express"
const app = express()
app.use(express.json())

import * as dotenv from 'dotenv'
dotenv.config()

app.use(express.urlencoded({ extended: false }))

const port=process.env.PORT 
app.use("/api/users", userRouter)
app.listen(port, () => console.log(`application is running on port ${port}`))
// http://localhost:3000/login --> front + data 
// http://localhost:4000/api/users/login --> BACK + data 