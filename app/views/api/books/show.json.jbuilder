json.extract! @book, :id, :title, :year, :picture_url, :description, :pdf_link
json.author @book.author.name
