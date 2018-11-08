Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :spreads do
        get "draw_two"
        get "draw_three"
        get "draw_four"
        get "draw_five"
        resources :cards 
      end
    end
  end
   
end
