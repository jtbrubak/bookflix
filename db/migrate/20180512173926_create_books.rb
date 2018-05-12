class CreateBooks < ActiveRecord::Migration[5.1]
  def change
    create_table :books do |t|
      t.string :title, null: false
      t.integer :author_id, null: false
      t.integer :year, null: false
      t.string :picture_url, null: false
      t.timestamps
    end
  end
end
