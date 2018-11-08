import React, { Component } from 'react'
import axios from 'axios'

export default class CreateUser extends Component {
    state = {
        newUser: {
            name: ''
        }
    }

    handleChange = (event) => {
        const newUser = {...this.state.newUser}
        newUser[event.target.name] = event.target.value
        this.setState({newUser})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const response = await axios.post(`/api/users`, this.state.newUser)
    }

  render() {
    return (
      <div>
        Hello from Create User!
        <form onSubmit={this.handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='Enter your name'
                value={this.state.newUser.name}
                onChange={this.handleChange}
                required
            />
            <input type='submit' value='Create New User' />
        </form>
      </div>
    )
  }
}
