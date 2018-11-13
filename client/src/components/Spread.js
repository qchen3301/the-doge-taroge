import React, { Component } from 'react'
import axios from 'axios'
import styled from 'styled-components'

const TarotStyled = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  font-family: 'Comic Sans MS';
  font-size: 3vh;
  text-shadow: 2px 2px #FF0000;
  border-style: double;
  border-radius: 45px;
  width: 30%;
  height: 75%;
  background-image: url("https://raw.githubusercontent.com/qchen3301/the-doge-taroge/master/assets/doge.jpg");
  padding: 5%;
`
const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`

export default class Spread extends Component {
  state = {
    spread: {
      date:'', 
      notes:'',
      created_at: '' 
    },
    newNote:'',
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

  handleDelete = async () => {
    const userId = this.state.spread.user_id
    const spreadId = this.state.spread.id
    await axios.delete(`/api/users/${userId}/spreads/${spreadId}`)
    this.props.history.goBack()
  } 

  handleChange = (event) => {
    const spread = {...this.state.spread}
    spread[event.target.name] = event.target.value
    this.setState({spread})
  }
 
  // goBack function will save any notes made to this spread
  handleUpdate = async () => {
    const userId = this.state.spread.user_id
    const spreadId = this.state.spread.id
    await axios.patch(`/api/users/${userId}/spreads/${spreadId}`, this.state.spread)
    const spread = this.state.spread
    this.setState({spread})
  }
  
  goBack = () => {
    this.handleUpdate()
    this.props.history.goBack()
  }

  render() {
    const cardsContent = this.state.cards.map((card, i)=> {
      return(
        <TarotStyled key={i}>
          <h2>{card.card_name}</h2>
          <h3>{card.arcana} arcana</h3>
          {/* if the card has been "drawn" "reversed" this ternary will account for that column's boolean being true */}
          {card.reversed ?
            (<h1><u><b><i>REVERSED!!!!!</i></b></u></h1>) 
            : ''}
        </TarotStyled>
      )
    })
    return (
      <StyledDiv>
        {cardsContent} 
        Dang that's an interesting spread. Care to add some notes about it? <br/>
        <textarea 
          rows="4" 
          cols="50" 
          name="notes"
          value={this.state.spread.notes}
          onChange={this.handleChange}  
          placeholder={this.state.spread.notes}>
          </textarea><br/>
        <button onClick={()=>{this.handleDelete()}}>Delete this spread</button> <br/>
        <button onClick={()=>{this.goBack()}}>Go Back To Spreads</button>
      </StyledDiv>
    )
  }
}
