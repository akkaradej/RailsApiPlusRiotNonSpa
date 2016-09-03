Rails.application.routes.draw do
  resources :posts
  root to: 'application#root'
end
