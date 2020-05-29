const express = require('express')
const bodyParser =require('body-parser')
const UserRouter = require('./routes/UserRoute')

const Database = require('./helpers/database')

Database.connection()



const app = express()

app.set('view engine','ejs')

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/',UserRouter)

module.exports =app