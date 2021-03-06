Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
   resources :users, only: :create
   resources :books, only: [:index, :show]
   resources :book_ratings, only: [:create, :destroy, :update, :index]
   resource :session, only: [:create, :destroy]
  end
  root "static_pages#root"
end
