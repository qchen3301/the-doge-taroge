class Card < ApplicationRecord
  belongs_to :spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

  def self.draw_two

    response = get('/random?n=2')
    
    # create!(  card_name: response['name'],
    #           arcana: response['type']  )
  end
end
