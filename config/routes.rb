Rails.application.routes.draw do
  namespace :api do
    resources :users do
      resources :spreads do
        resources :cards do
            get "draw_two"
        end
      end
    end
  end
   
end
