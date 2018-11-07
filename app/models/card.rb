class Card < ApplicationRecord
  # belongs_to :spread <- if this is commented back in then the methods below cannot execute unless they are chained to a specific spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

  def self.draw_two
    response = OpenStruct.new(get('/random?n=2'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"]}
    ])
  end

  def self.draw_three
    response = OpenStruct.new(get('/random?n=3'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.card[1]["name"], arcana: response.cards[1]["type"]},
      {card_name: response.card[2]["name"], arcana: response.cards[2]["type"]}
    ])
  end

  def self.draw_four
    response = OpenStruct.new(get('/random?n=4'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.cards[1]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.cards[2]["name"], arcana: response.cards[2]["type"]},
      {card_name: response.cards[3]["name"], arcana: response.cards[3]["type"]}
    ])
  end

  def self.draw_five
    response = OpenStruct.new(get('/random?n=5'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"]},
      {card_name: response.cards[2]["name"], arcana: response.cards[2]["type"]},
      {card_name: response.cards[3]["name"], arcana: response.cards[3]["type"]},
      {card_name: response.cards[4]["name"], arcana: response.cards[4]["type"]}
    ])
  end
end
