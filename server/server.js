const express = require("express")
const utils = require("utility")
const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const userRouter = require("./user")
const app = express()

//可以解析cookie
app.use(cookieParser())
//可以解析post参数  接收
app.use(bodyParser.json())

app.use('/user' ,userRouter)
app.listen("9093")
