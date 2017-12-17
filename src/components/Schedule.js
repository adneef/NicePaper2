import React from 'react'
import Event from './Event'

const Schedule = ({
  userInfo,
  id,
  email,
  username
}) => {
  console.log('in schedule, userInfo is:', userInfo)

  // const sched = id.map(event =>
  //   <Event
  //     id={ event.id }
  //   />
  // )

  return (
    <div>
      <h1>This is the schedule</h1>
      <h4>email: { email }</h4>
      <h4>username: { username }</h4>
      <Event
        id={ id }
        userInfo={ userInfo }
      />
    </div>
  )

}

export default Schedule
