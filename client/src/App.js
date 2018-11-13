import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'
import Spread from './components/Spread'
import CreateUser from './components/CreateUser'

export default class App extends Component {

  render() {
    return (
      <div>
       <Router>
         <Switch>
           <Route exact path='/' component={Users}/>
           <Route exact path='/users/:id' component={User}/>
           <Route exact path='/users/:userId/spreads/:id' component={Spread}/>
           <Route exact path='/createUser' component={CreateUser}/>
           <Route path='/' component={Users}/>
         </Switch>
       </Router>

      </div>
    )
  }
}

