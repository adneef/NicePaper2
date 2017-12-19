import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'
const API = process.env.REACT_APP_API_URL

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 0,
      userInfo: []
    }
  }

  async componentWillMount() {

    //eventually an example schedule will render from this
  }

  logIn = async (creds) => {
    console.log('Who am I?', creds)
    const res = await fetch(`${API}/token`, {
      method: 'POST',
      credentials: 'same-origin',
      body: JSON.stringify(creds),
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        }
    })
    const json = await res.json()
    this.setState((prevState) => ({
    userInfo: [json],
    role: json.role
    }))
    console.log('state after update in logIn func:', this.state.userInfo)
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
          logIn={ this.logIn }
          userInfo={ this.state.userInfo[0] }
        />
      </div>
    )
  }
}

export default App;
