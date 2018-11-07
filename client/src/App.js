import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Users from './components/Users'
import User from './components/User'

export default class App extends Component {

  render() {
    return (
      <div>
       <Router>
         <Switch>
           <Route exact path='/users' component={Users}/>
           <Route exact path='/users/:id' component={User}/>
         </Switch>
       </Router>

      </div>
    )
  }
}

