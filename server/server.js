const express = require("express")
const app = express()

app.get('/',function (req, res) {
	res.send('<h1>Hello world</h1>')
})

app.get('/data',function (req, res) {
	res.json({name:"heushuo","age":"25"})
})
app.listen("9999")
