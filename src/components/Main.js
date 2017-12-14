import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Splash from './Splash'
import Login from './Login'
import Register from './Register'
import Schedule from './Schedule'
import Profile from './Profile'

const Main = ({
  logIn,
  userInfo
  }) => {
    console.log('in main, userInfo is:', userInfo)

    return (
      <main>
        <Switch>
          <Route exact path = '/' component={ Splash }/>
          <Route exact path = '/Login' render={routeProps => {
             return <Login
               { ...routeProps }
               logIn={ logIn }
              />
            }
            }
          />
          <Route path = '/Register' component={ Register }/>
          <Route path = '/Schedule' render={ routeProps => {
            return <Schedule
              {...routeProps}
              userInfo={'cheese'}
            />
            }
          }
          />
          <Route path = '/Profile' render={ routeProps => {
            return <Profile
              {...routeProps}
              userInfo={userInfo}
            />
            }
          }
          />
        </Switch>
      </main>
    )
}

export default Main
