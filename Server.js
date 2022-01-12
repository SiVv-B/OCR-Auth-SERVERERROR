require("dotenv").config({ path: "./config.env" })
//express
const express = require ('express')
//to connect to the DB
const connectDB = require("./Config/db")
//import error middleware
const errorHandler = require("./Middleware/error")
//connect server and client
var cors = require("cors")


connectDB()
//express
const app = express()


//middleware takes data from the body:
app.use(express.json())
//connect the Routes with Server.js
//redirect everything with /api/auth/something to AuthRoute
app.use('/api/auth', require('./Routes/AuthRoute'))
//Acess to private Routes
app.use('/api/private', require('./Routes/PrivateRoute'))
//error middleware (should be always the last  middleware added)
app.use(errorHandler)
//connect with cors
app.use(cors())


const PORT = process.env.PORT || 5000
/* app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`)) */

const server = app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

//server errors setups
process.on('unhandledRejection', ()=>{
//Only show the main error
console.log(`logged Error: ${error}`)
//Stop the server without crashing it
server.close(() => process.exit(1))
})
