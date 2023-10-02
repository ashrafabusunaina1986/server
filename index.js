var express = require('express')
var cors = require('cors')

var app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

var port = process.env.PORT || 5002
app.listen(port,function(){
    console.log(`running server http://localhost:${port}`)
})