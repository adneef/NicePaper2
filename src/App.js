import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
const API = process.env.REACT_APP_API_URL

//potential dummy data
// {id: 1, username: "adamN", email: "test@gmail.com", first_name_1: "Adam", last_name_1: "Neef", …}
// account_id
// :
// 1
// created_at
// :
// "2017-10-13T15:19:00.407Z"
// email
// :
// "test@gmail.com"
// first_name_1
// :
// "Adam"
// first_name_2
// :
// "Lisa"
// id
// :
// 1
// last_name_1
// :
// "Neef"
// last_name_2
// :
// "the Magnificent"
// role
// :
// 2
// template_id
// :
// 1
// updated_at
// :
// "2017-10-13T15:19:00.407Z"
// username
// :
// "adamN"
// wedding_date
// :
// "2018-07-24T06:00:00.000Z"
class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 0,
      loggedIn: false,
      userInfo: 'cheese'
    }
  }

  async componentWillMount() {

    // const response = await fetch(`${API}`)
  }

  logIn = async (creds) => {
    console.log('Who am I?', creds)
    const res = await fetch(`${API}/token`, {
      method: 'POST',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    const json = await res.json()
    this.setState((prevState) => ({
    userInfo:json,
    loggedIn: true,
    role: json.role
    }))
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
          logIn={ this.logIn }
          userInfo={ this.state.userInfo }
        />
      </div>
    )
  }
}

export default App;
