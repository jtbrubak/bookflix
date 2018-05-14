class Api::BookRatingsController < ApplicationController
  def index
    @book_rating = BookRating.find_by(book_id: params[:book_id], user_id: params[:user_id])
    if @book_rating
      render "api/book_ratings/show"
    else
      render json: { rating: nil, id: nil }
    end
  end

  def create
    @book_rating = BookRating.new(book_rating_params)
    if @book_rating.save
      render "api/book_ratings/show"
    else
      render json: @book_rating.errors.full_messages, status: 422
    end
  end

  def destroy
    @book_rating = BookRating.find(params[:id])
    if @book_rating.destroy
      render "api/book_ratings/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  def update
    @book_rating = BookRating.find(params[:id])
    if @book_rating.update(book_rating_params)
      render "api/book_ratings/show"
    else
      render json: ["Not found"], status: 404
    end
  end

  private
  def book_rating_params
    params.require(:book_rating).permit(:user_id, :book_id, :rating)
  end
end
