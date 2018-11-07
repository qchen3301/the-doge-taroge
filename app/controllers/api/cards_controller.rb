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

    def create
        # @user = User.find(params[:user_id])
        # @spread = @user.spreads.create(spread_params)
        # render json: @spread
    end

    # update route is created but end user should not have the ability to update previously drawn spreads
    def update
        # @spread = Spread.find(params[:id])
        # @spread.update(spread_params)
        # render json: @spread
    end

    def destroy
        # @spread = Spread.destroy(params[:id])
        # render json: 200
    end

    private

    def cards_params
        params.require(:card).permit(:card_name, :arcana)
    end

end
