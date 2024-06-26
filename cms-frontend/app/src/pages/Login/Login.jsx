import React from 'react'
import "./Login.css"
import RegitstrationForm from "../../components/RegistrationForm/RegistrationFrom"

const Login = ({ setUser, user }) => {
  return (
    <div className='login-page'>
      <div className="left-page"></div>
      <RegitstrationForm setUser={setUser} user={user} />
    </div>
  )
}

export default Login