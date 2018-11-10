import React, { Component } from 'react'
import axios from 'axios'

export default class Spread extends Component {
  state = {
    cards: []
  }

  async componentDidMount(){
    const userId = this.props.match.params.userId
    const spreadId = this.props.match.params.id
    const cards = await this.fetchCards(userId, spreadId)

    this.setState({cards})
  }

  fetchCards = async (userId, spreadId) => {
    const response = await axios.get(`/api/users/${userId}/spreads/${spreadId}/cards`)
    return response.data
  }

  render() {
    const cardsContent = this.state.cards.map((card, i)=> {
      return(
        <div key={i}>
          <h2>{card.card_name}</h2>
          <h3>{card.arcana} arcana</h3>
        </div>
      )
    })
    return (
      <div>
        Hello world from spread! Here are your cards: <br/>
        {cardsContent} 
        ----<br/>
        Delete this spread
      </div>
    )
  }
}
