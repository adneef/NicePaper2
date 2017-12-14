import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
const API = process.env.REACT_APP_API_URL

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 0,
      loggedIn: false,
      schedule: [],
      userInfo: []
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
    console.log(json)
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
          logIn={this.logIn}
        />
      </div>
    )
  }
}

export default App;
