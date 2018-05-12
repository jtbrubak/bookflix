class AddIndices < ActiveRecord::Migration[5.1]
  def change
    add_index :books, :author_id
    add_index :book_ratings, :user_id
    add_index :book_ratings, :book_id
    add_column :users, :created_at, :datetime, null: false
    add_column :users, :updated_at, :datetime, null: false
  end
end
