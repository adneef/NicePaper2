import React from 'react'

const Register = () => {
  return (
    <div>
      <h1>Register with Nice Paper</h1>

    <form id="newOwner" action="" method="post">
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" name="email" placeholder="email" required/>
      <br/>
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" name="username" placeholder="username" required/>
      <br/>
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" minlength="8" maxlength="19" name="password" placeholder="password" required/>
      <br/>
      <label htmlFor="first_name_1">First First Name:</label>
      <input type="text" id="first_name_1" name="first_name_1" placeholder="1st first name" required/>
      <br/>
      <label htmlFor="last_name_1">First Last Name:</label>
      <input type="text" id="last_name_1" name="last_name_1" placeholder="1st last name" required/>
      <br/>
      <label htmlFor="first_name_2">Second First Name:</label>
      <input type="text" id="first_name_2" name="first_name_2" placeholder="2nd first name" required/>
      <br/>
      <label htmlFor="last_name_2">Second Last Name:</label>
      <input type="text" id="last_name_2" name="last_name_2" placeholder="2nd last name" required/>
      <br/>
      <label htmlFor="wedding_date">Tentative Wedding Date:</label>
      <input type="date" id="wedding_date" name="wedding_date" placeholder="tentative wedding date"/>

      <button type="submit" id="registerOwner">Submit</button>
    </form>
    </div>
  )
}


export default Register
