import React from 'react'
import Event from './Event'

const Schedule = ({ userInfo }) => {
  console.log('in schedule, userInfo is:', userInfo)
  return (
    <div>
      <h1>Hi, Ken!</h1>
      <h2>You are a destroyer of worlds!</h2>
      <Event userInfo={ userInfo }/>
    </div>

  )
}


export default Schedule
