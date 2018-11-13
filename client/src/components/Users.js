import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const StyledDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: 'Arial';
`
const TextH1 = styled.h1`
    font-family: 'Comic Sans MS';
    font-style: 'italic';
    font-size: 10vh;
`

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
        console.log(response.data)
    }

  render() {
      const usersContent = this.state.users.map((user, i) => {
          return(
              <StyledDiv key={i}>
                <p><Link to={`/users/${user.id}`}>{user.name}</Link></p>
              </StyledDiv>
          )
      })
    return (
      <StyledDiv>
        <TextH1>THE DOGE T A R O G E </TextH1>
        {usersContent}
        <p><Link to="/CreateUser">Click Here To Create A User but don't click me unless you're sure there's no back button to this page</Link></p>
      </StyledDiv>
    )
  }
}
