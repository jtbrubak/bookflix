class BookRating < ActiveRecord::Base
  validates :title, :author_id, :picture_url, :year, presence: true
  belongs_to :book
  belongs_to :user
end
