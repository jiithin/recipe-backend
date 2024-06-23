require ('dotenv').config()
require('./DB/connection')

const express = require('express')
const cors = require('cors')
const router=require('./Router/router')

//'server' is just a name
const server = express()

server.use(cors())

server.use(express.json())

server.use(router)



const PORT = 3000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})


server.get('/',(req,res)=>{
    res.send('<h1>Server has started... waiting for client request</h1>')
})