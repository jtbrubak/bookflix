class Api::BooksController < ApplicationController

  def show
    @book = Book.find(params[:id])
    if @book
      render 'api/books/show'
    else
      render json: ['Not found'], status: 404
    end
  end

  def index
    @books = Book.all.order('title')
    render 'api/books/index'
  end

end
