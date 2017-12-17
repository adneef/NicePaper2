import React from 'react'
import Event from './Event'

const Schedule = ({
  userInfo
}) => {
  console.log('in schedule, userInfo is:', userInfo)

  const sched = userInfo.map(event =>
    <Event
      id={ event.id }
      email={ event.email }
    />
  )

  return (
    <div>
      <h1>This is the schedule</h1>
      <h3>{ sched }</h3>
    </div>
  )

}

export default Schedule
