Rails.application.routes.draw do
  get "dashboard/index"
  get "users/new"
  get "users/create"
  root 'sessions#new'
  
  # Session routes
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  
  #dashboard
  get '/dashboard', to: 'dashboard#index'

  # User/signup routes
  get '/signup', to: 'users#new'
  post '/signup', to: 'users#create'
  resources :users, only: [:new, :create]
end