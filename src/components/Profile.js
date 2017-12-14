import React from 'react'

const Profile = ({userInfo}) => {
  console.log('in profile, userInfo is:', userInfo)
  return (
  <div>
    <div className="row">
      <p>Username: {userInfo.username}</p>
      <br/><br/>
    </div>
    <div className="row">
      <p>email: {userInfo.email}</p>
      <br/><br/>
    </div>
    <div className="row">
      <p>First Name 1: {userInfo.first_name_1}</p>
      <br/><br/>
    </div>
    <div className="row">
      <p>Last Name 1: {userInfo.last_name_1}</p>
      <br/><br/>
    </div>
    <div className="row">
      <p>First Name 2: {userInfo.first_name_2}</p>
      <br/><br/>
    </div>
    <div className="row">
      <p>Last Name 2: {userInfo.last_name_2}</p>
      <br/><br/>
    </div>
    <div className="row">
      {/* the following line(wedding_date) may need some cleaning up as the original information coming in was:
      <%= userInfo.wedding_date.toString().slice(0, 15) %> */}
      <p>Wedding Date: {userInfo.wedding_date}</p>
    </div>
      <br/>
      <br/>
      {/* <a href="/profile/<%= data.id %>/editprofile"><button className="edit btn-info" type="button" name="button" id="<%= data.id %>">Edit My Profile</button></a> */}

      <br/>
      <br/>
      <br/>
      <br/>

{/* <h5>Create your guest username and password here:</h5>

    <form id="newGuest" action="/profile" method="post">
      <label for="username">Guest Username:</label>
      <input type="text" id="username" name="username" placeholder="guests username" required/>
      <br/>
      <label for="guest_password">Guest Password:</label>
      <input type="text" minlength="8" maxlength="19" id="password" name="password" placeholder="guest password" required/>
      <br/>

      <button type="submit">Submit</button>
    </form> */}
  </div>
  )
}


export default Profile
