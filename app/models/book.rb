class Book < ActiveRecord::Base
  validates :title, :artist_id, :year, presence: true
  has_many :ratings,
    class_name: 'BookRating',
    primary_key: :id,
    foreign_key: :book_id
  belongs_to :author
end
