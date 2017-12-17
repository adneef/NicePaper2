import React, { Component } from 'react'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
const API = process.env.REACT_APP_API_URL

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 0,
      userInfo: [],
      schedule: []
    }
  }

  async componentDidMount() {
    console.log('componentDidMount')

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
    this.setState(() => ({
    userInfo:[json],
    role: json.role3
    }))
    console.log('state after update in logIn func:', this.state)
  }

  schedule() {
    console.log('schedule fn')
  }

  render() {
    return (
      <div>
        <Header/>
        <Main
          logIn={ this.logIn }
          schedule={ this.schedule }
          userInfo={ this.state.userInfo[0] }
        />
      </div>
    )
  }
}

export default App
