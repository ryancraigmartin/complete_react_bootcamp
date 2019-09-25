import React, { Component } from 'react'
import axios from 'axios'
import Card from './Card'
import './Deck.css'
const API_BASE_URL = 'https://deckofcardsapi.com/api/deck'
class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      deck: null,
      drawn: []
    }
  }

  async componentDidMount() {
    let deck = await axios.get(`${API_BASE_URL}/new/shuffle/`)
    console.log(deck.data)
    this.setState({ deck: deck.data })
  }

  getCard = async () => {
    let deckId = this.state.deck.deck_id
    try {
      const cardURL = `${API_BASE_URL}/${deckId}/draw/`
      let cardRes = await axios.get(cardURL)
      console.log(cardRes)
      if (cardRes.data.success !== true) {
        throw new Error('No cards remaining!')
      }
      let card = cardRes.data.cards[0]
      console.log('card: ', card)
      this.setState(st => ({
        drawn: [
          ...st.drawn,
          {
            id: card.code,
            image: card.image,
            name: `${card.value} of ${card.suit}`
          }
        ]
      }))
    } catch (err) {
      alert(err)
    }
  }

  render() {
    const cards = this.state.drawn.map(c => <Card name={c.name} image={c.image} key={c.id} />)
    return (
      <div>
        <h1 className="Deck-title">Card Dealer</h1>
        <h2 className="Deck-subtitle">A little demo made with React</h2>
        <button onClick={this.getCard}>Get Card!</button>
        <div className="Deck-cardarea">{cards}</div>
      </div>
    )
  }
}

export default Deck
