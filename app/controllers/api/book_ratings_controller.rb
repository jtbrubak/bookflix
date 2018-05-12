class Api::BookRatingsController < ApplicationController
  def create
    @book_rating = BookRating.new(book_rating_params)
    @user = User.find(@book_rating.user_id)
    if @book_rating.save
      render "api/session/show"
    else
      render json: @book_rating.errors.full_messages, status: 422
    end
  end

  def destroy
    @book_rating = BookRating.find_by(book_rating_params)
    @user = User.find(@book_rating.user_id)
    if @book_rating.destroy
      render "api/session/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  def update
    @book_rating = BookRating.find(params[:book_id])
    @user = User.find(params[:user_id])
  end

  private
  def book_rating_params
    params.require(:book_rating).permit(:user_id, :book_id, :rating)
  end
end
