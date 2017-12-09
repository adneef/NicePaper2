import React from 'react'
import HomeButton from './subsection/HomeButton'
import LoginButton from './subsection/LoginButton'
import RegisterButton from './subsection/RegisterButton'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <Router>
        <div>
          <Link to="/"><HomeButton/></Link>
          <Link to="/Login"><LoginButton/></Link>
          <Link to="/Register"><RegisterButton/></Link>
          <Route path="/:id" />
        </div>
      </Router>
    </div>
  )
}

export default Header
