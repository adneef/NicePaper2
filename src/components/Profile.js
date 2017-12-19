import React from 'react'
const API = process.env.REACT_APP_API_URL

class Profile extends React.Component {

  constructor(props){
    super(props)
    this.state = {
    editing:false
    }
  }

  edit = (e) => {
    e.preventDefault()
    console.log(this.props.userInfo)
    this.setState((prevState) => ({
      editing: true
    }))
  }

  saveChanges = async (e) => {
    e.preventDefault()
    let updatedInfo = {
      username: e.target.username.value,
      email: e.target.email.value,
      first_name_1: e.target.first_name_1.value,
      last_name_1: e.target.last_name_1.value,
      first_name_2: e.target.first_name_2.value,
      last_name_2: e.target.last_name_2.value,
      wedding_date: e.target.wedding_date.value,
    }
    console.log('updatedInfo:', updatedInfo)
    const res = await fetch(`${API}/profile/${this.props.userInfo.id}/editprofile`, {
      method: 'PATCH',
      body: updatedInfo,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    const json = await res.json()
    console.log(json)
    this.setState((prevState) => ({
      userInfo: [json],
      editing: false
    }))
  }

  render() {
    return (
    <div>
      {this.state.editing ?
        <div>
          <h1> Edit Profile </h1>
          <form id='editProfileForm' onSubmit={ this.saveChanges }>
            <label htmlFor='username'>User Name:</label>
            <input type='text' name='username' defaultValue={this.props.userInfo.username}/>

            <label htmlFor='email'>Email:</label>
            <input type='text' name='email' defaultValue={this.props.userInfo.email}/>

            <label htmlFor='first_name_1'>First Name 1:</label>
            <input type='text' name='first_name_1' defaultValue={this.props.userInfo.first_name_1}/>

            <label htmlFor='last_name_1'>Last Name 1:</label>
            <input type='text' name='last_name_1' defaultValue={this.props.userInfo.last_name_1}/>

            <label htmlFor='first_name_2'>First Name 2:</label>
            <input type='text' name='first_name_2' defaultValue={this.props.userInfo.first_name_2}/>

            <label htmlFor='last_name_2'>Last Name 2:</label>
            <input type='text' name='last_name_2' defaultValue={this.props.userInfo.last_name_2}/>

            <label htmlFor='wedding_date'>Wedding Date:</label>
            <input type='text' name='wedding_date' defaultValue={this.props.userInfo.wedding_date}/>

            <button>Save Changes</button>
          </form>
        </div>
        :
        <div>
          <h1>Profile</h1>
          <p>User Name: {this.props.userInfo.username}</p>
          <p>Email: {this.props.userInfo.email}</p>
          <p>First Name 1: {this.props.userInfo.first_name_1}</p>
          <p>Last Name 1: {this.props.userInfo.last_name_1}</p>
          <p>First Name 2: {this.props.userInfo.first_name_2}</p>
          <p>Last Name 1: {this.props.userInfo.last_name_2}</p>
          <p>Wedding Date: {this.props.userInfo.wedding_date}</p>
          <button onClick = {this.edit}> Edit </button>
        </div>
      }
    </div>
    )
  }
}

export default Profile
