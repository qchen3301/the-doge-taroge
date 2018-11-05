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

    # update route is created but end user should not have the ability to update previously drawn spreads
    def update
        @spread = Spread.find(params[:id])
        @spread.update(spread_params)
        render json: @spread
    end

    def destroy
        @spread = Spread.destroy(params[:id])
        render json: 200
    end

    private

    def spread_params
        params.require(:spread).permit(:date, :notes)
    end
end
