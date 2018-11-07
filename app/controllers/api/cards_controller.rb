class Api::CardsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @spreads = @user.spreads
        @cards = @spreads.cards
        render json: @cards
    end

    def show 
        # @spread = Spread.find(params[:id])
        # @user = @spread.user
        # render json: @spread
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
