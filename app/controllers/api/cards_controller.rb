require 'rubygems'
require 'httparty'

class Api::CardsController < ApplicationController
    include HTTParty
    base_uri 'https://rws-cards-api.herokuapp.com/api/v1/cards'

    def self.draw_two
        get("/random?n=2")
    end

    def self.draw_three
        get("/random?n=3")
    end

    def self.draw_four
        get("/random?n=4")
    end

    def self.draw_five
        get("/random?n=5")
    end
end
