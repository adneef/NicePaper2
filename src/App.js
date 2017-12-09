import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Login from './components/Login'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

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

        <Router>
          <div>
            {/* <Link to="/"><HomeButton/></Link>
            <Link to="/Login"><LoginButton/></Link>
            <Link to="/Register"><RegisterButton/></Link> */}
            <Route path="/Login" component={Login} />
          </div>
        </Router>
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
