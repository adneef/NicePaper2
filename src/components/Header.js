import React from 'react'
import HomeButton from './subsection/HomeButton'
import LoginButton from './subsection/LoginButton'
import RegisterButton from './subsection/RegisterButton'
import ProfileButton from './subsection/ProfileButton'
import ScheduleButton from './subsection/ScheduleButton'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='navbar'>
      <Link to="/"><HomeButton/></Link>
      <Link to="/Login"><LoginButton/></Link>
      <Link to="/Register"><RegisterButton/></Link>
      <Link to="/Profile"><ProfileButton/></Link>
      <Link to="/Schedule"><ScheduleButton/></Link>
    </div>
  )
}

export default Header
