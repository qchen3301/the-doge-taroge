class Api::SpreadsController < ApplicationController
    def index
        @user = User.find(params[:user_id])
        @spreads = @user.spreads
        render json: @spreads
    end

    def show 
        @spread = Spread.find(params[:id])
        @user = @spread.user
        render json: @spread
    end

    def create
        @user = User.find(params[:user_id])
        @spread = @user.spreads.create(spread_params)
        
        render json: @spread
    end

    #   update route is defined here but end-user should NOT 
    #   have the ability to update previously drawn spreads
    def update
        @spread = Spread.find(params[:id])
        @spread.update(spread_params)
        render json: @spread
    end

    def destroy
        @spread = Spread.destroy(params[:id])
        render json: 200
    end

    def draw_two
        @spread = Spread.find(params[:spread_id])
        @cards = @spread.cards.draw_two
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

    def spread_params
        params.require(:spread).permit(:date, :notes)
    end
    
end
