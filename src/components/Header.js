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
      <HomeButton/>
      <LoginButton/>
      <RegisterButton/>
    </div>
  )
}

export default Header
