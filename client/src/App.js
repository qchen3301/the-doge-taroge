import React, { Component } from 'react'
import axios from 'axios'


export default class App extends Component {
  state = {
    cards: []
  }

  componentDidMount(){
    this.getCards()
  }

  getCards = async () => {
    const response = await axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3')
    await this.setState({cards: response.data})
  }

  render() {
    return (
      <div>
        {this.state.cards} 
        <h1>Hello this is a placeholder for D O G E T A R O T</h1>
      </div>
    )
  }
}

