import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Users from './components/Users'

export default class App extends Component {

  render() {
    return (
      <div>
       <Router>
         <Switch>
           <Route exact path='/' component={Users}/>
         </Switch>
       </Router>

      </div>
    )
  }
}

