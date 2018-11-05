class Card < ApplicationRecord
  belongs_to :spread
  include HTTParty
  base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'
end
