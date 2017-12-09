import React from 'react'

const Login = () => {
  return (

    <div className="center-content">

      <h1>Log in to Nice Paper</h1>

      <form id="loginForm" action="" method="post">
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
