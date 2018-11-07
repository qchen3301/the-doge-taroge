class Card < ApplicationRecord
  # belongs_to :spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

  def self.draw_two
    
    response = OpenStruct.new(get('/random?n=2'))
    Card.create!([
      {card_name: response.cards[0]["name"], arcana: response.cards[0]["type"]},
      {card_name: response.cards[1]["name"], arcana: response.cards[1]["type"]}
    ])

   
  end
end
