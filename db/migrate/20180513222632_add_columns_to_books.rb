class AddColumnsToBooks < ActiveRecord::Migration[5.1]
  def change
    add_column :books, :description, :text, null: false
    add_column :books, :pdf_link, :string, null: false
  end
end
