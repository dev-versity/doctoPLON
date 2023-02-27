import express from "express"
const app = express() 

import * as dotenv from 'dotenv'
dotenv.config()

const port=process.env.PORT 

app.listen(port, () => console.log(`application is running on port ${port}`) )