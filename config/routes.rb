Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root "static_pages#root"

  namespace :api, defaults: {format: :json} do
    
    resources :users, only: [:index, :create, :show] 
  
    resource :session, only: [:create, :destroy]
    
    resources :posts, only: [:index, :show, :create, :destroy] do 
      resources :likes, only: [:create, :destroy]
      resources :comments, only: [:create, :destroy]
      resources :tags, only: [:create, :destroy]
    end

    resources :likes, only: [:index]
    resources :comments, only: [:index]
    resources :tags, only: [:index]
    resources :follows, only: [:index, :show, :create, :destroy]

  end

end
