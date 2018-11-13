class Card < ApplicationRecord
  # belongs_to :spread # <- if this is commented back in then the methods below cannot execute unless they are chained to a specific spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

  # this method returns either true/false for the 'reversed' column in the Card table
  def self.reverseBoolean
    [true,false].sample
  end

  def self.draw_two
    response = OpenStruct.new(get('/random?n=2'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"], value: response.cards[0]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"], value: response.cards[1]["value_int"], reversed: self.reverseBoolean}
    ])
  end

  def self.draw_three
    response = OpenStruct.new(get('/random?n=3'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"], value: response.cards[0]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"], value: response.cards[1]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[2]["name"], arcana: response.cards[2]["type"], value: response.cards[2]["value_int"], reversed: self.reverseBoolean}
    ])
  end

  def self.draw_four
    response = OpenStruct.new(get('/random?n=4'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"], value: response.cards[0]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[1]["name"], arcana: response.cards[0]["type"], value: response.cards[1]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[2]["name"], arcana: response.cards[2]["type"], value: response.cards[2]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[3]["name"], arcana: response.cards[3]["type"], value: response.cards[3]["value_int"], reversed: self.reverseBoolean}
    ])
  end

  def self.draw_five
    response = OpenStruct.new(get('/random?n=5'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"] value: response.cards[0]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"] value: response.cards[1]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[2]["name"], arcana: response.cards[2]["type"] value: response.cards[2]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[3]["name"], arcana: response.cards[3]["type"] value: response.cards[3]["value_int"], reversed: self.reverseBoolean},
      {card_name: response.cards[4]["name"], arcana: response.cards[4]["type"] value: response.cards[4]["value_int"], reversed: self.reverseBoolean}
    ])
  end
end
