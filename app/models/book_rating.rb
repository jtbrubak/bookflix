class BookRating < ActiveRecord::Base
  validates :user_id, :book_id, :rating, presence: true
  validates :user_id, uniqueness: { scope: :book_id }
  belongs_to :book
  belongs_to :user
end
