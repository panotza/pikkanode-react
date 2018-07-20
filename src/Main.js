import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Create from './pages/Create'

const Main = (props) => (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/signin' exact component={SignIn} />
    <Route path='/signup' exact component={SignUp} />
    <Route path='/create' exact component={Create} />
  </Switch>
)

export default Main
