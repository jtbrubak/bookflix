class CreateBookRatings < ActiveRecord::Migration[5.1]
  def change
    create_table :book_ratings do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false
      t.integer :rating, null: false
      t.timestamps
    end
  end
end
