import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Comic Sans MS';
    font-size: 5vh;
`


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
        alert("User Created")
        window.history.back()
        return await axios.post(`/api/users`, this.state.newUser)
    }

  render() {
    return (
      <StyledDiv>
          <p>Create.</p>
          Uh. User?
        <form onSubmit={this.handleSubmit}>
            <input 
                type='text'
                name='name'
                placeholder='Enter your name'
                value={this.state.newUser.name}
                onChange={this.handleChange}
                required
            /><br/>
            <input type='submit' value='Okay Okay Okay Okay Okay' />
        </form>
      </StyledDiv>
    )
  }
}
