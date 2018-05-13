json.extract! @book, :id, :title, :year, :picture_url
json.author @book.author.name
