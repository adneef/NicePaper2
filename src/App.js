import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'

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
        <Login/>
      </div>
    )
  }
}

// const Child = ({ match }) => (
//   <div>
//     <h3>ID: {match.params.id}</h3>
//   </div>
// )

export default App;
