Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  root 'pages#index'

  get '*path', to: 'pages#index'
end
