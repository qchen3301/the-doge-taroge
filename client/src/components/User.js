import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


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
        const response = await axios.get(`/api/users/${userId}/spreads`)
        return response.data
    }
  render() {
      const spreadsContent = this.state.spreads.map((spread, i) => {
          return(
              <div key={i}>
              <p><Link to={`/users/${this.props.match.params.id}/spreads/${spread.id}`}>{spread.date}</Link></p>
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
