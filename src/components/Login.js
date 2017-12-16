import React from 'react'

const Login = ({ logIn }) => {

  const getCreds = (e) => {
    e.preventDefault()
    const creds = {
      email: e.target.email.value,
      password: e.target.password.value
    }
    logIn(creds)
  }
  return (

    <div className="center-content">

      <h1>Log in to Nice Paper</h1>

      <form onSubmit={getCreds} id="loginForm" action="" method="post">
        <label htmlFor="email">Email/Username:</label>
        <input type="text" id="email" name="email" placeholder="email/username"/>
        <br/>
        <label htmlFor="password">Password:</label>
        <input type="password" minLength="8" maxLength="19" id="password" name="password" placeholder="password"/>
        <button type="submit" id="loginBtn">Login</button>
      </form>
    </div>

  )
}


export default Login
