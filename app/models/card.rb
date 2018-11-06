class Card < ApplicationRecord
  belongs_to :spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

  def self.draw_two(api_id)
    cards = find_by api_id: api_id
    return cards unless cards.nil?

    response = get('/random?n=2')
    create!(  card_name: response['name'],
              arcana: response['type']  )
  end
end
