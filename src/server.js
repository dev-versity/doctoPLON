import * as path from 'path'

import express from "express"
const app = express() 
app.use(express.json())
import mongoose from '../config/dbConfig.js'

import * as dotenv from 'dotenv'
dotenv.config()

const port=process.env.PORT 

app.listen(port, () => console.log(`application is running on port ${port}`))