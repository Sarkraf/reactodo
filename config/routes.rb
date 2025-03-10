Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }, skip: [:registrations, :sessions, :passwords]
  devise_scope :user do
    delete 'logout', to: 'users/omniauth_callbacks#logout', as: :logout
  end
  root 'pages#home'
  get 'todos', to: 'todos#index'
  get 'todos/:id', to: 'todos#show'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
