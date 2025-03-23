Rails.application.routes.draw do
  post "/graphql", to: "graphql#execute"
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }, skip: [:registrations, :sessions, :passwords]
  devise_scope :user do
    delete 'logout', to: 'users/omniauth_callbacks#logout', as: :logout
  end
  root 'pages#home'
end
