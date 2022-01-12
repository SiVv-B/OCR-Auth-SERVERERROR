const ErrorResponse = require ('../Utils/errorResponse')

const errorHandler = (err, req, res, next)=>{
let error = {...err}
error.message = err.message

console.log(err)

if (err.code === 11000) {
    const message = `Duplication Field Value Enter`
    error = new ErrorResponse(message,400)
}

if (err.name === "ValidationError") {
    const message = Object.values(err.errors).map((val) => val.message)
    error = new ErrorResponse(message, 400)
  }

  console.log(error.message)

  res.status(error.statusCode || 500).json({
    success: false,
    error: error.message || "Server Error",
  })
}

module.exports = errorHandler