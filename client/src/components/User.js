import React, { Component } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


export default class User extends Component {
    state = {
        spreads: [],
        newSpread: {
            date: '',
            notes: ''
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
        try {
        const userId = this.props.match.params.id
        event.preventDefault()
        // alert("New Spread!")
        const newSpread = await axios.post(`/api/users/${userId}/spreads`, this.state.newSpread)
        // console.log(newSpread)
        const cards = await axios.get(`/api/users/${newSpread.data.user_id}/spreads/${newSpread.data.id}/draw_two`)
        // console.log(cards)
        newSpread.data.cards = cards.data
        console.log(newSpread)
        // return newSpread
        } catch (error) {
            console.log(error)
        }
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
            <input type='submit' value='Create A Two-Card Spread'/>
            <br/>---
        </form>
        <br/>
        See your spreads: <br/>
        {spreadsContent}
      </div>
    )
  }
}
