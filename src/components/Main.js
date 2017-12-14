import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Splash from './Splash'
import Login from './Login'
import Register from './Register'

const Main = ({ logIn }) => {
    return (
      <main>
        <Switch>
          <Route exact path = '/' component={ Splash }/>
          <Route exact path = '/Login' render={routeProps => <Login { ...routeProps } logIn={ logIn } />}/>
          <Route path = '/Register' component={ Register }/>
        </Switch>
      </main>
    )
}

export default Main
