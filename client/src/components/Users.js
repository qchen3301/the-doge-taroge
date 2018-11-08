import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class Users extends Component {
    state = {
        users: []
    }

    componentDidMount = async () => {
        await this.fetchUsers()
    }

    fetchUsers = async() => {
        const response = await axios.get('/api/users')
        this.setState({users: response.data})
    }

  render() {
      const usersContent = this.state.users.map((user, i) => {
          return(
              <div key={i}>
                <h3><Link to={`/users/${user.id}`}>{user.name}</Link>, user id: {user.id}</h3>
              </div>
          )
      })
    return (
      <div>
        <h1>Hello from Users.js component</h1>
        <h2>Here is a list of all users</h2>
        {usersContent}
        <b><Link to="/CreateUser">Click Here To Create A User</Link></b>
      </div>
    )
  }
}
