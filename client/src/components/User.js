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
    text-align: center;
`
const TextH1 = styled.h1`
    font-family: 'Comic Sans MS';
    font-style: 'italic';
    font-size: 10vh;
`
const TextH5 = styled.h5`
    font-family: 'Arial';
    font-style: italic;
    font-size: 1vh;
    text-align: center;
`

export default class User extends Component {
    state = {
        drawCommand: '',
        spreads: [],
        newSpread: {
            date: '',
            notes: '',
            cards:[]
        }
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

    handleChange = (event) => {
        const newSpread = {...this.state.newSpread}
        newSpread[event.target.name] = event.target.value
        this.setState({newSpread})
    }

    handleSubmit = async (event) => {
        event.preventDefault()
        const userId = this.props.match.params.id
        var drawValue = this.state.drawCommand
        /*  handleSubmit "one-shots" a couple of different axios calls. 
            While conceptually, a virtual "spread" does not need to have virtual "cards", 
            that approach doesn't make much contexual sense - a game of Poker isn't played
            with players declaring they have a 'hand' and then drawing from a deck
            the two consts below make an axios POST request, and then takes the data returned in state
            to make a GET request, working with state.drawValue to determine which draw_x method to fire */
        const newSpread = await axios.post(`/api/users/${userId}/spreads`, this.state.newSpread)
        const cards = await axios.get(`/api/users/${newSpread.data.user_id}/spreads/${newSpread.data.id}/${drawValue}`)
        /*  since newSpread is a JSON object with a key-value pair that IS cards
            the data returned that is now inside the const cards 
            can be set equal to newSpread.data.cards   */
        newSpread.data.cards = cards.data
        this.setState({newSpread: newSpread.data})
        /*  the newSpread is appended to the end of state.spread and 
            the setState function triggered to dynamically update the component 
            bad practice, maybe */
        this.state.spreads.push(this.state.newSpread)
        this.setState({spreads: this.state.spreads})
    }
    
    /*  this function evaluates the onClick args to determine
        which 'draw_x' method in Spreads.rb and Cards.rb makes the external API call*/
    handleDraw = async (drawCommand) => {
        this.setState({drawCommand})
    }

    goBack = () => {
        this.props.history.goBack()
    }

  render() {
      const spreadsContent = this.state.spreads.map((spread, i) => {
          return(
              <div key={i}>
              <p><Link to={`/users/${this.props.match.params.id}/spreads/${spread.id}`}>{spread.created_at}</Link></p>
              <TextH5>Notes</TextH5>
              <TextH5>{spread.notes}</TextH5>
              </div>
          )
      })
    return (
      <StyledDiv>
        <TextH1>S E E T H E D O G E</TextH1>
        <TextH5>s e e t h e c o d e</TextH5>
        
        ░░░░░░░░░▄░░░░░░░░░░░░░░▄░░░░<br/>
        ░░░░░░░░▌▒█░░░░░░░░░░░▄▀▒▌░░░<br/>
        ░░░░░░░░▌▒▒█░░░░░░░░▄▀▒▒▒▐░░░<br/>
        ░░░░░░░▐▄▀▒▒▀▀▀▀▄▄▄▀▒▒▒▒▒▐░░░<br/>
        ░░░░░▄▄▀▒░▒▒▒▒▒▒▒▒▒█▒▒▄█▒▐░░░<br/>
        ░░░▄▀▒▒▒░░░▒▒▒░░░▒▒▒▀██▀▒▌░░░<br/>
        ░░▐▒▒▒▄▄▒▒▒▒░░░▒▒▒▒▒▒▒▀▄▒▒▌░░<br/>
        ░░▌░░▌█▀▒▒▒▒▒▄▀█▄▒▒▒▒▒▒▒█▒▐░░<br/>
        ░▐░░░▒▒▒▒▒▒▒▒▌██▀▒▒░░░▒▒▒▀▄▌░<br/>
        ░▌░▒▄██▄▒▒▒▒▒▒▒▒▒░░░░░░▒▒▒▒▌░<br/>
        ▀▒▀▐▄█▄█▌▄░▀▒▒░░░░░░░░░░▒▒▒▐░<br/>
        ▐▒▒▐▀▐▀▒░▄▄▒▄▒▒▒▒▒▒░▒░▒░▒▒▒▒▌<br/>
        ▐▒▒▒▀▀▄▄▒▒▒▄▒▒▒▒▒▒▒▒░▒░▒░▒▒▐░<br/>
        ░▌▒▒▒▒▒▒▀▀▀▒▒▒▒▒▒░▒░▒░▒░▒▒▒▌░<br/>
        ░▐▒▒▒▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▒▄▒▒▐░░<br/>
        ░░▀▄▒▒▒▒▒▒▒▒▒▒▒░▒░▒░▒▄▒▒▒▒▌░░<br/>
        ░░░░▀▄▒▒▒▒▒▒▒▒▒▒▄▄▄▀▒▒▒▒▄▀░░░<br/>
        ░░░░░░▀▄▄▄▄▄▄▀▀▀▒▒▒▒▒▄▄▀░░░░░<br/>
        ░░░░░░░░░▒▒▒▒▒▒▒▒▒▒▀▀░░░░░░░░<br/>

        <form onSubmit = {this.handleSubmit}>
            <input type='submit' value='Draw A Two-Card Spread' onClick={()=>this.handleDraw('draw_two')} /> 
            <input type='submit' value='Draw A Three-Card Spread' onClick={()=>this.handleDraw('draw_three')} />
            <input type='submit' value='Draw A Four-Card Spread' onClick={()=>this.handleDraw('draw_four')}/>
            <input type='submit' value='Draw A Pentagram Spread' onClick={()=>this.handleDraw('draw_five')}/>
          
        </form>
        <br/>
        Your Previous Spreads <br/>
        {spreadsContent} <br/>
        <button onClick={()=>{this.goBack()}}>Go Back To Users</button>
      </StyledDiv>
    )
    }
}