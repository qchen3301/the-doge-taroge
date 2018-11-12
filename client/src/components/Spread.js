import React, { Component } from 'react'
import axios from 'axios'

export default class Spread extends Component {
  state = {
    spread: {
      date:'', 
      notes:'' 
    },
    cards: []
  }

  async componentDidMount(){
    const userId = this.props.match.params.userId
    const spreadId = this.props.match.params.id
    const cards = await this.fetchCards(userId, spreadId)
    const spread = await this.fetchSpread(userId,spreadId)
    this.setState({cards, spread})
  }

  fetchCards = async (userId, spreadId) => {
    const response = await axios.get(`/api/users/${userId}/spreads/${spreadId}/cards`)
    return response.data
  }

  fetchSpread = async (userId, spreadId) => {
    const response = await axios.get(`/api/users/${userId}/spreads/${spreadId}`)
    return response.data
  }

  goBack = () => {
    window.history.back()
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
        <i>Hello world from spread!</i> <br/>
        <i>Here is the date of your spread:</i> <u>{this.state.spread.date}</u> <br/>
        <i>Here are the notes from your spread:</i> <u>{this.state.spread.notes}</u> <br/>
        Here are your cards: <br/>
        {cardsContent} 
        ----<br/>
        Delete this spread <br/>
        <button onClick={()=>{this.goBack()}}>Go Back To Spreads</button>
      </div>
    )
  }
}
