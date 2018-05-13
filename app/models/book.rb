class Book < ActiveRecord::Base
  validates :title, :author_id, :year, :picture_url, :description, :pdf_link, presence: true
  has_many :ratings,
    class_name: 'BookRating',
    primary_key: :id,
    foreign_key: :book_id
  belongs_to :author
end
