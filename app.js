const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/MyDB'

const app = express()

mongoose.connect(url, {useNewUrlParser: true})
const con = mongoose.connection

con.on('open', function(){
    console.log("Connected!")
})

app.use(express.json())

const myRouter = require('./routes/myRoute')
app.use('/myRoute', myRouter)

app.listen(9000, ()=>{
    console.log('Server started')
})