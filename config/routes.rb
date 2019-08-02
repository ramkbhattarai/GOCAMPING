Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "static_pages#root"
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show]
    resource :session, only: [:create, :destroy] 
    resources :sites, only: [:index, :create, :show, :destroy] do 
      resources :reviews, only: [:create, :index, :update]
    end
    resources :reviews, only: [:show, :destroy]
  end
end
