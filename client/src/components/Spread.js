import React, { Component } from 'react'
import axios from 'axios'

export default class Spread extends Component {
  state = {
    cards: []
  }

  async componentDidMount(){
    const userId = this.props.match.params.id
    const spreadId = this.props.match.params.userId

    // const cards = await this.fetchCards(userId, spreadId)

    // this.setState({cards})

  }
  fetchCards = async (userId, spreadId) => {
    const response = await axios.get(`/api/users/${userId}/spreads/${spreadId}/cards`)
    console.log("what in tarnation" + response.data)
    return response.data
  }

  render() {
    return (
      <div>
        Hello world from spread!
      </div>
    )
  }
}
