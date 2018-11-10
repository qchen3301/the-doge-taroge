import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class User extends Component {
    state = {
        drawNumber: ['draw_two', 'draw_three', 'draw_four', 'draw_five'],
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
        const drawValue = this.state.drawNumber[this.switchDraw]
        console.log(drawValue)
        // alert("New Spread!")
        const newSpread = await axios.post(`/api/users/${userId}/spreads`, this.state.newSpread)
        const cards = await axios.get(`/api/users/${newSpread.data.user_id}/spreads/${newSpread.data.id}/${drawValue}`)
        console.log(drawValue)
        newSpread.data.cards = cards.data
        console.log(newSpread)
        this.setState({newSpread: newSpread.data})
        this.state.spreads.push(this.state.newSpread)
        this.setState({spreads: this.state.spreads})
        }

    switchDraw = (drawNumber) => {
        return (drawNumber)
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
        Create a new spread: <br/>
        ---<br/>
        <form onSubmit = {this.handleSubmit}>
            <input 
                type='text'
                name='date'
                placeholder='Enter the date'
                value={this.state.newSpread.date}
                onChange={this.handleChange}
                required
            /><br/>
            <input 
                type='text'
                name='notes'
                placeholder='Add some notes to this spread'
                value={this.state.newSpread.notes}
                onChange={this.handleChange}
                required
            /><br/>
            <input type='submit' value='Draw A Two-Card Spread' onClick={()=>this.switchDraw(0)}/> 
            <input type='submit' value='Draw A Three-Card Spread' onClick={()=>this.switchDraw(1)}/>
            <input type='submit' value='Draw A Four-Card Spread' onClick={()=>this.switchDraw(2)}/>
            <input type='submit' value='Draw A Pentagram Spread' onClick={()=>this.switchDraw(3)}/>
            <br/>---
        </form>
        <br/>
        See your spreads: <br/>
        {spreadsContent}
      </div>
    )
    }
}