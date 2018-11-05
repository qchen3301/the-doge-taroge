Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :spreads do
        resources :cards
      end
    end
  end
end
