import React, { Component } from 'react'
import Axios from 'axios'


export default class App extends Component {
  state = {
    cards: []
  }

  componentDidMount(){
    this.getCards()
  }

  getCards = async () => {
    const response = await Axios.get('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=3', {withCredentials: true})
    await this.setState({cards: response.data})
    console.log("test test test")
    console.log('this is my data' + response.data)
    return response.data
    
  }

  render() {
    return (
      <div>
        {this.state.cards} Hello this is a placeholder for D O G E T A R O T
      </div>
    )
  }
}

