import React, { Component } from 'react'
import Axios from 'axios';

export default class User extends Component {
    state = {
        spreads:[]
    }
    async componentDidMount(){
        const userId = this.props.match.params.id
        const spreads = await this.fetchSpreads(userId)
        
        this.setState({spreads})
    }

    fetchSpreads = async (userId) => {
        const response = await Axios.get(`/api/users/${userId}/spreads`)
        return response.data
    }
  render() {
      const spreadsContent = this.state.spreads.map((spread, i) => {
          return(
              <div key={i}>
              <p>{spread.date}</p>
              <p>{spread.notes}</p>
              </div>
          )
      })
    return (
      <div>
        Hello from single user!
        <br/>
        Create a new spread
        <br/>
        See your spreads: <br/>
        {spreadsContent}
      </div>
    )
  }
}
