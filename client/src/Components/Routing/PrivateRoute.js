import React from 'react'
import { Navigate, Route } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem('authToken')
  return (
    <div>
      {
        //if there is something in the localstorage then get the item called authToken
        //then render the component
        token ? children : <Navigate to="/login" />
      }
    </div>
  )
}
export default PrivateRoute
