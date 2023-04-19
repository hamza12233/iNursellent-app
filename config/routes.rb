Rails.application.routes.draw do
  root to: 'home#index'
  get "professionals" => "home#professionals"
  get 'sign_up' => "home#sign_up"
  post 'create_user' => "home#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
