class Api::CardsController < ApplicationController
    def index
        @spreads = Spread.find(params[:spread_id])
        @cards = @spreads.cards
        render json: @cards
    end

    def show 
        @card = Card.find(params[:id])
        # @spread = @card.spread_id
        render json: @card
    end

    #   create route is defined here but end-users should NOT 
    #   have the ability to 'create' their own cards - these are drawn 
    #   from the external api
    def create
        # @spread = Spread.find(params[:user_id])
        # @cards = @spreads.cards.create(card_params)
        # render json: @spread
    end

    #   update route is defined here but end-user should NOT 
    #   have the ability to update previously drawn cards
    def update
        # @card = Card.find(params[:id])
        # @card.update(card_params)
        # render json: @card
    end

    #   delete route is defined here but end-users should NOT
    #   have the ability to delete cards
    def destroy
        # @card = Card.destroy(params[:id])
        # render json: 200
    end

    def draw_two
        @cards = Card.draw_two
        render json: @cards
    end

    def draw_three
        @cards = Card.draw_three
        render json: @cards
    end

    def draw_four
        @cards = Card.draw_four
        render json: @cards
    end

    def draw_five
        @cards = Card.draw_five
        render json: @cards
    end
    
    private

    def cards_params
        params.require(:card).permit(:card_name, :arcana)
    end

end
