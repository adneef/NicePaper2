import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Main from './components/Main'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      role: 0,
      loggedIn: false
    }
  }

  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;
