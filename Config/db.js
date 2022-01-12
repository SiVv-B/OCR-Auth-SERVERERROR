//connect Server to mongodb

const mongoose = require("mongoose")

const connectDB = async () =>{
    await mongoose.connect(process.env.DATABASE_CONNECTION , (error) => {
        if (error) {
          console.log("connexion to the database  failed ")
        } else {
          console.log("database is connected")
        }
      })
}

  module.exports = connectDB

//export this method to server.js